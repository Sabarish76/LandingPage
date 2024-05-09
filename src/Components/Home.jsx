import image from "../assets/develop.png";
import avatar from "../assets/avatar.jpg";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center lg:ml-36">
          <h1 className="text-center font-bold text-4xl lg:w-[90%] md:text-5xl">
            Zero Worry about Compliance
          </h1>
          <p className="my-10 text-center lg:ml-10 lg:w-[70%]">
            Instant Notifcations on Renewals and Appointment Instant
            Notifications on Updates.
          </p>
          <div className="grid grid-cols-2 justify-between">
            <button className="text-white flex justify-around items-center bg-gray-800 hover:bg-gray-900 font-medium  py-2.5 w-40">
              <p className="bg-gray-800 pl-8">Android</p>
              <IoLogoAndroid className="" />
            </button>
            <button className="text-white flex justify-around items-center bg-gray-800 hover:bg-gray-900 font-medium text-sm py-2.5  w-40">
              <p className="bg-gray-800 pl-8">IOS</p>
              <FaApple className="" />
            </button>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div>
            {" "}
            <img src={image} alt="img" className="max-w-full h-auto lg:ml-48" />
          </div>
          <div className="bg-white rounded-lg shadow-2xl h-fit w-[50%] p-2 flex justify-around absolute left-20 top-56">
            <div>
              <h1 className="font-bold">Md Reappointment</h1>
              <p className="text-xs">destinated to Appointment</p>
              <p className="border-b h-3 border-black w-[100%] "></p>
              <div className="">
                {" "}
                <p className="text-xs mt-1">Status:Re-appointment</p>
                <p className="text-xs mt-1">5/9/2024</p>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={avatar}
                className="w-full h-full object-cover"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
