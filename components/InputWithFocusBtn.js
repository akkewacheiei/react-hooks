"use client";
import React, { useRef } from "react";

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div className="flex flex-col gap-3 mt-5 border-2 p-10 w-[50%]">
      <h1 className="mb-5">useRef(ใช้เข้าถึง DOM elements โดยตรง)</h1>
      <input className="border-[1px]" ref={inputEl} type="text" />
      <button
        className=" border-[1px] border-yellow-400 bg-yellow-400 rounded-md"
        onClick={onButtonClick}
      >
        Focus the input
      </button>
    </div>
  );
}
