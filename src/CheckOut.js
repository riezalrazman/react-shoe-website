import React from 'react'
import CheckOutItem from './CheckOutItem'

import { useContext } from 'react'
import ShoeShopContext from './context/ShoeShopContext'
import SubTotal from './context/SubTotal'

const CheckOut = () => {
  const {basket} = useContext(ShoeShopContext)
  return (
    <>
       <h1 className='mt-3 p-6 uppercase text-slate-800'>YOUR CART</h1>
    <div className='md:grid block md:grid-cols-2 w-full md:mt-18'>
      <div>
      {basket.map((item) => (
        <CheckOutItem
        id={item.id}
        image={item.image}
        qty={item.qty}
        size={item.size}
        pricing ={item.pricing}
        title={item.title}
        alt={item.alt}
                      
        />
      ))}

      </div>
      <div>
        <SubTotal/>
      </div>
    </div>
    </>
  )
}

export default CheckOut