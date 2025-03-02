import React from "react";
import { Navbar } from "../components/Navbar";
import c2 from "../assets/c2.png";
import consequat3 from "../assets/consequat3.jpg";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import brochure from "../assets/SponsorBrochure.pdf";
import { motion } from "framer-motion";

export const About = () => {
  const navigate = useNavigate();
  const handleOpenPDF = () => {
    window.open(brochure, "_blank");
  };
  return (
    <div className="bg-gray-50 dark:bg-[#4A5565]">
      <div className="bg-gray-50 dark:bg-[#4A5565] py-10 md:py-5 flex justify-center">
        <div className="md:w-full w-[85%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-teal-900 dark:text-white md:mb-10 mb-4 md:mt-8">
              ABOUT US
            </h1>
            <img
              src={consequat3}
              alt="About Us"
              className="mx-auto mb-6 rounded-2xl shadow-md md:w-2xl md:h-auto md:mb-10"
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 md:mb-20">
              Lensified Official is a well-known Photography club of Kolkata,
              West Bengal. Our main objective is to guide photographers from the
              very basics without any fee and provide a platform for them to
              showcase their talent. We organise photographic forums,
              photowalks, exhibitions, online and offline competitions, and much
              more all year around.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-2">
                  OUR MISSION
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  To inspire, connect, and showcase the talents of photographers
                  and artists globally, fostering a community driven by passion
                  and innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-2">
                  OUR VISION
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  To be a global platform that bridges cultural gaps through the
                  universal language of art and photography.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
              className="mt-10 bg-teal-100 dark:bg-gray-700 rounded-2xl p-6 shadow-md md:mb-20"
            >
              <h3 className="text-xl font-bold text-teal-900 dark:text-white mb-2">
                WHY CHOOSE US?
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>International Recognition for Your Work</li>
                <li>Diverse Themes Encouraging Creative Freedom</li>
                <li>Opportunities to Network with Global Artists</li>
                <li>Expert Judging Panel & Valuable Feedback</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <div className="mt-10 md:text-left text-center grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-teal-900 dark:text-white mb-4">
                    CONSEQUAT: OUR INTERNATIONAL EVENT
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 md:mb-4">
                    Consequat, Lensified’s most anticipated international event,
                    captivates the fusion of art and photography. Held at
                    renowned venues, Consequat is a premier photography and art
                    exhibition that provides international exposure to both
                    established and emerging photographers and artists, opening
                    doors to new connections and opportunities.
                  </p>
                </div>
                <img
                  src={c2}
                  alt="Consequat Event"
                  className="rounded-2xl shadow-md mb-4"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:text-left text-center">
                Since its inception in 2022, Consequat has grown in scale and
                significance. In the inaugural year, we hosted a 2-day photo
                exhibition on May 27th and 28th at the Altamira Art Gallery in
                Kolkata's Gariahat, where over 50 photographers globally
                participated, showcasing more than 150 frames. This marked the
                beginning of a successful journey.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 md:text-left text-center">
                In 2024, Consequat reached new heights, being held at the
                prestigious Nandalal Bose and Jamini Roy Galleries, ICCR.
                Alongside photography, it was our second year exhibiting
                artworks, and our event witnessed remarkable growth, with 150+
                participants from across the world, including the USA,
                Bangladesh, Germany, Israel, and Australia. A total of over 450+
                frames were displayed, a significant increase from the previous
                year.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:text-left text-center">
                Over the past three years, we have had the privilege of
                collaborating with renowned photographers such as Shibasish
                Saha, Jayanta Guha, Shayan Bose, Rajdip Paul, Satyaki Acharya,
                Anirban Pan, Shaayer Mukherjee, Subrata Bysack, Santanu
                Roychowdhury, Siddhartha Paul, and more, who judged the
                exhibited photographs in categories like Wildlife, Street,
                Portrait, and Landscape. Notable personalities like Debabrata
                Bhattacharya and Ujjal Biswas have also served as judges for
                artworks.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:text-left text-center">
                In recognition of their talent, winners in each category
                received attractive prizes, while every participant was awarded
                a medal and a certificate. This year, we’re taking Consequat to
                even greater heights. In 2025, we will be organizing Consequat
                at the Nandalal Bose and Jamini Roy Galleries at ICCR on May 3rd
                and 4th, 2025.
              </p>
            </motion.div>
          </motion.div>
          <div className="flex gap-1 md:gap-4 w-full justify-center md:mt-10">
            <a
              href="https://forms.gle/f5BrRY6z36tjCTH28"
              target="_blank"
              rel="noopener noreferrer"
              className="md:p-4 p-2 text-xs md:text-lg h-fit bg-teal-600 dark:bg-[#EA3C3F] dark:hover:bg-[#c87e80] rounded-xl text-white md:font-bold hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg cursor-pointer"
            >
              Register Now
            </a>
            <button
              onClick={handleOpenPDF}
              className="md:p-4 p-2 text-xs md:text-lg h-fit bg-teal-600 dark:bg-[#EA3C3F] dark:hover:bg-[#c87e80] rounded-xl text-white md:font-bold hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg cursor-pointer"
            >
              Sponsorship Brochure
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="md:p-4 p-2 text-xs md:text-lg h-fit bg-teal-600 dark:bg-[#EA3C3F] dark:hover:bg-[#c87e80] rounded-xl text-white md:font-bold hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-10"></div>
    </div>
  );
};
