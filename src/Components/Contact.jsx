import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
    // Clear the form after submission
    clearForm();
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
              >
                Submit
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
