"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRegisterMutation } from "@/redux/api/user";
import Image from "next/image";
import Loader from "@/components/Loader";

const Register = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill all the input fields");
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await register({ username, email, password }).unwrap();
      toast.success("User successfully created");
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      //   return  (
      <div className="h-screen w-full flex items-center  justify-center overflow-y-hidden">
        <div className="absolute -z-10 w-full brightness-90">
          <img
            src="https://i.redd.it/zjgs096khv591.jpg"
            className="w-full h-screen object-cover lg:object-fill"
          />
        </div>
        <div className="backdrop-blur-sm text-white bg-black/80 p-8 rounded shadow-md w-[22rem] lg:w-96">
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4 ">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block   text-sm font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="w-full text-white bg-transparent  outline-none p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full text-white bg-transparent outline-none p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block  text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full text-white bg-transparent outline-none p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-confirm"
                  className="block text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password-confirm"
                  id="password-confirm"
                  className="w-full text-white bg-transparent outline-none p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="mb-5 p-3 w-full bg-[red] hover:scale-105 ease-in-out duration-300 text-white rounded-md"
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
              {isLoading && <Loader />}
            </div>
          </form>
          <span>
            {" "}
            Already have an account?{" "}
            <Link
              className="text-center text-red-500 hover:underline mt-2"
              href="/login"
            >
              Log In
            </Link>
          </span>
        </div>
      </div>
    )
  );
};

export default Register;
