"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
// import coverImage from "@/public/cover2.JPG"
//     import Image from "next/image"

const Login = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus == "authenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) {
      toast.error("Enter all fields");
      return;
    }

    try {
      const res = await signIn("credientals", {
        redirect: false,
        callbackUrl: "/",
        email,
        password,
      });
      //  console.log('result..... =>',res)

      if (res?.error) {
        if (res?.url) {
          router.replace("/dashboard");
        }
        toast.error("Invalid credentials");
      } else if (res?.ok) {
        toast.success("Log in successfully");
        router.push("/");
      }
    } catch (error) {
      console.log("Error from log in page:", error);
      return error;
    }
  };

  return (
    sessionStatus != "authenticated" && (
      <div className="h-screen overflow-y-hidden w-full flex items-center justify-center">
        <div className="w-full absolute -z-10">
          <img
            src="https://i.redd.it/zjgs096khv591.jpg"
            className="w-full h-screen object-cover lg:object-fill"
          />
        </div>
        <div className="backdrop-blur-sm bg-black/90  text-white p-6 lg:p-8 rounded shadow-md w-80 lg:w-96">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email..."
                  className="w-full text-white bg-blue-900/30 bg-opacity-50 p-2 border outline-none border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                  className="w-full text-white bg-blue-900/30 bg-opacity-50 outline-none p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mb-5 p-3 w-full bg-[red] hover:scale-105 ease-in-out duration-300 text-white rounded-md"
                >
                  Log in
                </button>
              </div>

              <span className="text-center">
                {" "}
                New to CineMax?{" "}
                <Link
                  className="text-center text-[red] hover:underline mt-2"
                  href="/register"
                >
                  Sign up now.
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
export default Login;
