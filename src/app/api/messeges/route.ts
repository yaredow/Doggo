import { getCurrentUser } from "@/data/user";
import prisma from "@/utils/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(reques: NextRequest) {
  try {
    const body = await reques.json();
    const currentUser = await getCurrentUser();
    const { message, conversationId, image } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newMessage = await prisma.message.create({
      data: {
        image,
        body: message,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser?.id,
          },
        },
        seen: {
          connect: {
            id: currentUser?.id,
          },
        },
      },
      include: {
        seen: true,
        sender: true,
      },
    });

    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            seen: true,
          },
        },
      },
    });

    return NextResponse.json(updatedConversation, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
