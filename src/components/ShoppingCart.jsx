import React from 'react'
import { Button } from 'antd';
import ShoppingCartDetail from './ShoppingCartDetail';

const ShoppingCart = () => {
  return (
    <div className='bg-pos-black1 h-full text-white px-3 py-3 flex flex-col'>
      <h2 className='bg-pos-black2 px-2 py-4 text-lg text-center font-bold opacity-90'>Sepetteki Ürünler</h2>

      <div className='h-full flex flex-col'>
        <div className='basis-4/6 bg-pos-black2 mt-3 overflow-x-auto '>
          <ShoppingCartDetail />
          <ShoppingCartDetail />
        </div>

        <div className='basis-2/6 bg-pos-black2 mt-3 px-5 py-5'>
          <div className='flex items-center justify-between '>
            <span className='opacity-70 text-md'>Ara Toplam</span>
            <span className='opacity-90'>1000 TL</span>
          </div>
          <div className='flex items-center justify-between mt-3'>
            <span className='opacity-70 text-md'>KDV %10</span>
            <span className='opacity-90'>10 TL</span>
          </div>
          <hr className='opacity-50 my-5 ' />
          <div className='flex items-center justify-between '>
            <span className='opacity-70 text-xl'>Toplam</span>
            <span className='opacity-90'>1100 TL</span>
          </div>
        </div>

        <div className='basis-1/6 bg-pos-black2 mt-3 flex flex-col justify-center px-2'>
          <button type='button' className='bg-white text-black hover:bg-pos-black4 hover:text-white py-[4px] px-[15px] h-[32px] rounded-[6px] duration-300 w-full mb-3 text-[14px]' >Sipariş Oluştur</button>
          <Button className='w-full' type='primary' danger>Sepeti Temizle</Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart