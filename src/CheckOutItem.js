import React from 'react'
import { useContext, useState } from 'react';
import ShoeShopContext from './context/ShoeShopContext';


export default function CheckoutItem({id,qty,image,size,pricing,title,alt}) {
    const {incItem,decItem,removeFromCart} = useContext(ShoeShopContext)
    const [shoeSize, setShoeSize] = useState("")
    function handleRemove(){
        removeFromCart(id)
    }

    function increase(){
    if (qty>=1){
        incItem(id)
    }
        
}
    function decrease(){
        if (qty>1){
            decItem(id)
        }
        
    }

  return (
    <div className='w-[100%] p-4 md:flex block justify-between'>
        <div className='md:w-[50%] w-full'>
           
            <img src={image}
                 className='w-full h-[200px] rounded-2xl' alt={alt}/>
        </div>

         <div className='md:w-[60%] w-full py-2 px-8'>
            <h1 className='text-[20px] text-[#000300] '>{title}</h1>
            <h1 className='text-[14px] text-[#000300] '>RM {pricing * qty}</h1><hr/>
            <div className='flex justify-between items-center'> 
            <h1 className='text-[14px] text-[#000300] '> Size:</h1>
            <select value={shoeSize} className='w-full p-1 h-[30px] outline-none text-slate-600 text-[10px]' onChange={(e)=>setShoeSize(e.target.value)}>
                          
                          <option value={size.L}>{size.L}</option>
                          <option value={size.LM}>{size.LM}</option>
                          <option value={size.XL}>{size.XL}</option>
                          <option value={size.XL2}>{size.XL2}</option>
                          <option value={size.XXL}>{size.XXL}</option>

                      </select>
            <hr/></div>
       
            <div className='flex justify-start py-3'  ><h1 className='md:text-[12px] lg:text-[14px] text-[#000300]'>Quantity:&nbsp; </h1> 
                    <div className='bg-slate-100'> <button className=" w-[26px] h-[26px] p-0 bg-[#000300]" onClick={decrease}>-</button>
                <span className="px-3">{qty}</span>
                        <button className="w-[26px] h-[26px] p-0 bg-[#000300]" onClick={increase}>+</button></div>
                    
                
               </div>
            <button className='inline-block w-full text-[14px] py-4 px-6 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out' onClick={ handleRemove}> Remove</button>
         </div>
        <hr/>

   </div>

  )
}