"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { GoSearch, GoSignOut } from "react-icons/go";
import { BiSolidMoviePlay } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Mobilemenu from "./Mobilemenu";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setMoviesFilter,
  setFilteredMovies,
} from "@/redux/features/movies/moviesSlice";
import { useGetAllMoviesQuery } from "@/redux/api/movie";
import { useEffect } from "react";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import { FaArrowRight, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const hide =
    pathName != "/login" &&
    pathName != "/register" &&
    !pathName.includes("/admin");
  
  const dispatch = useAppDispatch();
  const { moviesFilter } = useAppSelector((state) => state.movies);
  const { data, isLoading } = useGetAllMoviesQuery();
 
  useEffect(() => {
    dispatch(setFilteredMovies(data || []));
    if (!isLoading) console.log("Fetched Data..... (Navbar Component)");
  }, [data, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setMoviesFilter({ searchTerm: e.target.value }));
    const filteredMovies = data?.filter((movie) =>
      movie.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    dispatch(setFilteredMovies(filteredMovies));
  };
  return (
    hide && (
      <nav className="bg-black/40 backdrop-blur-lg z-[99] fixed w-full py-1 px-2">
        <div className="w-full flex justify-between items-center md:hidden">
          <div className="flex text-red-600 gap-3 items-center ">
            <BiSolidMoviePlay size={30} />
            <Link href="/" className="text-white font-bold text-3xl">
              CineMax
            </Link>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className="hamburger text-red-600 pr-3 "
          >
            <RxHamburgerMenu size={35} />
          </button>

          {toggle && (
            <div
              className="mobile-menu mt-[32rem] pt-3 z-40 lg:hidden backdrop-blur-lg fixed ml-[-30px] w-full pl-10 py-4
                        bg-black/40 transition-all duration-1000 ease-in-out"
            >
              <Mobilemenu setToggle={setToggle} />
            </div>
          )}
        </div>
        <div className="justify-between z-[999] items-center hidden md:flex max-w-[1200px] mx-auto">
          <div className="flex gap-1 text-red-600  items-center">
            <BiSolidMoviePlay size={40} />
            <Link href="/" className="text-white font-bold text-3xl">
              CineMax
            </Link>
          </div>
          <ul className="px-3 flex  gap-3">
            <li>
              <Link
                href="/"
                className="text-white pl-3  hover:text-red-600 duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white pl-3  hover:text-red-600 duration-300 ease-in-out"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className="text-white pl-3  hover:text-red-600 duration-300 ease-in-out"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white pl-3 hover:text-red-600 duration-300 ease-in-out"
              >
                Tv Shows
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white pl-3  hover:text-red-600 duration-300 ease-in-out"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex gap-6 items-center">
            <form className="flex gap-6 items-center text-white">
              <div className="flex justify-between border-2 text-sm border-gray-300 px-3  rounded-3xl items-center w-72">
                <input
                  type="text"
                  value={moviesFilter.searchTerm}
                  onChange={handleSearchChange}
                  className="bg-transparent text-white outline-none py-1"
                  placeholder="Search..."
                  name="search"
                  id=""
                />
                <button>
                  <GoSearch size={15} />
                </button>
              </div>
            </form>
            {session ? (
                session?.user.role == 'admin' ? (
                <Link href="/admin" className="flex items-center text-white bg-green-600 border-2 border-white font-bold rounded-lg text-center px-4 py-2 gap-2 ">
                   Dashboard <FaArrowRight size={15} />{" "} 
                </Link>
                ):(
                <button
                  onClick={() => setOpen(!open)}
                  className="text-white hover:bg-red-500 active:bg-red-500 font-semibold flex gap-2 px-3 py-2 rounded-2xl"
                >
                  <Image
                    src={avatar}
                    width={40}
                    height={40}
                    // onClick={() => setOpen(true)}
                    className="size-[30px]"
                  />
                  {/* {session.user?.username.split(" ")[0]} */}
                </button>)
              
              
            ) : (
              <div className="flex gap-2 text-white">
                <button
                  className="bg-red-600 hover:bg-[red] text-sm font-semibold 
                                            py-2 px-3 rounded-xl"
                >
                  <Link href="/login">SIGN IN</Link>
                </button>
                <button
                  className="bg-gray-600 hover:bg-[gray]
                                            rounded-xl font-semibold py-2 text-sm px-3"
                >
                  <Link href="/register">REGISTER</Link>
                </button>
              </div>
            )}
          </div>
          {open && (
            <div
              id="dropdown"
              className="absolute bg-white px-2 rounded-md top-16 mt-2 flex flex-col items-center right-4 w-[200px]"
            >
              <Link href="/" className="flex text-center py-3 gap-2 w-full ">
                <div className="bg-red-500 p-1 rounded-full text-white">
                  <CgProfile size={20} />{" "}
                </div>
                Edit Profile
              </Link>
              <div className="border-t-2 flex items-center gap-2 font-semibold py-2 w-full">
                {" "}
                <div className="bg-red-500 p-1 rounded-full text-white">
                  <GoSignOut size={20} />{" "}
                </div>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
