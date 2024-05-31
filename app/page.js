"use client";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Welcome from "../components/welcome"; //props //Ex.ส่ง props ไปต่าง component
import Login from "../components/login"; //useContext //Ex.กรณีต้องส่ง props หลายต่อควรเปลี่ยนมาใช้ useContext
import TextInputWithFocusButton from "../components/InputWithFocusBtn"; //useRef //Ex.ใช้เข้าถึง DOM elements โดยตรง
import ExpensiveComponent from "../components/expensiveComponent"; // useMemo

function reducer(state, action) {
  if (action.type === "login") {
    const { email, display_name } = action.payload;
    return { email, display_name };
  }
  if (action.type === "logout") {
    return null;
  }
  return state;
}

export const AuthContext = React.createContext();

export default function Page() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(count);
  const [authState, authDispatch] = useReducer(reducer, null);

  useEffect(() => {
    if (previousCount.current !== count) {
      const element_count = document.getElementById("count");
      element_count.style.color = "red";
      setTimeout(() => {
        element_count.style.color = "black";
      }, 500);
      previousCount.current = count;
    }
  }, [count]);

  return (
    <div className="p-10">
      <h1 className=" text-2xl text-red-500 font-bold mb-5">Demo 7 Hooks</h1>
      <Welcome first_name="Akkewach" last_name="Yodsomboon" />

      <div className="border-2 p-10 mt-5 w-[50%]">
        <h1 className="mb-5">
          {" "}
          useState + useEffect + useRef(ใช้เช็ค previousCount)
        </h1>

        <p>
          You clicked{" "}
          <span id="count" className="font-bold">
            {count}
          </span>{" "}
          times
        </p>
        <button
          className=" border-[1px] border-red-400 bg-red-400 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Click here
        </button>
        <h1 className="mt-2">
          useMemo (ใช้จำค่าได้ เมื่อ dependencies เปลี่ยนค่อยคำนวนใหม่)
        </h1>
        <ExpensiveComponent count={count} a={10} b={20} />
      </div>

      <TextInputWithFocusButton />

      <AuthContext.Provider
        value={{
          authState,
          authDispatch,
        }}
      >
        <Login />
      </AuthContext.Provider>
    </div>
  );
}
