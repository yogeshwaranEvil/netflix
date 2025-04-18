import { useEffect, useState, } from "react";
import Trending from './Trending';

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
  interface title
  {
    title:string;
  }

export default function Slider({title}:title) {
    const [movie, setmovie] = useState<movieDescription[]>([]);

  useEffect(() => {
    fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/movie/get/ggg")
      .then((respon) => respon.json())
      .then((data) => {
        setmovie(data);
      });
  }, []);

  return (
    <div >
   <p     className=" text-white font-bold text-3xl px-11 mt-[50px] "
>{title}</p> 
    <Trending  movie={movie}></Trending>
    </div>
  )
}
