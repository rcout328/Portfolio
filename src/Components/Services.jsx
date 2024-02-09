import Navbar from "./Navbar";

const Services = () => {
  const serviceLogos = [
    "https://tse3.mm.bing.net/th?id=OIP.w7qCpTb-SYPa1MBrV43NXQEHDs&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.Vrn7cT83sIqFs_uwkOcH1wAAAA&pid=Api&P=0&h=180",
    "https://iconape.com/wp-content/files/yb/61798/png/flutter-logo.png",
    "https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
    "https://pngicon.ru/file/uploads/css3.png",
    "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <div className="flex justify-center space-x-4">
            {serviceLogos.map((logo, index) => (
              <div
                key={index}
                className="rounded-full overflow-hidden border-4 border-white transform transition-transform hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Service ${index + 1}`}
                  height={120}
                  width={120}
                />
              </div>
            ))}
          </div>
          {/* Add more sections like Experience, Education, etc., as needed */}
        </div>
      </div>
    </>
  );
};

export default Services;
