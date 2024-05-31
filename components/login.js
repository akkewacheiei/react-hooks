"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/app/page";

export default function Login() {
  const { authState, authDispatch } = useContext(AuthContext);

  function login() {
    authDispatch({
      type: "login",
      payload: { email: "test123@gmail.com", display_name: "Broy" },
    });
  }

  function logout() {
    authDispatch({ type: "logout" });
  }

  return (
    <div className="w-[50%] border-2 p-10 mt-5 ">
      <h1 className="mb-5">useContext + useReducer</h1>
      <h1 className=" font-bold">--- Login ---</h1>

      {!authState ? (
        <div className="flex flex-col mt-5 gap-3">
          <label>Email</label>
          <input className="border-[1px]"></input>
          <label>Password</label>
          <input className="border-[1px]"></input>
          <button
            onClick={login}
            className="border-[1px] border-blue-600 mt-5 bg-blue-400"
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h1>{authState.email}</h1>
          <h1>{authState.display_name}</h1>
          <button
            onClick={logout}
            className="border-[1px] border-blue-600 mt-5 bg-blue-400"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
