import NavBar from "./Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Varun Israni</h1>
          <p className="text-lg mb-6">
            Welcome to my portfolio! Im a passionate web developer dedicated to
            crafting exceptional user experiences. Lets turn ideas into reality.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/varun-israni-a21022261/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rcout328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
