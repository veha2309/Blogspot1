"use client"
import Sidebar from "@/components/Sidebar";
import Image from "next/image"; 
export default function Home() {
  return (
   <> 
   <Sidebar/>
   <div className="flex text-white justify-end gap-7 items-center pt-10 pr-5">
    <div className="leftButton"><button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:scale-105 transition-all font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2">Sign Up</button></div>
    <div className="border-l-[.1px] h-14"></div>
    <div className="rightButton"><button className="rounded-[10px] border-[1.5px] border-white/30 text-white/60 px-10 py-3 hover:scale-105 transition-all text-sm">Log In</button></div>
  </div>
    <div className="text-white flex flex-col items-center top-10 absolute w-[30vh] ml-[43%] text-4xl font-[900] font-sans">
    Coding <div className="text-green-600 flex">&lt;<div className="text-green-700 font-extrabold">H</div><div className="text-4xl font-[600]">unte</div><div className="text-green-700 font-extrabold">R</div>/&gt;</div>
    </div>
    <div>
    <div className="text-white flex items-center top-80 absolute w-[30vh] ml-[43%] text-4xl font-[600] font-sans">
    Coding <div className="text-green-600 flex">&lt;<div className="text-green-700">H</div><div className="text-4xl font-[600]">unte</div><div className="text-green-700">R</div>/&gt;</div>
    </div>
    </div>
    <div className="border-white/20 border-[0.1px] w-full top-[60vh] relative z-[-9]"> </div>
   <div className="absolute h-full inset-0 w-full -z-10 bg-black text-white">
   </div>
   </>
  );
}
