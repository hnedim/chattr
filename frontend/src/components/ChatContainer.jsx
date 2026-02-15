import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore.js";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";

export default function ChatContainer() {
  const { messages, isMessagesLoading, getMessages, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading) return <div>Loading...</div>;

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <p>messages...</p>
      <MessageInput />
    </div>
  );
}
