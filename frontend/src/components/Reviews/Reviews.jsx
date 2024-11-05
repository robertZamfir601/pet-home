import React from 'react'
import Slider from "react-slick"
import { useState, useEffect } from 'react';
import axios from 'axios';

// const ReviewsList = [
//    {
//       id: 1,
//       name: "Mihaita",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 2,
//       name: "Ionut",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 3,
//       name: "Mihaela",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 4,
//       name: "Marinel",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 5,
//       name: "Mihaita",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 6,
//       name: "Mihaita",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 7,
//       name: "Mihaita",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
//    {
//       id: 8,
//       name: "Mihaita",
//       text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa phasellus nullam, lacinia lacus sed semper. Nullam curae fames purus hac penatibus leo mollis risus ultricies. Mollis placerat egestas dictum condimentum erat morbi tempus. Quisque tellus purus purus quisque auctor purus posuere erat.",
//       img: "https://i.pinimg.com/550x/39/8f/da/398fdab4318b3baa65d36baf5ab3fab4.jpg",
//    },
// ];

const Reviews = () => {

   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
         {
            breakpoint: 10000,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            },
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ]
   };

   const [ReviewsList, setReviewsList] = useState([])
   const getReviewsList = async () => {
      await axios
         .get('http://localhost:8081/api/v1/reviews')
         .then(response => {
            setReviewsList(response.data);
         })
   }
   useEffect(() => {
      getReviewsList()
   }, [])

  return (
    <div className="py-10 mt-10">
      <div className="container">
         {/* header section  */}
         <div className="text-center mb-10 max-w[600px] mx-auto">
            <p 
              data-aos="fade-up" 
              className="text-sm text-primary">Customers Reviews</p>
            <h1 data-aos="fade-up" 
              className="text-3xl font-bold">Reviews</h1>
            <p data-aos="fade-up" 
              className="text-xs text-gray-400">
              A long paragraph of no actual meaning foor the moment
            </p>
         </div>

         {/* Reviews cards */}
         <div data-aos="zoom-in">
            <Slider {...settings}> 
               {ReviewsList.map((review) => (
                  <div key={review.id} className="my-6">
                     <div
                        className="flex flex-col gap-4 shadow-lg py-8
                        px-6 mx-4 rounded-xl dark:bg-gray-800 
                        bg-primary/10 relative">
                           <div className="mb-4">
                              <img 
                                 src={review.userPhotoURL} 
                                 alt=""
                                 className="rounded-full w-20 h-20" />
                           </div>
                           <div className="flex flex-col 
                              items-center gap-4">
                              <div className="space-y-3">
                                 <p className="text-xs text-gray-500">
                                       {review.text}
                                 </p>
                                 <h1 className="text-xl font-bold text-black/80
                                 dark:text-light">
                                    {review.name}
                                 </h1>
                              </div>
                           </div>
                           <p className="text-black/20 text-9xl
                           font-serif absolute top-0 right-0">
                              ,,
                           </p>
                        </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
    </div>
  )
}

export default Reviews