import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import axios from 'axios';

// const PetsData = [
//    {
//       id: 1,
//       img: Img1, 
//       title: "Doggo",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//    },
//    {
//       id: 2,
//       img: Img2, 
//       title: "Katty",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//    },
//    {
//       id: 3,
//       img: Img1, 
//       title: "Doggo",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//    },
//    {
//       id: 4,
//       img: Img1, 
//       title: "Doggo",
//       description: "A nice playful dogo. The doggo intel is desplayed here",
//    }
// ];



const Pets = ({ handleOrderPopup }) => {

   const [PetsData, setPetsData] = useState([])
   const getPetsData = async () => {
      await axios
         .get('http://localhost:8081/api/v1/pets')
         .then(response => {
            setPetsData(response.data);
         })
   }
   useEffect(() => {
      getPetsData()
   }, [])


  return (
    <div>
      <div className="container">
         {/* Header section */}
         <div className="text-left mb-5">
            <p 
              data-aos="fade-up" 
              className="text-sm text-primary">Best Pets For you</p>
            <h1 data-aos="fade-up" 
              className="text-3xl font-bold">Pets</h1>
            <p data-aos="fade-up" 
              className="text-xs text-gray-400">
              A long paragraph of no actual meaning foor the moment
            </p>
         </div>
         {/* Body section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 place-items-center space-y-2 space-x-2 gap-15 pb-5 md:gap-5">
            {PetsData.map((pet) => (
               <div 
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800
                  hover:bg-black/80 dark:hover:bg-primary
                  hover:text-white  relative shadow-xl duration-300 
                  group max-w-[300px] min-w-[150px]"
                  key={pet.id}
               >
                  {/* Image Section */}
                  <div className="h-[100px]">
                     <img src={pet.photoURL} alt="" 
                        className="max-w-[140px] max-h-[130px] rounded-2xl block mx-auto
                        transform group-hover:scale-100 
                        duration-300 drop-shadow-md pt-2 pb-1"
                     />
                  </div>
                  {/* Details section  */}
                  <div className="p-10 text-center">
                  {/* star rating */}
                     <div className="w-full flex 
                     items-center justify-center gap-1">
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                        <FaStar className="text-yellow-500"/>
                     </div>
                     <h1 className="text-xl font-bold">
                        {pet.name}
                     </h1>
                     <p className="text-gray-500 
                     group-hover:text-white duration-300
                     text-sm line-clamp-2">
                        {pet.description}
                     </p>
                     <h1 className="text-xl font-bold">
                        {pet.price}
                     </h1>
                     <button 
                     className="bg-primary hover:scale-105 
                     duration-300 text-white py-1 px-4 rounded-full
                     mt-4 group-hover:bg-white group-hover:text-primary"
                     onClick={handleOrderPopup}
                     >
                        Take Me Now
                     </button>

                  </div>
               </div>  
            ))}
         </div>
      </div>
    </div>
  )
}

export default Pets