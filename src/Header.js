import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import ShoeShopContext from './context/ShoeShopContext';

export default function Header() {

  const { itemSum} = useContext(ShoeShopContext)
  const navigate =useNavigate()
  

  const [mobileNav, setMobileNav] =useState(false)
  const [searchBox,setSearchBox] = useState("")
 
 function handleSearch(){
  if(searchBox.trim().length !== 0){
    navigate ("/search-results", {state: searchBox})
  }


 }


  function revealNav(){
    setMobileNav(!mobileNav)
  }


  return (
<>
    <div className='md:hidden flex w-[90%] mx-5 h-8 bg-white my-2 rounded-full'>
            <div className=' flex w-full '>
                <input type='text' className='w-full text-[13px] bg-[#eaeaed] p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' 
                placeholder='Shop the newest arrivals from Shoevilles'
                />

            </div>
            <div className='h-full w-17 bg-white rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-2xl' />
            </div>
        </div>
    <div className=' w-full h-[70px] shadow-2xl bg-[#000300]'>
        <div className='px-4 flex md:justify-between justify-start items-center h-full w-full'>
         <Link to='/'>  <div className='flex mr-[10px]  items-center'>
                 
                  <h1 className='md:text-lg text-sm font-bold md:font-bold text-white p-2 uppercase gap-2'>ShoeVilles</h1>
             </div>
           </Link> 

        <div className='hidden md:flex w-[40%]  md:bg-white bg-transparent h-[40px] my-4 rounded-full'>
            <div className=' flex w-full md:w-full '>
                <input type='text' className='placeholder-gray-400  md:w-full text-[15px] bg-white p-4 rounded-full outline-none md:rounded-full
                focus:border-[0px] box-border md:border-[0px]' 
                placeholder='Shop the newest arrivals from Shoevilles'

                onKeyDown={(e) =>{
                  if(e.key === "Enter"){
                    handleSearch()
                  }
                }}

                value={searchBox}
                onChange={(e)=>setSearchBox(e.target.value)}
               />

            </div>
            <div className='h-full w-17 bg-white rounded-full flex items-center p-1'>
            <Icon icon="el:search-alt" className='text-3xl' onClick={handleSearch}/>
            </div>
        </div>


        <div className='hidden md:flex'>
        <ul className='hidden md:flex justify-between items-center h-24 max-w-[1240px] lg:mx-24 px-4 lg:text-[16px] md:text-[11px]  text-white'>
                       <li className='p-3 uppercase hover:underline '>Men</li>
                      <li className='p-3 uppercase hover:underline '>Women</li>
                      <li className='p-3 uppercase hover:underline '>Sale</li>
  
                      <li className='p-3 uppercase hover:underline '>New Arrivals</li>
                        
                        
                          
                        </ul>  
        </div>
        <div className='h-full flex items-center ml-auto' >
                  <div>
                    <h1 className='text-[11px] text-yellow-400 font-semibold'></h1>
                  </div>
        
                  <div className='relative'>
                     <Icon icon="ion:cart-outline" className='text-4xl text-white' />
                  </div>
                  
                  <Link to="/checkOut"><div className='absolute right-[77px] md:right-[28px] top-[72px] md:top-[24px] '>
                    <h1 className='text-[10px] text-white'>{itemSum}</h1>
                  </div></Link>

                  <div className='text-white p-4 md:hidden'>
                      <Icon icon={mobileNav? "akar-icons:circle-x-fill" : "dashicons:menu-alt3"} onClick={revealNav} />
                  
                  </div>
        </div>


        </div>

        

        <div>
              {mobileNav? <ul className='absolute z-10 right-0 bg-[#000300] w-auto rounded-bl-full h-auto pb-20 px-6 text-sm  text-white md:hidden '>
              <li className='py-1 hover:underline'>Men</li>
               <li className='py-1 hover:underline'>Women</li>
               <li className='py-1 hover:underline'>Sale</li>
             
               <li className='py-1 hover:underline'>New Arrivals</li>
                   
                 
               </ul>:""}

        </div>
    </div>


    </>    
  )
}