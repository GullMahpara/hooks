'use client';
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button";

export default function Home() {

  const [count,setcount]=useState(0);
  return (
    <>
      <div className="flex justify-center items-center py-[200px] text-lg ">
        <div className="  border-4 w-[35%]   rounded-xl  bg-red-200 text-black p-9 ">
          <h1 className=" scroll-m-20 text-3xl tracking-tight font-extrabold  lg:text-5xl flex justify-center items-center py-5">
            COUNTER
          </h1>
          <div className="flex justify-center items-center gap-5 p-5">
            <button
              className="text-black bg-blue-200 w-24 h-12 rounded-xl p-2   "
              onClick={() => {
                setcount(count + 1);
              }}
            >
              Increment
            </button>
            <button
              className="text-black bg-blue-200 w-28 p-1 h-12 rounded-xl  "
              onClick={() => {
                setcount(count - 1);
              }}
            >
              Decrement
            </button>
            <button
              className="text-black bg-blue-200 w-24 h-12 rounded-xl   "
              onClick={() => {
                setcount(0);
              }}
            >
              Reset
            </button>
          </div>
          <div className="flex justify-center items-center ">
            Counter:
            <p className=''>{count}</p>
          </div>
        </div>
      </div>
    </>
  );
}
