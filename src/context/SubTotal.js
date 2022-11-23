import React from "react";
import { useContext } from "react";
import ShoeShopContext from "./ShoeShopContext";
import CurrencyFormat from 'react-currency-format'

export default function SubTotal() {
  const {itemSum, basket, emptyCart} = useContext(ShoeShopContext)
  const totalSum = basket.reduce((totalSum, item) => {
      return totalSum + (item.pricing * item.qty)
  },0)
  return (
    <div className="md:w-[80%] lg:w-[50%] mx-auto shadow-2xl rounded-2xl p-6">
      <h1 className="text-lg text-slate-400 p-2 uppercase">Order Summary</h1>

      <div className="mx-auto">
        <CurrencyFormat
        renderText={(value) => (
          <>
          <h1 className="text-sm p-2 text-slate-700">Item in cart: {itemSum}</h1>
          <h1 className="text-sm p-2 text-slate-700">Total: RM {totalSum}</h1>
          </>
        )}
        thousandSeparator = {true}
        displayType='text'
        value={0}
        decimalScale={2}
        />
      </div>
      <div className="mx-auto">
        <div className="flex justify-between p-2">
          <button className="inline-block text-[14px] py-4 px-6 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Checkout</button>
          <button className="inline-block text-[14px] py-4 px-6 border-2 border-gray-800 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={() =>emptyCart()}>Clear Cart</button>
        </div>
      </div>

    </div>
  )
}