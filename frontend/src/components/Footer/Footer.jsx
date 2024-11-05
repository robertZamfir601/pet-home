import React from 'react'
import Logo from "../../assets/website/logo.jpg"
import Banner from "../../assets/Banner/banner.jpg"
import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa6';
import { FaLinkedin, FaMobileAlt } from 'react-icons/fa';

const BannerStyle = {
   backgroundColor: "#8B4513",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   height: "100%",
   width: "100%",   
};

const FooterLinks = [
   {
      title: "Home",
      link: "/#",
   },
   {
      title: "About",
      link: "/#about",
   },
   {
      title: "Contact",
      link: "/#contact",
   },
   {
      title: "Blog",
      link: "/#blog",
   },
]

const Footer = () => {
  return (
    <div 
      style={BannerStyle}
      className="text-gray-400">
      <div className="container">
         <div 
            data-aos="zoom-in"
            className="grid md:grid-cols-3 pb-44 pt-5">
            {/* company details  */}
            <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3">
               <img 
                  src={Logo} 
                  alt="" 
                  className="max-w-[50px] rounded-full" />
               Pet Home
            </h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui officia quidem, quo placeat ratione sit eum molestias illum. Beatae tempora, itaque hic suscipit tempore aliquid nihil quam veritatis maiores!
            </p>
            </div>

            {/* footer links  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2
            md:pl-10">
               <div>
                  <div className="py-8 px-4">
                     <h1 className="sm:text-xl text-xl font-bold
                     sm:text-left text-justify mb-3" 
                     >Important Links</h1>
                     <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link) => (
                              <li
                                 className="cursor-pointer
                              hover:text-primary hover:translate-x-1 
                              duration-300 text-gray-400"  
                                 key={link.title}>
                                 <span>{link.title}</span>
                              </li>
                           ))}
                     </ul>
                  </div>
               </div>
               
              
               <div>
                  <div className="py-8 px-4">
                     <h1 className="sm:text-xl text-xl font-bold
                     sm:text-left text-justify mb-3" 
                     >Links</h1>
                     <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link) => (
                              <li
                                 className="cursor-pointer
                              hover:text-primary hover:translate-x-1 
                              duration-300 text-gray-400"  
                                 key={link.title}>
                                 <span>{link.title}</span>
                              </li>
                           ))}
                     </ul>
                  </div>
               </div>

               {/* social links  */}
               <div>
                  <div className="flex items-center gap-3 mt-6">
                     <a href="#">
                        <FaInstagram className="text-3xl"/>
                     </a>
                     <a href="#">
                        <FaFacebook className="text-3xl"/>
                     </a>
                     <a href="#">
                        <FaLinkedin className="text-3xl"/>
                     </a>
                  </div>
                  <div className="mt-6">
                     <div className="flex items-center gap-3">
                        <FaLocationArrow className="text-3xl"/>
                           <p>A random small place, In a Big World</p>
                     </div>
                  </div>
                  <div className="mt-6">
                     <div className="flex items-center gap-3">
                        <FaMobileAlt className="text-3xl"/>
                           <p>+01 111 111 111</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Footer;