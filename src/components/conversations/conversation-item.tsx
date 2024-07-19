import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Conversation, Message, User } from "@prisma/client";
import DefaultPf from "@/../public/images/Default_pfp.svg";
import { formatDate } from "@/lib/helpers";

type ConversationWithDetails = Conversation & {
  users: User[];
  messages: Message[];
};

type ConversationItemProps = {
  conversation: ConversationWithDetails;
  currentLoggedInUserId: string;
};

export default function ConversationItem({
  conversation,
  currentLoggedInUserId,
}: ConversationItemProps) {
  const otherUser = conversation.users.find(
    (user) => user.id !== currentLoggedInUserId,
  );
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <Link
      href={`/conversations/${conversation.id}`}
      className="shrink dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="flex items-center justify-center">
            <AvatarImage
              src={otherUser?.image || DefaultPf.src}
              alt={otherUser?.name || ""}
              width={6}
              height={6}
              className="h-10 w-10"
            />
          </Avatar>

          <div className="flex flex-col">
            <span>{otherUser?.name}</span>
            {conversation.messages.length > 0 ? (
              <span className="truncate text-xs text-muted-foreground">
                {lastMessage.body}
              </span>
            ) : (
              <span className="truncate text-xs text-muted-foreground">
                Start a conversation
              </span>
            )}
          </div>
        </div>
        <span className="text-xs">{formatDate(conversation.createdAt)}</span>
      </div>
    </Link>
  );
}
