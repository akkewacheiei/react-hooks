"use client";
import React, { useMemo } from "react";

function ExpensiveComponent({ count, a, b, onClick }) {
  const memoizedValue = useMemo(() => {
    // คำนวณค่าเฉพาะเมื่อ a หรือ b เปลี่ยนแปลง
    return Math.random();
  }, [a, b]);

  // คำนวณโดยตรงทุกครั้งที่เรนเดอร์
  const directValue = Math.random();

  return (
    <div className="border-2 p-10 w-[50%] mt-5">
      <h1 className="mb-5">
        useMemo (ใช้จำค่าที่คำนวน ไม่ให้คำนวนซ้ำ ถ้า dependencies
        ไม่เปลี่ยนแปลง)
      </h1>
      <h1 className="mb-5">
        useCallback (ใช้จำฟังก์ชันที่สร้าง ไม่ให้สร้างซ้ำ ถ้า dependencies
        ไม่เปลี่ยนแปลง)
      </h1>
      {
        <div>
          <button
            className=" border-[1px] border-green-400 bg-green-400 rounded-md"
            onClick={onClick}
          >
            + Increment
          </button>
          <p>count : {count}</p>
          <p>useMemo: {count > 0 ? memoizedValue : "Not yet Calculate"}</p>
          <p>directValue: {count > 0 ? directValue : "Not yet Calculate"}</p>
        </div>
      }
    </div>
  );
}

export default ExpensiveComponent;
