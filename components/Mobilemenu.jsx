"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
const Mobilemenu = ({ setToggle }) => {
  const { data: session } = useSession();
  return (
    <div className="px-3 flex flex-col gap-3 ">
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          HOME
        </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Browse
        </Link>
      </button>
      <button
        onClick={() => {
          setToggle(false);
          console.log("cliced");
        }}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/movies"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Movies
        </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Tv Shows
        </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Blog
        </Link>
      </button>
      {
        session ? (
          <button
          onClick={() => setToggle(false)}
          className="border-b-2 border-gray-600 pb-4"
        >
          <Link
            href="/"
            className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
          >
            Edit Profile
          </Link>
        </button>
        ):(
          <>
        <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/login"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Login
        </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/register"
          className="text-white font-bold text-2xl pl-3 hover:text-red-600 duration-300 ease-in-out"
        >
          Register
        </Link>
      </button>
      </>
        )
      }
      
    </div>
  );
};

export default Mobilemenu;
