import React from 'react'
import elma from '../images/elma.jpg'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const ShoppingCartDetail = () => {
    return (
        <div className='flex bg-pos-black4 px-2 py-2 mb-2'>
            <img src={elma} className='w-20 object-cover' />
            <div className='flex flex-col ml-5'>
                <span className='text-md opacity-90 font-bold'>Elma</span>
                <span className='text-sm opacity-60'>10 TL</span>
                <div className='flex mt-auto justify-center items-center'>
                    <div className='px-1.5 py-1 bg-pos-blackBtns flex items-center justify-center cursor-pointer rounded-[4px] hover:bg-opacity-50 mr-2 border-neutral-400 border-solid border-2 duration-300'>
                        <AiOutlinePlus />
                    </div>
                    <div className='mr-2 font-bold'>3</div>
                    <div className='px-1.5 py-1 bg-pos-blackBtns flex items-center justify-center cursor-pointer rounded-[4px] hover:bg-opacity-50 border-neutral-400 border-solid border-2 duration-300'>
                        <AiOutlineMinus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartDetail