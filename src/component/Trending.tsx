import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ParticalEffect from "./ParticalEffect";
import { useNavigate } from "react-router-dom";

interface props {
  movie: movieDescription[];
}
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
export default function Trending({ movie }: props) {
  const navigate = useNavigate();
  const [hoveredTodo, setHoveredTodo] = useState<number | null>(null)

 
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };
  const slideright = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };
  const [over, setover] = useState(false);

  return (
    <>
    <div
    className="  min-h-[180px] text-white font-bold text-3xl px-11  "
    onMouseEnter={() => setover(true)}
    onMouseLeave={() => setover(false)}
  >
      <div className="  px-11 flex flex-row gap-3 items-center min-h-[220px] ">
        <MdArrowBackIos
          className={`text-white size-5 ${
            over ? " " : " hidden" 
          } absolute left-14`}
          onClick={slideLeft}
        ></MdArrowBackIos>
        <div
          id="slider"
          className="flex flex-row gap-3 overflow-x-scroll scroll-smooth scrollbar-hide  items-center min-h-[250px]"
        >
          {movie.map((movie1, index) => (
            <div
              key={index} className=""
             onMouseEnter={()=>setHoveredTodo(index)}
             onMouseLeave={()=>setHoveredTodo(null)}
            >
              {
                  hoveredTodo === index ? <ParticalEffect movie={movie1.movie} title={movie1.title} year={movie1.year} imdb={movie1.imdb} trailer={movie1.trailer} poster={movie1.poster} description={movie1.description} language={movie1.language} Duration={movie1.Duration} rating={movie1.rating} genre={movie1.genre} directed_by={movie1.directed_by} /> : <img
                  src={movie1.poster}
                  className={`rounded-lg min-h-[150px] min-w-[220px] max-w-[220px] max-h-[150px]`}
                  alt={movie1.title}
                  onClick={() => navigate(`/player/${movie1.title}`)}
                  />
                }
             
                
            </div>
          ))}
        </div>
        <MdArrowForwardIos
          className={`text-white size-5   ${
            over ? " " : " hidden"
          } absolute right-14`}
          onClick={slideright}
        ></MdArrowForwardIos>
      </div>
      </div>
    </>
  );
}
