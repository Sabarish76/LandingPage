import image from "../assets/image.png";

const Home = () => {
  return (
    <div className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center lg:ml-36">
          <h1 className="text-center font-bold text-4xl lg:w-[70%] md:text-5xl">
            We earn Your trust and are diligent in your case.
          </h1>
          <p className="my-10 text-center lg:w-[70%]">
            We support businesses through periods of expansion, succession, and
            all other important transitions.
          </p>
          <div className="grid grid-cols-2 justify-between">
            <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm py-2.5 w-40">
              Book Now
            </button>
            <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm py-2.5  w-40">
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="img" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
