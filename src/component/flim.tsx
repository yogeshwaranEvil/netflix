import  { useEffect } from "react";
import { useState } from "react";

interface flim1 {
  movie1: string;
}
interface finalflim {
  name: string;
  movie: string;
}
export default function Flim({ movie1 }: flim1) {
  const [flim, setflim] = useState<finalflim>();
  useEffect(() => {
    fetch(`https://my-app.yogeshwaran-r2022lcse.workers.dev/flim/get/${movie1}`)
      .then((respon) => respon.json())
      .then((data) => {
        setflim(data);
      });
  }, []);
  return (
    <div>
      <div>
        <h2>{flim?.name}</h2>
        {flim?.movie}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            `<iframe src=${flim?.movie} loading="lazy" className=" top-0 h-full w-full border-0 \"allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen></iframe> ` ||
            "",
        }}
      ></div>
      {/* <iframe src=${flim?movie} loading="lazy" className=" top-0 h-full w-full border-0 \"allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowFullScreen></iframe>  */}
    </div>
  );
}
