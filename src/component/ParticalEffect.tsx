import { useNavigate } from "react-router-dom";

import { MdOutlinePlayCircleFilled ,MdThumbDownAlt,MdThumbUpAlt,MdAdd} from "react-icons/md";

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


export default function ParticalEffect({title,movie,poster,genre}:movieDescription) {
  var s: string = "";
  const navigate = useNavigate();

  genre.map((genre1)=>(
    s=s+genre1+"."
    ))
  return (
      <div id="slider" className='  bg-neutral-800 min-h-[240px] min-w-[300px] max-w-[300px] -m-28 mx-0 z-30 max-h-[150px] rounded-md grid-rows-8 grid'>
          <div className=' row-span-5  '><img src={poster} className=' rounded-t-md max-w-[300px] min-w-[300px] max-h-[150px]'></img></div>
          <div className=' row-span-3  text-white  mx-4 flex flex-col gap-2 relative'>
            <p className='  text-lg '>{title} </p>
            <div className='  flex flex-row gap-3'>

            <button><MdOutlinePlayCircleFilled className=' size-7' onClick={() => navigate(`/Before/?movieId=${movie}`)}/>
            </button>
            <button><MdThumbUpAlt className=' size-7'/></button>
            <button><MdThumbDownAlt className=' size-7'/></button>
            <button><MdAdd className=' size-7'/></button>

            </div>
           
              <p className=' text-xs font-normal'>{s}</p>
            
          </div>
          </div>
      
  )
}