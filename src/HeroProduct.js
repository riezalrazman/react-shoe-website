import React from 'react'


export default function HeroProduct({ id, title, pricing, alt, image, desc, qty }) {



    return (
      
        <div className="md:w-[100%] mx-auto w-[100%] md:h-[550px] h-auto mb-[50px] ">
            
            <div className='md:flex md:justify-between items-start md:h-[500px] h-auto '>
                <div className='lg:w-[55%] md:w-[95%] w-[100%] h-full md:h-full'><img src={image} alt={alt} 
                className='w-full h-full'
                /></div>
                <div className='md:w-[55%] w-[100%] md:p-10 p-5 h-full bg-[#EAE7FA] '>
                    <h1 className='text-white font-bold text-base md:text-2xl text-center px-8 md:p-3'>MUST-HAVE KICKS</h1><hr className='hidden'/>
                    <h1 className='md:text-xl text-lg font-semibold text-center px-10 md:mt-0 mt-[5px] overflow-clip '>{title}</h1>
                   <div className='md:h-[100px]'><p className='text-[10px] text-justify md:p-2 p-5 break-words overflow-clip text-slate-500'>{desc}</p></div>
                    <h1 className='text-3xl font-bold text-center md:pt-9 px-10 '>RM {pricing}</h1>
                    <p className='text-[10px]  text-center px-4 text-slate-500'>(free delivery included for within SG,IN,BR)</p>
                    <div className=' w-[100%] px-8 mx-auto my-3'>
                        
                        <div className='mx-auto w-full px-20 md:px-10'> <button className='inline-block w-full text-[14px] py-4 px-6 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out'>Shop Now</button></div>
                        </div>
                </div>
                
            </div>
            <hr className=' border-slate-100'/>
            </div>
  )
}

