import { useEffect, useState } from "react";
import ChatMessage from "./ChatMesage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(20) + "😶‍🌫️😶‍🌫️",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className=" mx-6 p-2 h-[500px] border border-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {/* Dont use index as key */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form Submit", LiveMessage);
          dispatch(
            addMessage({
              name: "Abhishek Ojha",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
        className=""
      >
        <input
          className="px-2 w-80"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
      {chatMessages.map((chat, index) => (
        <ChatMessage name={chat.name} message={chat.message} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
