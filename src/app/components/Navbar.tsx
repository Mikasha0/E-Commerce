import { BsPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full py-3 px-[60px] bg-white">
        <div className="w-full flex justify-between items-center">
          <h1 className="w-[15%]">CG |Digital</h1>
          <div className="w-full flex">
            <input
              placeholder="Search Products..."
              className="p-3 border border-t-0 w-[70%] text-sm shadow-lg"
            />
            <button className="bg-[#0171b6] py-3 px-8 text-white text-sm">
              Search
            </button>
          </div>
          <div className="flex items-center h-full">
            <h1 className="text-xs font-light">NEP</h1>
            {/* Vertical Line */}
            <div className="h-full min-h-[3em] w-px self-stretch bg-gray-300 from-transparent via-neutral-500 to-transparent ml-4"></div>
            <button className="ml-5">
              <BsPersonFill size={25} className="text-[#0171b6]" />
            </button>
            <button className="ml-5">
              <FaShoppingCart size={24} className="text-[#0171b6]" />
            </button>
            <button className="ml-5">
              <IoGitCompareSharp size={24} className="text-[#0171b6]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0171b6] py-3 px-[70px] flex items-center justify-center gap-4">
        <Link href="/">
          <p className="text-white text-[12px]">TV & AUDIO</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">HOME & APPLIANCES</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">MOBILE & APPLIANCES</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">SMART HOME APPLIANCE</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">PURIFICATION & HYGIENE</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">COMMERCIAL PRODUCTS</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">ELECTRICAL VEHICLE</p>
        </Link>
        <Link href="/">
          <p className="text-white text-[12px]">BRANDS</p>
        </Link>
      </div>
    </>
  );
}