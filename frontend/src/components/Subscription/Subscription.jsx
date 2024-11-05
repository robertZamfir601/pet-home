import React from 'react'
import Banner from "../../assets/Banner/banner.jpg";

const BannerImg = {
   backgroundImage: `url(${Banner})`,
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "100%",
   width: "100%",
}

const Subscription = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-50 dark:bg-gray-800 text-primary"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
         <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left
                  sm:text-4xl font-semibold">
               Get News About Recent Arrivals
            </h1>
            <input 
               data-aos="fade-up"
               type="text"
               placeholder="Enter your email here"
               className="w-full p-3 bg-primary text-white"
            />
         </div>
      </div>
    </div>
  )
}

export default Subscription;