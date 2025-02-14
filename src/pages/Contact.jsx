import React, { useState } from "react";
import { Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState("instagram");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbz8g0OtVoTiH5r5aZQlBItL2Ojbi8gWoSa3ytdak6Zeh1urs54fZ7Kq562QdKNZ0wU/exec";
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((response) => {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) =>
        toast.error("Error sending message.", { position: "top-center" })
      );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex-grow py-8 px-4 md:px-16">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 cursor-pointer dark:bg-cyan-700 dark:hover:bg-cyan-800"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-8">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mb-4 mt-4">
            <button
              onClick={() => setActiveTab("instagram")}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                activeTab === "instagram"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => setActiveTab("facebook")}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                activeTab === "facebook"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Facebook
            </button>
          </div>

          {activeTab === "instagram" && (
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/lensifiedofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-pink-500 hover:text-pink-700"
              >
                @lensifiedofficial
              </a>
              <a
                href="https://www.instagram.com/lensified_college/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-pink-500 hover:text-pink-700"
              >
                @lensified_college
              </a>
              <a
                href="https://www.instagram.com/lensified_art/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-pink-500 hover:text-pink-700"
              >
                @lensified_art
              </a>
            </div>
          )}

          {activeTab === "facebook" && (
            <div className="space-y-2">
              <a
                href="https://www.facebook.com/lensified.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 hover:text-blue-700"
              >
                Lensified Official
              </a>
              <a
                href="https://www.facebook.com/lensifiedclub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 hover:text-blue-700"
              >
                Lensified College
              </a>
            </div>
          )}

          <p className="flex justify-center items-center space-x-2 mt-4">
            <Mail size={20} className="text-teal-500 dark:text-white" />
            <a
              href="mailto:kolkatabylensified@gmail.com"
              className="text-teal-500 hover:text-teal-700 dark:text-white dark:hover:text-gray-400"
            >
              kolkatabylensified@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
