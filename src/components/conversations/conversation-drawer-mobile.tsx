"use client";

import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ConversationDrawerContent from "./conversation-drawer-content";
import { User } from "@prisma/client";

type ConversationDrawerMobileProps = {
  selectedUser: User;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ConversationDrawerMobile({
  selectedUser,
  onDelete,
}: ConversationDrawerMobileProps) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="rounded-full">
            <EllipsisVertical />
            <span className="sr-only">Toggle profile drawer</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <ConversationDrawerContent
            onDelete={onDelete}
            selectedUser={selectedUser}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
