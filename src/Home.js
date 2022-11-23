import React from 'react'
import HeroProduct from './HeroProduct'
import Product from './Product'
import productItems from './ProductAPI'
import { useEffect, useState } from 'react'

export default function Home() {

    const [pickRandom, setPickRandom] = useState([])

    useEffect(() =>{
        const RandomProduct = () => {
            const randomObject = Object.values(productItems)
            const randomItem = randomObject[Math.floor(Math.random() * randomObject.length)]
            setPickRandom(randomItem)
        }
        RandomProduct()
    }, [])

  return (
    <div>
        <div className='mb-auto h-auto'>
        <HeroProduct 
       
         title= {pickRandom.title}
         pricing={pickRandom.pricing}
         qty={pickRandom.qty}
         image={pickRandom.image}
         desc ={pickRandom.desc}
         alt={pickRandom.alt}
        
        />
        </div>

        <div class="  grid md:grid-cols-4 grid-cols-2 justify-between md:w-full px-10 mx-auto  gap-4 ">


                {productItems.slice(0,8).map(({
                     id,
                     image,
                     alt,
                     pricing,
                     title,
                     qty,
                     desc,
                     size,
                }) => (
                    <Product
                    id={id}
                     image={image}
                     alt={alt}
                     pricing={pricing}
                     title={title}
                     qty={qty}
                     desc={desc}
                     size={size}
                    />
                ))}

                   
               
                
            </div>
         <div className='w-[25%] mx-auto  my-5'> <button className='inline-block w-full text-[14px] py-4 px-6 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:text-black'>More</button></div>

</div>
  )
}
