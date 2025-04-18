import logo from "../assets/logo.webp";
import bg from "../assets/mainhome1.jpg";
import sta from "../assets/sta.png";
import play from "../assets/play.svg";
import info from "../assets/info.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";



export default function Netflix() {
  
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className=" bg-black h-full">
      <div
        className=" h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="bg-black h-screen bg-opacity-30 ">
          <nav
            className={`flex flex-row items-start gap-7  w-full fixed ${
              scrolling ? "bg-black" : "bg-transparent"
            } `}
          >
            <img src={logo} className="h-[100px] px-11"></img>
            <button className="text-white mt-10"  onClick={() => navigate(`/netflix`)}>Home</button>
            <button className="text-white mt-10" onClick={() => navigate(`/tvshow`)}>Tv shows</button>
            <button className="text-white mt-10" onClick={() => navigate(`/movies`)}>Movies</button>
            <button className="text-white mt-10" onClick={() => navigate(`/wishList`)}>My List</button>
          </nav>
          <div className="px-11 mt-80">
            <img src={sta} className="h-[125px]  mt-[190px]"></img>
            <div className="flex gap-5">
              <button className=" mt-[60px] bg-gray-200 w-24 h-8 rounded-sm flex items-center justify-center hover:bg-gray-300 ">
                <img className="size-5 mr-2" src={play}></img>Play
              </button>
              <button className=" mt-[60px] bg-black bg-opacity-75 w-40 h-8 rounded-sm flex items-center justify-center hover:bg-black opacity-65 text-white ">
                <img className="size-5 mr-2" src={info}></img>More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <>
      <Slider title="Tranding"></Slider>
      <Slider title="Popular"></Slider>
      <Slider title="Top 10 Today in Tamil"></Slider>
      <Slider title="Exclusive"></Slider>

      </>
    </div>
  );
}
