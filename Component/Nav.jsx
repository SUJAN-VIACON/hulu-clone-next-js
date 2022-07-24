import Link from "next/link";

const Nav = ({ genres }) => {
  return (
    <div>
      <nav className=" relative">
        <div className=" flex px-10 text-2xl sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {genres.map((genre) => {
            return (
              <Link href={`/${genre.name}`}>
                <a
                  key={genre.id}
                  className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                >
                  <h2>{genre.name}</h2>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
      </nav>
    </div>
  );
};

export default Nav;
