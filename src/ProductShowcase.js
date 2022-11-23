import React from 'react'
import { useParams } from 'react-router-dom'
import productItems from './ProductAPI'
import { useContext, useState, useEffect} from 'react';
import ShoeShopContext from './context/ShoeShopContext';
import Product from './Product';

export const ProductShowcase = () => {

  useEffect(() => {
    window.scroll(0,0)
  })

  const {addToCart} = useContext(ShoeShopContext)
  const [shoeSize, setShoeSize] = useState()
  const {id} = useParams()

  const item = productItems.find((item)=> item.id === parseInt(id))

  const newItem = {
    id:item.id,
    image:item.image,
    title:item.title,
    size:item.size,
    qty:item.qty,
    pricing:item.pricing
  }

  function handleAddToCart(){
    addToCart(newItem)
   }

  return (
    <div className='md:w-[100%] mx-auto w-[100%] md:h-[1000px] h-auto mb-[50px]'>
      <div className='md:flex md:justify-between items-start md:h-[500px] h-auto'>
        <div className='md:w-[50%] w-[100%] h-full md:h-full'>
        <img src={item.image} alt="new product" 
        className='w-full h-full' />
      </div>

      <div className='md:w-[55%] w-[100%] md:p-10 p-5 h-full bg-[#EAE7FA] '>

        <h1 className='md:text-xl text-lg font-semibold text-center px-10 md:mt-0 mt-[5px] overflow-clip'>{item.title}</h1>
        <div className='md:h-[100px]'><p className='text-[10px] text-justify md:p-2 p-5 break-words overflow-clip text-slate-500'>{item.desc}</p></div>
        <h1 className='text-3xl font-bold text-center md:pt-2 px-10'>RM {item.pricing}</h1>
        <p className='text-[10px] text-center px-4 text-slate-500'>(free delivery included for within SG,IN,BR)</p>
        <div className='md:w-[60%] w-auto pl-[10px] mx-auto flex pt-5'>
          <h1 className='text-[18px] text-lg font-semibold p-4'>Size:</h1>
          <select value={shoeSize} onChange={(e) => setShoeSize(e.target.value)} className='p-2 h-[50px] outline-none bg-slate-100 text-slate-600 text-[14px]'>
            <option value={item.size.L}>{item.size.L}</option>
            <option value={item.size.LM}>{item.size.LM}</option>
            <option value={item.size.XL}>{item.size.XL}</option>
            <option value={item.size.XL2}>{item.size.XL2}</option>
            <option value={item.size.XXL}>{item.size.XXL}</option>
          </select>
        </div>
        <div className='w-[30%] mx-auto py-5'>
          <button className='inline-block w-full text-[14px] py-4 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out md:px-2'  onClick={handleAddToCart}>Add To Cart</button>
        </div>

      </div>
      </div>

      
      <h1 className='text-center mt-10 uppercase text-slate-800'>Shop More</h1><hr/>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4 p-4 my-5'>
        {productItems.slice(0,4).map((item) =>
        <Product
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        alt={item.alt}
        pricing={item.pricing}
        qty={item.qty}
        desc={item.desc}
        size={item.size}
        />
        )}
      </div>
    </div>
    
      
    
    
  )
}
