import { PROFILE_PIC } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center pt-2 m-1">
      {PROFILE_PIC}
      <span className="font-semibold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
