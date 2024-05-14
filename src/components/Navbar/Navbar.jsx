import React from 'react';
import './Navbar.jsx';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='flex w-full justify-between container mx-auto container mx-auto max-w-[82%] '>
            <div className='flex flex-wrap items-center gap-14 py-3 font-semibold'>
                <img src="public/images/Rectangle 76.png" alt="Description of the image" className='min-w-[80px] max-h-[60px]' />

                <div className='flex flex-col gap-2'>

                    <div className='flex gap-2 flex-col justify-between'>

                        <div className='flex gap-2'>
                            <span className='flex gap-4'>Доставка пасты</span>
                            <span className='text-yellow-300'>Москва</span>
                        </div>

                        <div className='flex items-center'>
                            <img src='public/images/image 31.png' alt='Image description' />
                            <p className='flex items-center gap-4'>Яндекс еда  <img src='public/images/Group 324.png' alt='Image description' className='gap-4' /></p>
                            <p className='gap-5'>Время доставки от 31 мин</p>
                        </div>

                    </div>


                </div>
            </div>
            <div className=' flex items-center flex-wrap'>
                <button className=' flex className="px-[24px] py-[10px] bg-white rounded-lg text-black font-bold hover:bg-gray-200 transition-all gap-4 '>
                    Заказать звонок
                </button>
                <p className=' text-yellow-400 gap-4'>
                    8 499 391-84-49
                </p>
            </div>
        </nav>
    );тз
}

export default Navbar;
