import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for user's preference
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Save dark mode preference to local storage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <NavBar />
      <motion.div
        className={`h-screen flex justify-center items-center ${
          isDarkMode
            ? "bg-black text-white"
            : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`text-center max-w-2xl mx-auto ${
            isDarkMode ? "dark-mode-text" : ""
          }`}
          variants={textVariants}
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-gray-300"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <h1 className="text-5xl font-extrabold mb-4">Varun Israni</h1>
          <motion.p className="text-lg mb-6" variants={textVariants}>
            Welcome to my portfolio! I am a passionate web developer dedicated
            to crafting exceptional user experiences. Lets turn ideas into
            reality.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            variants={textVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/rcout328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
