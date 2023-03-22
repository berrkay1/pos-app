import React from 'react'

const Categories = () => {

  const catogori = ['Hepsi', 'Ekle', 'çorbalar', 'içecekler', 'tatlılar', 'kahveler','kahveler','kahveler','kahveler','kahveler','kahveler']

  return (
    <div className='mx-2 mt-5 '>
      <h2 className='text-xl text-pos-black2 font-bold px-3 mb-2'>Categories</h2>
      <div className='bg-white px-2 py-5 rounded-lg flex items-center justify-center '>
        {
          catogori.map((item, idx) => (
            <div key={idx} className='px-5 py-2 bg-[#eceaea] rounded-xl text-pos-black1 font-bold mr-4'>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories