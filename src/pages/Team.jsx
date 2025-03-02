import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { TeamCard } from "../components/TeamCard";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

const teamData = {
  advisory: [
    { name: "Shouvik Datta", role: "Advisor", img: "/assets/ShouvikDatta.jpg" },
    { name: "Sayantan Nath", role: "Advisor", img: "/assets/SayantanNath.jpg" },
    { name: "Rajdeep Paul", role: "Advisor", img: "/assets/RajdeepPaul.jpg" },
    { name: "Arghya Mondal", role: "Advisor", img: "/assets/ArghyaMondal.jpg" },
  ],
  mentors: [
    {
      name: "Subhrajyoti Sarkar",
      role: "Mentor",
      img: "/assets/SubhrajyotiSarkar.jpg",
    },
    {
      name: "Shibasish Saha",
      role: "Mentor",
      img: "/assets/ShibasishSaha.jpg",
    },
    {
      name: "Satyaki Acharya",
      role: "Mentor",
      img: "/assets/SatyakiAcharya.jpg",
    },
    {
      name: "Supriyo Mondal",
      role: "Mentor",
      img: "/assets/SupriyoMondal.jpg",
    },
    { name: "Somartya Bera", role: "Mentor", img: "/assets/SomartyaBera.jpg" },
    { name: "Shayan Bose", role: "Mentor", img: "/assets/ShayanBose.jpg" },
    {
      name: "Shilpa Bhattacharya",
      role: "Mentor",
      img: "/assets/ShilpaBhattacharya.jpg",
    },
    { name: "Sayan Khan", role: "Mentor", img: "/assets/SayanKhan.jpg" },
    { name: "Sambit Saha", role: "Mentor", img: "/assets/SambitSaha.jpg" },
    {
      name: "Sreeja Saraswati",
      role: "Mentor",
      img: "/assets/SreejaSaraswati.jpg",
    },
    {
      name: "Gairik Chakraborty",
      role: "Mentor",
      img: "/assets/GairikChakraborty.jpg",
    },
    { name: "Simran Nasrin", role: "Mentor", img: "/assets/SimranNasrin.jpg" },
    { name: "Soham Mitra", role: "Mentor", img: "/assets/SohamMitra.jpg" },
    { name: "Isha Goswami", role: "Mentor", img: "/assets/IshaGoswami.jpg" },
    { name: "Rupam Ghosh", role: "Mentor", img: "/assets/RupamGhosh.jpg" },
  ],
  core: [
    {
      name: "Debanik Dutta",
      role: "Team Head",
      img: "/assets/DebanikDutta.jpg",
    },
    {
      name: "Retisha Bhaumik",
      role: "Treasurer",
      img: "/assets/RetishaBhaumik.jpg",
    },
    {
      name: "Rajarshi Das",
      role: "Co-ordinator",
      img: "/assets/RajarshiDas.jpg",
    },
    {
      name: "Nawal Fida Laskar",
      role: "Sponsor Head",
      img: "/assets/NawalFidaLaskar.jpg",
    },
    {
      name: "Chandril Ghosh",
      role: "Social Media Head",
      img: "/assets/ChandrilGhosh.jpg",
    },
    {
      name: "Shaazaya Choudhury",
      role: "PR Head",
      img: "/assets/ShaazayaChoudhury.jpg",
    },
    {
      name: "Subhabilash Das",
      role: "Graphics Head",
      img: "/assets/SubhabilashDas.jpg",
    },
    {
      name: "Wrick Banerjee",
      role: "Event Manager",
      img: "/assets/WrickBanerjee.jpg",
    },
    {
      name: "Raghav Jaiswal",
      role: "Event Manager",
      img: "/assets/RaghavJaiswal.jpg",
    },
  ],
  graphics: [
    {
      name: "Subhabilash Das",
      role: "Graphics Head",
      img: "/assets/SubhabilashDas.jpg",
    },
    {
      name: "Sudipta Mandal",
      role: "Graphic Designer",
      img: "/assets/SudiptaMandal.jpg",
    },
    {
      name: "Mainakh Chakroborty",
      role: "Graphic Designer",
      img: "/assets/MainakhChakroborty.jpg",
    },
    {
      name: "Arif Hossain",
      role: "Graphic Designer",
      img: "/assets/ArifHossain.jpg",
    },
    {
      name: "Deepak Kumar",
      role: "Graphic Designer",
      img: "/assets/DeepakKumar.jpg",
    },
    {
      name: "Sougata Santra",
      role: "Graphic Designer",
      img: "/assets/SougataSantra.jpg",
    },
  ],
  sponsors: [
    {
      name: "Nawal Fida Laskar",
      role: "Sponsor Head",
      img: "/assets/NawalFidaLaskar.jpg",
    },
    {
      name: "Himaghna Ghosh",
      role: "Sponsor Team",
      img: "/assets/HimaghnaGhosh.jpg",
    },
    {
      name: "Arya Podder",
      role: "Sponsor Team",
      img: "/assets/AryaPodder.jpg",
    },
    { name: "Romit Som", role: "Sponsor Team", img: "/assets/RomitSom.jpg" },
    {
      name: "Srizan Sutradhar",
      role: "Sponsor Team",
      img: "/assets/SrizanSutradhar.jpg",
    },
  ],
  pr: [
    {
      name: "Shaazaya Choudhury",
      role: "PR Head",
      img: "/assets/ShaazayaChoudhury.jpg",
    },
    {
      name: "Kasturi Barman",
      role: "PR Team",
      img: "/assets/KasturiBarman.jpg",
    },
    { name: "Rounak Das", role: "PR Team", img: "/assets/RounakDas.jpg" },
    {
      name: "Ankur Mukherjee",
      role: "PR Team",
      img: "/assets/AnkurMukherjee.jpg",
    },
    { name: "Sneha Das", role: "PR Team", img: "/assets/SnehaDas.jpg" },
  ],
  art: [
    { name: "Megha Dutta", role: "Art Head", img: "/assets/MeghaDutta.jpg" },
    {
      name: "Sudipta Mandal",
      role: "Art Team",
      img: "/assets/SudiptaMandal.jpg",
    },
    {
      name: "Chandril Ghosh",
      role: "Art Team",
      img: "/assets/ChandrilGhosh.jpg",
    },
    {
      name: "Piyush Patra Chatterjee",
      role: "Art Team",
      img: "/assets/PiyushPatra.jpg",
    },
  ],
};

