import React from 'react'
import { useLocation } from 'react-router-dom'
import productItems from './ProductAPI'
import Product from './Product'

export default function SearchResults() {

    const location = useLocation()
    const searchItem = location.state
    console.log(searchItem);
    const searchValue = productItems.filter((item) => item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()))
  return (
    <div>
      <div className='grid md:grid-cols-5 grid-cols-2 gap-4'>
        <div className='md:col-span-5 col-span-2 shadow-2xl'><h1 className='text-center font-bold text-2xl text-slate-700 uppercase py-3 '>Search Result</h1></div>
            {searchValue.map((item) => (
              <Product 
                    id={item.id}
                     image={item.image}
                     alt={item.alt}
                     pricing={item.pricing}
                     title={item.title}
                     qty={item.qty}
                     desc={item.desc}
                     size={item.size}
              />
            ))}
      </div>
    </div>
  )
}
