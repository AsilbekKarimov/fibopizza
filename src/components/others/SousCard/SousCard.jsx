import React from 'react'

const SousCard = ({img, title, price}) => {
  return (
    <div className='flex flex-col items-center bg-white justify-center rounded-[12px] border-[1.5px] border-[#E2E2E9] w-[115px] h-[173px]'>
      <img src={img} alt="" className='w-[65px] h-[71px] rounded-full'/>
      <p className='text-black font-semibold leading-[14px] text-[13px] py-[10px]'>{title}</p>
      <p className='text-[#FF2E65] leading-[17px] text-[14px] font-bold'>от {price} ₽</p>
    </div>
  )
}

export default SousCard
