import React from "react";
import { ShoppingCart, TrendingUp  } from "lucide-react";

function Rightcontent() {
  return (
    <div className="relative h-full w-2/3">
        
        <img
            className="h-full w-full object-cover rounded-3xl"
            src="https://i.pinimg.com/1200x/d2/8a/20/d28a202723bdda50d2f4ed34dac22fbf.jpg"
            alt="Mountain"
        />

        
        <div className="absolute top-0 right-0 bg-lime-300 p-4 rounded-2xl shadow-md w-45 h-35 flex flex-col items-center justify-center gap-2 outline-6 outline-white ">
            <ShoppingCart className="text-black" size={24} />
            <p className="text-black font-medium text-sm leading-tight">
            Trends of moving<br />from retail to e-Tail
            </p>
        </div>

        <div className="absolute bottom-0 left-0 bg-lime-300 p-4 rounded-2xl shadow-md w-45 h-35 flex flex-col items-center justify-center gap-2 outline-6 outline-white ">
            <TrendingUp className="text-black" size={24} />
            <p className="text-black font-medium text-sm leading-tight">
            Fast-growing<br />market segment
            </p>
        </div>

    </div>
  );
}

export default Rightcontent;
