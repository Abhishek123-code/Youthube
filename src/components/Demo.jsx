import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  //heavy operation
  // const prime = findNthPrime(text);
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "w-96 m-2 p-2 border h-96 border-black " +
        (isDarkTheme && "bg-gray-500 text-white")
      }
    >
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className="p-2 m-5 bg-green-500"
      >
        Switch Mode
      </button>

      <div>
        <input
          className="border w-72 p-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-2 font-bold">Nth prime number :{prime}</div>
    </div>
  );
};

export default Demo;
