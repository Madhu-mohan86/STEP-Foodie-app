import React,{useEffect, useState} from 'react'
import Itemslist from '../Components/Itemslist'
import foodcard from '../Images/food-card.png' 
import Navbar from '../Components/Navbar'
import axios from 'axios'

export default function Restaurantpage() {

  const [data,setData]=useState();

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get('https://mocki.io/v1/6aebdb48-272f-48cf-9d28-1d2a73a0ccd4');
        setData(response.data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    }

    fetchAPI(); // Call the fetchAPI function to fetch data when component mounts
  }, []);


  const menu = data.length > 0 ? data : [{
    food_card:foodcard,
    hotel_name:'Adayar Anandha Bhavan',
    item_name:'Vegetarian, chinese, north indian , tandoori',
    item_price:'50',
    hotel_distance:'4.3',
    ratings:'450'
},
{
  food_card:foodcard,
  hotel_name:'Adayar Anandha Bhavan',
  item_name:'Vegetarian, chinese, north indian , tandoori',
  item_price:'50',
  hotel_distance:'4.3',
  ratings:'450'
},
]
  return (
    <>
    <Navbar userName='Ashok madhavan' />
   {menu.map((menu)=>{
    return(<Itemslist foodCard={menu.food_card} hotelName={menu.hotel_name} itemName={menu.item_name} itemPrice={menu.item_price} hotelDistance={menu.hotel_distance} rating={menu.ratings} />
    )})}
    </>
  ) 
}
