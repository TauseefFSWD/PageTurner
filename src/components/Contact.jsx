import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/agdynmwb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div
        name="Contact"
        className="max-w-screen-md mx-auto px-4 md:px-8 my-16 "
      >
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-600 mt-6">
          Contact Me
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Please fill out the form below to get in touch with me.
        </p>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Your Message
            </h2>
            <div className="flex flex-col mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: "Full Name is required" })}
                className="shadow-md border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="name"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="shadow-md border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow-md border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="message"
                placeholder="Enter your message"
                rows="4"
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-5 py-3 hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
