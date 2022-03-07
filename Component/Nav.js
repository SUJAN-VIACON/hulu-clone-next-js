import { useRouter } from "next/router";
import requests from "../requests";
const Nav = ({ genres }) => {
  const router = useRouter();
  return (
    <div>
      <nav className=" relative">
        <div className=" flex px-10 text-2xl sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {genres.map((genre) => {
            return (
              <h2
                key={genre.id}
                onClick={() => router.push(`/${genre.name}`)}
                className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
              >
                {genre.name}
              </h2>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </nav>
    </div>
  );
};

export default Nav;
