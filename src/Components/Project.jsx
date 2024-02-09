import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Project = () => {
  const projects = [
    {
      title: "Releqai",
      description: "Releqai",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://www.releqai.com/",
    },
    {
      title: "Releqai.in",
      description: "Releqai.in",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://www.releqai.in/",
    },
    {
      title: "ecommerce-project",
      description: "ecommerce-project",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://ecommerce-project-d61ej5ms9-varuns-projects-859429fc.vercel.app",
    },
    {
      title: "spotify-clone",
      description: "spotify-clone",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://spotify-4djukq9jy-varuns-projects-859429fc.vercel.app/",
    },
    {
      title: "movie-list",
      description: "movie-list",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://movie-list-u66o-z77zlfhan-varuns-projects-859429fc.vercel.app",
    },
    {
      title: "network-detector",
      description: "network-detector",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://network-detector-kowjkr085-varuns-projects-859429fc.vercel.app",
    },
    {
      title: "Photo-filter",
      description: "Photo-filter",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://practice-routing-sandy.vercel.app/",
    },
    {
      title: "Youtube-clone",
      description: "Youtube-clone",
      image: "https://logowik.com/content/uploads/images/vercel1868.jpg",
      url: "https://youtube-clone-zeta-olive.vercel.app/",
    },
    // Add more projects as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Project Showcase
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 object-cover w-full h-48 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  />
                  <motion.h2
                    className="text-xl md:text-2xl font-bold mb-2"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p className="text-gray-600" variants={itemVariants}>
                    {project.description}
                  </motion.p>
                  <motion.div className="mt-4" variants={itemVariants}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                      View Project
                    </button>
                  </motion.div>
                  {/* Add more project details or links as needed */}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
