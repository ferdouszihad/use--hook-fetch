import { use } from "react";

const MessageText = ({ promise }) => {
  const msg = use(promise);
  return <div className="py-10 text-2xl">{msg}</div>;
};

export default MessageText;
