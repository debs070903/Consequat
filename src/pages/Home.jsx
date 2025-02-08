import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Cover from "../assets/Cover.png";
import Cover1 from "../assets/Cover1.png";
import consequat3 from "../assets/consequat3.jpg";
import { TimeBox } from "../components/TimeBox";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const eventDate = new Date("2025-05-03T14:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="w-full mx-0 mt-0 py-0 bg-gray-200 dark:bg-gray-600">
      <Navbar />
      <div className="bg-gray-200 dark:bg-gray-600">
        <div className="w-full bg-gray-200 dark:bg-gray-600 py-6 md:py-16 flex justify-center">
          <img
            src={Cover}
            className="w-[95%] md:w-[85%] h-auto object-cover rounded-xl dark:block hidden"
            alt="Event Cover"
          />
          <img
            src={Cover1}
            className="w-[95%] md:w-[85%] h-auto object-cover rounded-xl dark:hidden"
            alt="Event Cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center bg-gray-200 dark:bg-gray-600">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-10 text-gray-800 dark:text-white">
            Event Going Live In...
          </h1>
          {timeLeft.expired ? (
            <p className="text-lg md:text-xl text-red-500">
              The event has started!
            </p>
          ) : (
            <div className="flex gap-2 md:gap-4 justify-center dark:text-gray-700 text-gray-300 flex-wrap">
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Minutes" value={timeLeft.minutes} />
              <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
          )}
        </div>
      </div>

      <div className="md:mt-20 mt-10 dark:text-white flex flex-col md:flex-row items-center justify-evenly px-4">
        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
          <img
            src={consequat3}
            className="w-[70%] md:w-full rounded-lg shadow-lg"
            alt="Consequat Exhibition"
          />
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-[50%] flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-4xl text-teal-600 dark:text-gray-200">
            ABOUT
          </h1>
          <p className="md:text-xl text-md ">
            <strong>Consequat</strong>, Lensified Official’s premier
            international exhibition, celebrates the fusion of art and
            photography, offering global exposure to photographers and artists.
            Since its inception in 2022, Consequat has grown remarkably,
            showcasing <strong>450+ frames</strong> from{" "}
            <strong>150+ participants</strong> across the USA, the UK,
            Bangladesh, Germany, Israel, and Australia, last year.
          </p>
          <p className="md:text-xl text-md">
            Renowned photographers like{" "}
            <strong>
              Shibasish Saha, Jayanta Guha, Subrata Bysack, Santanu
              Roychowdhury,
            </strong>{" "}
            and <strong>Siddhartha Paul</strong> have judged works in categories
            such as <em>Wildlife, Street, Portrait, and Landscape.</em>
          </p>
          <p className="md:text-xl text-md">
            This year, Consequat will be held on{" "}
            <strong>May 3rd and 4th, 2025</strong>, at{" "}
            <strong>Nandalal Bose & Jamini Roy Gallery, ICCR</strong>, promising
            an even grander celebration of creativity.
          </p>
          <Link to="/about">
            <p className="md:text-xl text-md text-blue-500 cursor-pointer hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500">
              Read More...
            </p>
          </Link>
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <Carousel />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-6 md:mt-20 mt-10">
        <div>
          <iframe
            className="md:w-96 md:h-80 w-48 h-40 rounded-lg border-2 border-gray-300"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyADOUhAdwwkCcNMjUx_9Gl-5AhJlnT96tg&q=22.54742799890209,88.35173836107565"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="md:text-left text-center flex flex-col md:gap-6 gap-2">
          <h1 className="font-bold text-2xl md:text-4xl text-teal-600 dark:text-gray-200">
            EVENT DETAILS
          </h1>
          <p className="md:text-xl dark:text-white">
            📍 <strong>Location:</strong> ICCR, Kolkata, India
          </p>
          <p className="md:text-xl dark:text-white">
            🗓 <strong>Date:</strong> 3rd & 4th May
          </p>
          <p className="md:text-xl dark:text-white">
            ⏰ <strong>Time:</strong> 3pm Onwards
          </p>
          <div className="flex gap-1 md:gap-4">
            <button className="md:p-4 p-2 text-xs md:text-lg h-fit bg-teal-600 dark:bg-[#EA3C3F] dark:hover:bg-[#c87e80] rounded-xl text-white md:font-bold hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg cursor-pointer">
              Register Now
            </button>
            <button className="md:p-4 p-2 text-xs md:text-lg h-fit bg-teal-600 dark:bg-[#EA3C3F] dark:hover:bg-[#c87e80] rounded-xl text-white md:font-bold hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-700 hover:shadow-lg cursor-pointer">
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
      <div className="md:mt-20 mt-10">
        <Footer />
      </div>
    </div>
  );
};
