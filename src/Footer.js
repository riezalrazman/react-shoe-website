import React from 'react'
import {

  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400 bg-[#000300]'>
    <div>
      <h1 className='w-full text-3xl font-bold text-white'>SHOEVILLES</h1>
      <p className='py-4'>As Asia’s Online Fashion Destination, we create endless style possibilities through an ever-expanding range of products form the most coveted international and local brands, putting you at the centre of it all. With SHOEVILLES, You Own Now.</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
        <h6 className='font-medium text-white uppercase'>company</h6>
        <ul>
          <li className='py-2 text-sm hover:underline'>About Us</li>
          <li className='py-2 text-sm hover:underline'>Office</li>
          <li className='py-2 text-sm hover:underline'>Work With Us</li>
          <li className='py-2 text-sm hover:underline'>Collaboration & Partnership</li>
          <li className='py-2 text-sm hover:underline'>Promotions</li>
        

        </ul>
      </div>
      <div>
        <h6 className='font-medium text-white uppercase'>shopping online</h6>
        <ul>
          <li className='py-2 text-sm hover:underline'>FAQ</li>
          <li className='py-2 text-sm hover:underline'>Return & Exchange Policy</li>
          <li className='py-2 text-sm hover:underline'>Shipping Policies</li>
          <li className='py-2 text-sm hover:underline'>Privacy Policy</li>
          <li className='py-2 text-sm hover:underline'>Payment Terms</li>
  

        </ul>
      </div>
      <div>
        <h6 className='font-medium text-white uppercase'>Customer Services</h6>
        <ul>
          <li className='py-2 text-sm'>Contact Us</li>
          <li className='py-2 text-sm hover:underline'>Fashion Glossary</li>
          <li className='py-2 text-sm hover:underline'>Track Order</li>
          <li className='py-2 text-sm hover:underline'>Voucher Terms & Conditions</li>
          <li className='py-2 text-sm hover:underline'>Size Guide</li>
      

        </ul>
      </div>
     
    </div>
  </div>
  )
}

