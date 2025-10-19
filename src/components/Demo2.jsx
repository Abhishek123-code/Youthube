import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  /**
   * not like=> ref=0
   * ref= {current:0}
   *
   */
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log(" Hi there " + Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-2 p-2 w-96 h-96 border">
      <button
        onClick={() => {
          x = x + 1;
        }}
        className="m-2 p-2 bg-green-500"
      >
        increase x
      </button>
      <div className=" font-bold text-xl">let = {x}</div>
      <button onClick={() => setY(y + 1)} className="m-2 p-2 bg-green-500">
        increase y
      </button>
      <div className=" font-bold text-xl">state = {y}</div>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref.current);
        }}
        className="m-2 p-2 bg-green-500"
      >
        increase ref
      </button>
      <div className=" font-bold text-xl">ref = {ref.current}</div>

      <button
        className="m-2 p-2 bg-red-500 rounded-xl text-white font-bold"
        onClick={() => clearInterval(i.current)}
      >
        Stop Interval
      </button>
    </div>
  );
};
export default Demo2;
