import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { TeamCard } from "../components/TeamCard";
import { Footer } from "../components/Footer";
import RetishaBhaumik from "../assets/RetishaBhaumik.jpg";
import ChandrilGhosh from "../assets/ChandrilGhosh.jpg";
import ShaazayaChoudhury from "../assets/ShaazayaChoudhury.jpg";
import SubhabilashDas from "../assets/SubhabilashDas.jpg";
import WrickBanerjee from "../assets/WrickBanerjee.jpg";
import NawalFidaLaskar from "../assets/NawalFidaLaskar.jpg";
import RaghavJaiswal from "../assets/RaghavJaiswal.jpg";
import DebanikDutta from "../assets/DebanikDutta.png";
import RajarshiDas from "../assets/RajarshiDas.png";
import DeepakKumar from "../assets/DeepakKumar.jpg";
import MainakhChakraborty from "../assets/MainakhChakroborty.jpg";
import ArifHossain from "../assets/ArifHossain.jpg";
import SougataSantra from "../assets/SougataSantra.jpg";
import SudiptaMandal from "../assets/SudiptaMandal.jpg";
import SrizanSutradhar from "../assets/SrizanSutradhar.jpg";
import RomitSom from "../assets/RomitSom.jpg";
import AryaPoddar from "../assets/AryaPodder.jpg";
import HimaghnaGhosh from "../assets/HimaghnaGhosh.jpg";
import KasturiBarman from "../assets/KasturiBarman.jpg";
import SnehaDas from "../assets/SnehaDas.jpg";
import AnkurMukherjee from "../assets/AnkurMukherjee.jpg";
import RounakDas from "../assets/RounakDas.jpg";

const teamData = {
  core: [
    {
      name: "Debanik Dutta",
      role: "Team Head",
      img: DebanikDutta,
    },
    {
      name: "Rajarshi Das",
      role: "Co-ordinator",
      img: RajarshiDas,
    },
    {
      name: "Retisha Bhaumik",
      role: "Treasurer",
      img: RetishaBhaumik,
    },
    {
      name: "Nawal Fida Laskar",
      role: "Sponsor Head",
      img: NawalFidaLaskar,
    },
    {
      name: "Chandril Ghosh",
      role: "Social Media Head",
      img: ChandrilGhosh,
    },
    {
      name: "Shaazaya Choudhury",
      role: "PR Head",
      img: ShaazayaChoudhury,
    },
    {
      name: "Subhabilash Das",
      role: "Graphics Head",
      img: SubhabilashDas,
    },
    {
      name: "Wrick Banerjee",
      role: "Event Manager",
      img: WrickBanerjee,
    },
    {
      name: "Raghav Jaiswal",
      role: "Event Manager",
      img: RaghavJaiswal,
    },
  ],
  graphics: [
    {
      name: "Subhabilash Das",
      role: "Graphics Head",
      img: SubhabilashDas,
    },
    {
      name: "Sudipta Mandal",
      role: "Graphic Designer",
      img: SudiptaMandal,
    },
    {
      name: "Mainakh Chakroborty",
      role: "Graphic Designer",
      img: MainakhChakraborty,
    },
    {
      name: "Arif Hossain",
      role: "Graphic Designer",
      img: ArifHossain,
    },
    {
      name: "Deepak Kumar",
      role: "Graphic Designer",
      img: DeepakKumar,
    },
    {
      name: "Sougata Santra",
      role: "Graphic Designer",
      img: SougataSantra,
    },
  ],
  sponsors: [
    {
      name: "Nawal Fida Laskar",
      role: "Sponsor Head",
      img: NawalFidaLaskar,
    },
    {
      name: "Himaghna Ghosh",
      role: "Sponsor Team",
      img: HimaghnaGhosh,
    },
    {
      name: "Arya Podder",
      role: "Sponsor Team",
      img: AryaPoddar,
    },
    {
      name: "Romit Som",
      role: "Sponsor Team",
      img: RomitSom,
    },
    {
      name: "Srizan Sutradhar",
      role: "Sponsor Team",
      img: SrizanSutradhar,
    },
  ],
  pr: [
    {
      name: "Shaazaya Choudhury",
      role: "PR Head",
      img: ShaazayaChoudhury,
    },
    {
      name: "Kasturi Barman",
      role: "PR Team",
      img: KasturiBarman,
    },
    {
      name: "Rounak Das",
      role: "PR Team",
      img: RounakDas,
    },
    {
      name: "Ankur Mukherjee",
      role: "PR Team",
      img: AnkurMukherjee,
    },
    {
      name: "Sneha Das",
      role: "PR Team",
      img: SnehaDas,
    },
  ],
};

const tabs = [
  { key: "core", label: "Core Team" },
  { key: "graphics", label: "Graphics Team" },
  { key: "sponsors", label: "Sponsor Team" },
  { key: "pr", label: "PR Team" },
];

export const Team = () => {
  const [activeTab, setActiveTab] = useState("core");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#4A5565] text-gray-800 dark:text-gray-100">
      <Navbar />

      <div className="md:text-4xl text-2xl md:my-10 my-5 font-bold text-teal-600 dark:text-white">
        <h1>MEET OUR TEAM</h1>
      </div>

      <div className="flex md:justify-center justify-center px-4 md:px-0 md:space-x-4 space-x-2 bg-[#8FDACF] dark:bg-[#364153] py-4 md:w-[85%] w-[90%] mx-auto rounded-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-semibold rounded-lg transition-colors duration-300 cursor-pointer text-xs md:text-lg ${
              activeTab === tab.key
                ? "bg-teal-500 text-white dark:bg-[#181d26]"
                : "bg-[#8FDACF] dark:bg-gray-700 text-teal-800 dark:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main className="py-8 px-4 md:px-16 md:mb-10 mb-5">
        <h2 className="text-2xl font-bold text-center mb-6">
          {tabs.find((tab) => tab.key === activeTab)?.label}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:mt-8 mt-4">
          {teamData[activeTab].map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};