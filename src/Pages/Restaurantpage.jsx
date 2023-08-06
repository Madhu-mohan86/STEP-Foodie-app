import React from 'react'
import Itemslist from '../Components/Itemslist'
import foodcard from '../Images/food-card.png' 
import Navbar from '../Components/Navbar'


export default function Restaurantpage() {

const menu={
    food_card:foodcard,
    hotel_name:'Adayar Anandha Bhavan',
    item_name:'Vegetarian, chinese, north indian , tandoori',
    item_price:'50',
    hotel_distance:'4.3',
    ratings:'450'
}

  return (
    <>
    <Navbar userName='Ashok madhavan' />
    <Itemslist foodCard={menu.food_card} hotelName={menu.hotel_name} itemName={menu.item_name} itemPrice={menu.item_price} hotelDistance={menu.hotel_distance} rating={menu.ratings} />
    </>
  )
}
