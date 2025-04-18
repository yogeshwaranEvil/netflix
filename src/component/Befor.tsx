import {useState , useEffect}from 'react'
import play from "../assets/play.svg";
import { useNavigate ,useLocation,} from "react-router-dom";
import Slider from './Slider';
import logo from "../assets/logo.webp";


interface movieDescription {
  title: string;
  year: string;
  imdb: string;
  movie: string;
  trailer: string;
  poster: string;
  description: string;
  language: string;
  Duration: string;
  rating: string;
  genre: string[];
  directed_by: string;
}

export default function Befor() {
  const navigate = useNavigate();
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('movieId');
  const [movie, setmovie] = useState<movieDescription[]>([]);

  useEffect(() => {
    fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/movie/get/ggg")
      .then((respon) => respon.json())
      .then((data) => {
        setmovie(data);
      });
  }, []);
 const poster :string  = movie.find(movie1 => movie1.movie === movieId)?.poster || '';

  return (
    <div className='bg-black h-full'>
      <div className=' h-14 flex-row flex items-center justify-between '> <img src={logo} className="h-[70px]  px-11"></img><div> <button className='text-black mr-4 bg-red-600 px-4 hover:bg-black hover:text-white hover: border-red-600 border-2' > Home</button><button className='text-black mr-20 bg-red-600 px-4 hover:bg-black hover:text-white hover: border-red-600 border-2' > Logout</button></div></div>
       <div
        className=" h-screen flex flex-col bg-cover bg-center relative"
        style={{ backgroundImage: `url(${poster})` }}>
          <div className=" h-screen bg-gradient-to-r from-black from-10% opacity-90 to-transparent ">

        <button className="text-black  bg-red-600 hover:bg-black hover:text-white hover: border-red-600 border-2 h-7 w-24 flex items-center justify-center absolute bottom-5 inset-x-[650px]"  onClick={() => navigate(`/player/?movieId=${movieId}`)}>
                <img className="size-5 mr-2" src={play}></img>Play
              </button>
          </div>
     </div>
     
     <Slider title="Recommended"></Slider>
      <Slider title="Most Viewed"></Slider>
      <Slider title="Exclusive"></Slider>
    </div>
  )
}
