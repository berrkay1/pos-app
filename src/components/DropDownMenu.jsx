import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const DropDownMenu = () => {

  const [DropDownCtrl, setDropDownCtrl] = useState(false);


  return (
    <div className={`bg-pos-black1 h-full pt-5 ${DropDownCtrl ? 'w-24' : 'w-60'} duration-500`}>

      {
        DropDownCtrl ? (
          <ul className='flex flex-col gap-10 text-3xl text-white'>

            <li onClick={() => setDropDownCtrl(!DropDownCtrl)} className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md duration-500' >
              <AiOutlineMenu />
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md duration-500'  >
              <AiTwotoneHome />
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md duration-500'>
              <FaShoppingCart />
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md duration-500'>
              <BsFillPersonFill />
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md duration-500'>
              <FaFileInvoice />
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[80px] my-0 mx-auto rounded-md  duration-500'>
              <FaChartLine />
            </li>
          </ul>
        ) : (
          <ul className='flex flex-col gap-10 text-3xl text-white '>

            <li onClick={() => setDropDownCtrl(!DropDownCtrl)} className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md duration-500' >
              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <AiOutlineMenu />
                </div>
                <div className='text-xl  opacity-70'>
                  Menu
                </div>
              </div>
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md duration-500'  >

              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <AiTwotoneHome />
                </div>
                <div className='text-xl  opacity-70'>
                  Home
                </div>
              </div>
            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md duration-500'>
              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <FaShoppingCart />
                </div>
                <div className='text-xl  opacity-70'>
                  Basket
                </div>
              </div>

            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md duration-500'>
              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <BsFillPersonFill />
                </div>
                <div className='text-xl  opacity-70'>
                  Person
                </div>
              </div>

            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md duration-500'>
              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <FaFileInvoice />
                </div>
                <div className='text-xl  opacity-70'>
                  Bills
                </div>
              </div>

            </li>
            <li className='flex items-center justify-center cursor-pointer p-2 hover:bg-pos-black3 w-[90%] my-0 mx-auto rounded-md  duration-500'>

              <div className='w-[60%] flex'>
                <div className='mr-10'>
                  <FaChartLine />
                </div>
                <div className='text-xl  opacity-70'>
                  Statics
                </div>
              </div>
            </li>
          </ul>
        )
      }


    </div>
  )
}

export default DropDownMenu