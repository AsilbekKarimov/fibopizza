import React from 'react'
import Button from '../Button'
import NewBadge from '../other/NewBadge'

const Card = (props) => {
  return (
    <div>
      <div className='w-[256px] h-[464px] flex  justify-start flex-col mb-[49px]'>
        <div className='flex justify-center mb-[8px]'>
            <div className='relative'>
                <img src={props.img} alt="" />
                {
                    props.new
                    ?
                    <div><NewBadge/></div>
                    :
                    <div></div>
                }
            </div>    
        </div>
        <p className='text-[#797979] font-extrabold text-[24px] mb-[14px]'>{props.title}</p>
        <p className='text-[#686466] text-[13px] mb-[12px] leading-[19px] w-[256px] flex flex-wrap'>{props.description}</p>
        <div className='flex justify-between items-center'>
            <p className='text-[#231F20] text-[22px] font-bold'>{props.price}</p>
            <Button/>
        </div>
      </div>
    </div>
  )
}

export default Card
