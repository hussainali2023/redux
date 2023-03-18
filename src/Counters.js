import React, { useReducer } from "react";

const Counters = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className=" rounded-2xl mx-52 md:mx-96 my-32 md:px-16 py-20 bg-sky-200">
      {/* <form action=""> */}
      <div className=" justify-center text-5xl flex">
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className=" mr-8 bg-orange-300 px-8 py-2 rounded-xl"
        >
          -
        </button>
        <p>{state}</p>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className=" ml-8 bg-orange-300 px-8 py-2 rounded-xl"
        >
          +
        </button>
      </div>
      <div className=" flex justify-center">
        <button type="submit" className="bg-orange-300 px-8 py-2 rounded-xl">
          Submit
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Counters;
