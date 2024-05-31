"use client";
import React, { useMemo } from "react";

function ExpensiveComponent({ count, a, b }) {
  const memoizedValue = useMemo(() => {
    // คำนวณค่าเฉพาะเมื่อ a หรือ b เปลี่ยนแปลง
    return Math.random();
  }, [a, b]);

  // คำนวณโดยตรงทุกครั้งที่เรนเดอร์
  const directValue = Math.random();

  return (
    <div className="border-2 p-10 w-[50%]">
      {
        <div>
          <p>count : {count}</p>
          <p>useMemo: {count > 0 ? memoizedValue : "Not yet Calculate"}</p>
          <p>directValue: {count > 0 ? directValue : "Not yet Calculate"}</p>
        </div>
      }
    </div>
  );
}

export default ExpensiveComponent;
