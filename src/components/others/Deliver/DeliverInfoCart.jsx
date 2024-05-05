import React from 'react'

const DeliverInfoCart = (props) => {
  return (
    <div className='bg-white w-[255px] h-[132px] relative mt-[63px] flex flex-col items-center jusitfy-center rounded-[14px]'>
      <img src={props.img} alt="" className='w-[77px] rounded-full p-[17px] bg-white absolute -top-4'/>
      <div className='flex items-end h-full justify-center'>
        <p className='mb-[28px] leading-5 font-bold text-[#473E43] text-[14px] w-[216px] text-center'>{props.text}</p>
      </div>
    </div>
  )
}

export default DeliverInfoCart

