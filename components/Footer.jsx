"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaGoogle,
  FaInstagramSquare,
  FaTwitter,
  FaWifi,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const hide =
    pathName != "/login" &&
    pathName != "/register" &&
    !pathName.includes("/admin");

  return (
    hide && (
      <footer className="bg-[#080b12] pt-5 text-gray-300">
        <div className="wrapper max-w-[1200px] mb-5 mx-auto text-sm">
          <div className="flex flex-col md:flex-row lg:items-center justify-between px-3 my-3">
            <h1 className="lg:text-4x text-3xl mb-2">CineMax</h1>
            <div className="handles flex items-center gap-5 lg:text-sm font-semibold">
              <Link className="flex items-center gap-1" href="/">
                <FaFacebook />
                Facebook
              </Link>
              <Link className="flex items-center gap-1" href="/">
                <FaTwitter />
                Twitter
              </Link>
              <Link className="flex items-center gap-1" href="/">
                <FaGoogle />
                Google
              </Link>
              <Link className="flex items-center gap-1" href="/">
                <FaInstagramSquare />
                Instagram
              </Link>
              <Link className="flex items-center gap-1" href="/">
                <FaWifi />
                RSS
              </Link>
            </div>
          </div>
          <hr />
          <div className="px-3 grid grid-cols-2 lg:flex flex-wrap lg:gap-40 lg:items-center mt-5 text-white">
            <div>
              <h1 className="lg:text-2xl text-xl mb-5">Movie Categories</h1>
              <div className="flex lg:gap-40 gap-10">
                <ul>
                  <li>
                    <Link className="py-2" href="/movies/Action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Adventure">
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Animation">
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Comedy">
                      Comedy
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Crime">
                      Crime
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link className="py-2" href="/movies/Drama">
                      Drama
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Fantasy">
                      Fantasy
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Horror">
                      Horror
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Mystery">
                      Mystery
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/movies/Romance">
                      Romance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl mb-5">TV Series</h1>
              <div className="flex lg:gap-40 gap-10 text-white">
                <ul>
                  <li>
                    <Link className="py-2" href="/">
                      Valentine Day
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Underrated Comedies
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Scary Tv Series
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Best 2024 Action Movies
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Classic Shows
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link className="py-2" href="/">
                      Big Tv Premieres
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Reality Tv Shows
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Original Shows
                    </Link>
                  </li>
                  <li>
                    <Link className="py-2" href="/">
                      Best Shows of the Year
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="lg:text-2xl text-xl mb-5">Support</h1>
              <ul>
                <li>
                  <Link className="py-2" href="/">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link className="py-2" href="/">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="py-2" href="/">
                    Watch on TV
                  </Link>
                </li>
                <li>
                  <Link className="py-2" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="py-2" href="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black px-1 w-full py-5 lg:flex justify-center items-center">
          <p className="">
            &copy; 2024 CineMax Movie Company Inc. All Rights Reserved
          </p>
          <p>
            Design by <span className="text-red-600 font-bold">Aycodez</span>{" "}
          </p>
        </div>
      </footer>
    )
  );
};

export default Footer;
