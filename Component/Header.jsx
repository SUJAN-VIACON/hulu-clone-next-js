import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-between max-w-2xl">
        <HeaderItem href="/" title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className=" object-contain"
        src="https://suplari.com/wp-content/uploads/2019/09/hulu-logo-white.png"
        width={200}
        height={100}
      />
    </div>
  );
};

export default Header;
