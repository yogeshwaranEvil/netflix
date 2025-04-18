import  { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";


interface finalflim {
  name: string;
  movie: string;
}


export default function Palyer() {
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get('movieId');
 
  console.log( movieId)
  const [flim, setFlim] = useState<finalflim>();
  
  useEffect(() => {
    fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/flim/get/" + movieId)
      .then((respon) => respon.json())
      .then((data) => {
        setFlim(data);
      });
  }, []);


  return (
    <div className="flex flex-col bg-black h-screen relative">
         <div className=' h-14 flex-row flex items-center justify-between '> <img src={logo} className="h-[70px]  px-11"></img><div> <button className='text-black mr-4 bg-red-600 px-4 hover:bg-black hover:text-white hover: border-red-600 border-2' > Home</button><button className='text-black mr-20 bg-red-600 px-4 hover:bg-black hover:text-white hover: border-red-600 border-2' > Logout</button></div></div>

    
      <div
          className="flex m-0 justify-center items-start z-90"
          dangerouslySetInnerHTML={{
            __html: `<iframe src=${flim?.movie} loading="lazy" autoPlay="false" allow="accelerometer;gyroscope;encrypted-media;picture-in-picture;" height="590" width="1400" allowfullscreen="true"></iframe>`,
          }}
        ></div>
    </div>
  );
}
