import React from 'react'
import Image1 from "../../assets/carusel/dogo1.jpg"
import Image2 from "../../assets/carusel/cat1.jpg"
import Image3 from "../../assets/carusel/rabbit1.jpg"
import Slider from "react-slick"


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "All kinds of little, cute friends",
    description: 
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Non aptent ipsum sodales fames cursus venenatis ultricies. Lobortis duis dignissim risus euismod ultricies potenti penatibus porttitor vulputate. Dolor eu litora efficitur cubilia viverra aenean commodo parturient sed. Elementum nunc non eleifend elit porttitor tempor. Cursus amet iaculis eleifend ultrices consectetur elit odio. Facilisi montes parturient turpis parturient condimentum leo. Mi dignissim interdum fermentum in condimentum curabitur."
  },
  {
    id: 2,
    img: Image2,
    title: "Come get one now",
    description: 
    "Cras gravida mauris mauris ante volutpat leo porttitor dictum. Finibus purus efficitur praesent inceptos quisque. Vulputate leo habitant sociosqu nisl commodo tempus cubilia. Nam vestibulum ullamcorper massa lobortis erat; erat metus suscipit. Vestibulum arcu nec auctor cubilia feugiat. Curae class platea consequat dictumst nisl class proin? Suspendisse orci aliquam elementum ornare laoreet blandit commodo eleifend. Semper duis justo imperdiet; quam donec risus condimentum consectetur venenatis."
  },
  {
    id: 3,
    img: Image3,
    title: "I am out of ideas",
    description: 
    "Eu egestas neque iaculis viverra gravida hendrerit imperdiet nunc aliquam. In massa ultricies fames tempor tortor. Eros arcu non bibendum senectus venenatis etiam eget blandit. Integer dictumst vestibulum commodo ex curabitur ad. Consequat aenean vestibulum malesuada adipiscing porta, magna maximus per. Torquent rutrum taciti donec augue augue varius rutrum. Fermentum ullamcorper nisl gravida quam integer cras, dictum vitae. Nullam enim quam quam cursus conubia."
  },
]

const Carusel = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* backgrond patter */}
      <div className="h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
      </div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
          <div key={item.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-2">
                {/* text content */}
                <div 
                className="flex flex-col justify-center gap-4 pt-12 
                sm:pt-0 text-center sm:text-left order-2 sm:order-1
                relative z-10">
                  <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-onc="true"
                  className="text-5xl sm:text-6xl lg:text-7xl
                  font-bold">
                    {item.title}
                  </h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm">
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r 
                      from-primary to-secondary hover:scale-105
                      duratio-200 text-white py-2 px-4 rounded-full">
                        Take One Home Now 
                    </button>
                  </div>
                </div>
                {/* image content */}
                <div className="order-1 sm:order-2">
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10">
                    <img src={item.img} alt="" 
                      className="w-[300px] h-[300px] sm:h-[600px] 
                      sm:w-[450px] object-contain mx-auto"
                    />
                  </div>
                </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  )
};

export default Carusel;