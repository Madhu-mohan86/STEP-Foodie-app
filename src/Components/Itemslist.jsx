import React from 'react'
import Button from './Button'

export default function Itemslist({foodCard,hotelName,itemName,itemPrice,hotelDistance,rating}) {
  return (
    <div className='flex flex-row justify-center mt-10'>
  
    <div className='w-64 border border-black'>
      
      {/* Image part */}

      <img src={foodCard} alt='' className='h-fit' />
      
      {/* Text part */}
      <div className='px-1.5 py-2'>
         <h1 className='font-semibold font-Inter text-slate-900'>{hotelName}</h1>
         <p className='text-base font-medium text-gray-400 font-Inter line-clamp-1' >{itemName}</p>
         <span className='flex justify-between my-2'>

         {/* extra details */}
         <span className='flex mb-3'>
         
         {/* Icon */}
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
         </svg>
           
         <p className='font-semibold text-red-600 font-Inter'>{hotelDistance}km</p>
         
         </span>
       
         <p className='font-semibold text-green-500 font-Inter'>&#x20B9;&#160;{itemPrice}&#160;onwards</p>
         </span>
         
         <Button content='Show catlog' color='#BD031A'/>
         
         <p className='mt-3 text-base font-semibold text-yellow-500 text-end font-Inter'>{rating}&#160;ratings</p>
      </div>
      
    </div>
    </div>
  )
}
