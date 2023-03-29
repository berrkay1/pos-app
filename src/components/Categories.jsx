import React from 'react'
import { Button } from 'antd'
import { GoPlus } from 'react-icons/go';
import Headers from './Headers';
const Categories = () => {

  const catogori = ['Hepsi', 'çorbalar', 'içecekler', 'tatlılar', 'kahveler', 'tatlılar', 'kahveler', ,];

  const color = ['#CFDDDB', '#E4CDEE', '#CDE3EF', '#111315', '#FAC1D9', '#C9CAEE', '#E6DADE', '#F0C8CF', '#C2E9DE'];

  const randomColorIndex = Math.floor(Math.random() * color.length);


  console.log('color[0]', color[5])
  return (
    <div className='h-full w-full'>

      <div className='flex items-center justify-center flex-wrap w-[100%]'>

        <div className='w-40 h-40 m-2 rounded-md bg-[#FAC1D9] flex items-center justify-center cursor-pointer hover:scale-105 duration-200'>
          <div className='text-5xl'><GoPlus /></div>
        </div>
        {
          catogori.map((item, idx) => (
            <div key={idx} className={`w-40 h-40 m-2 rounded-md bg-[#CFDDDB] cursor-pointer hover:scale-105 duration-200  text-pos-black4 uppercase p-5 flex items-end flex-col`} >
              <div className='text-lg font-bold'>{item}</div>
              <div className='text-sm opacity-60 font-semibold'>{idx} items</div>
            </div>
          ))
        }
      </div>

      <hr className='w-full h-[1px] bg-white opacity-70' />
        

    </div>
  )
}

export default Categories