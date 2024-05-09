import React from 'react'
import { Link } from 'react-router-dom'

const ContactButton = ({ tel, text }) => {
    return (
        <Link to={"tel:" + tel}>
            <button className='outline-0 text-[#696F7A] leading-[28px] text-[14px] border-0 px-[27px] py-[7px] bg-[#F3F3F7] rounded-[28px] font-bold mt-[27px]'>
                {text}
            </button>
        </Link>
    )
}

export default ContactButton
