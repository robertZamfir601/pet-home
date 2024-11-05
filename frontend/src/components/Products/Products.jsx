import React from 'react'
import Img1 from "../../assets/products/pet_food.png"
import Img2 from "../../assets/products/pet_food.png"
import Img3 from "../../assets/products/pet_food.png"
import Img4 from "../../assets/products/pet_food.png"
import {FaStar } from "react-icons/fa6"
import { data } from 'autoprefixer'
import axios from 'axios';
import { useState, useEffect } from 'react'

// const ProductsData = [
//   {
//     id: 1, 
//     img: Img1,
//     title: "Pet Food",
//     color: "white",
//     rating: 5.0, 
//     aosDelay: "0"
//   },
//   {
//     id: 2, 
//     img: Img2,
//     title: "Dog toy",
//     color: "red",
//     rating: 5.0, 
//     aosDelay: "200"
//   },
//   {
//     id: 3, 
//     img: Img3,
//     title: "Cat Tree House",
//     color: "green",
//     rating: 5.0, 
//     aosDelay: "400"
//   },
//   {
//     id: 4, 
//     img: Img4,
//     title: "Pet Hat",
//     rating: 5.0, 
//     color: "yellow",
//     aosDelay: "600"
//   },
// ];



const Products = () => {
  const [ProductsData, setProductsData] = useState([])
  const getProductsData = async () => {
     await axios
        .get('http://localhost:8081/api/v1/products/firstProducts')
        .then(response => {
           setProductsData(response.data);
        })
  }
  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <div className="mt-14 mb-12">
      <div className="container">
         {/* Header Section */}
         <div className="text-center mb-10 max-w[600px] mx-auto">
            <p 
              data-aos="fade-up" 
              className="text-sm text-primary">Top Selling Products</p>
            <h1 data-aos="fade-up" 
              className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" 
              className="text-xs text-gray-400">
              A long paragraph of no actual meaning foor the moment
            </p>
         </div>
         {/* Body Section */}
         <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
          lg:grid-cols-5 place-items-center gap-5">
            {/* card section  */}
            {
              ProductsData.map((product) => (
                <div 
                  data-aos="fade-up"
                  data-aos-delay={product.aosDelay}
                  key={product.id}
                  className="space-y-3"
                >
                  <img src={product.photoURL} alt="" 
                  className="h-[220px] w-[150px]
                  object-cover rounded-md"/>
                  <div>
                    <h3 className="font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-7">
                      {product.color}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          {/* view all button  */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer 
            bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Products