const tabs = [
  { key: "advisory", label: "Advisory" },
  { key: "mentors", label: "Mentors" },
  { key: "core", label: "Core" },
  { key: "graphics", label: "Graphics" },
  { key: "sponsors", label: "Sponsor" },
  { key: "pr", label: "PR" },
  { key: "art", label: "Art" },
];

export const Team = () => {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#4A5565] text-gray-800 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="md:text-4xl text-2xl md:my-10 my-5 font-bold text-teal-600 dark:text-white text-center"
      >
        <h1>MEET OUR TEAM</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }}
        className="flex justify-center px-1 md:px-0 space-x-2 bg-[#8FDACF] dark:bg-[#364153] py-4 md:w-[85%] w-[90%] mx-auto rounded-2xl"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`md:px-4 md:py-2 px-0.5 font-semibold rounded-lg transition-colors duration-300 cursor-pointer text-xs md:text-lg ${
              activeTab === tab.key
                ? "bg-teal-500 text-white dark:bg-[#181d26]"
                : "bg-[#8FDACF] dark:bg-gray-700 text-teal-800 dark:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>
      <main className="py-8 px-4 md:px-16 mb-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          {tabs.find((tab) => tab.key === activeTab)?.label}
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4"
        >
          {teamData[activeTab].map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};
