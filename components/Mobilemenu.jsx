"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Mobilemenu = ({ setToggle }) => {
  const { data: session } = useSession();
  const handleSignOut = () => {
    signOut()
    setToggle(false)
  }
  return (
    <div onClick={() => setToggle(false)} className="px-3 flex flex-col gap-3 ">
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
        >
          Home
        </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="border-b-2 border-gray-600 pb-4"
      >
        <Link
          href="/"
          className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
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
          className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
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
          className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
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
          className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
        >
          Blog
        </Link>
      </button>
      {session?.user.role == 'admin' ? (
        <button
          onClick={() => setToggle(false)}
          className="pb-4"
        >
          <Link
            href="/admin"
            className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
          >
            Dashboard
          </Link>
        </button>

      ) : (
        <button
          onClick={() => setToggle(false)}
          className="pb-4"
        >
          <Link
            href="/"
            className=" font-bold text-2xl hover:text-red-600 duration-300 ease-in-out"
          >
            Edit Profile
          </Link>
        </button>
      )}


    </div>
  );
};

export default Mobilemenu;
