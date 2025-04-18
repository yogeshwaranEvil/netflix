import React, { useState } from 'react'


interface formdata {
    movieId: string;
    title: string;
    year: string;
    imdb: string;
    movie: string;
    trailer: string;
    poster: string;
    description: string;
    language: string;
    timing: string;
  }

export default function Movie_add() {
const [formData,setadd] = useState<formdata>();

const onSubmitData = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
     fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/movie/post",{
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
     })

}

return (

          <>
        <form onSubmit={onSubmitData}>
      <label>
        ID:
        <input type="text" name="id" value={formData?.movieId} onChange={(data)=>{setadd({ ...formData!, movieId: data.target.value})}} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" name="title" value={formData?.title} onChange={(data)=>{setadd({ ...formData!, title:data.target.value})}} />
      </label>
      <br />
      <label>
        Year:
        <input type="text" name="year" value={formData?.year} onChange={(data)=>{setadd({ ...formData!,year :data.target.value})} }/>
      </label>
      <br />
      <label>
        IMDb:
        <input type="text" name="imdb" value={formData?.imdb} onChange={(data)=>{setadd({ ...formData!,imdb :data.target.value})} }/>
      </label>
      <br />
      <label>
        Movie:
        <input type="text" name="movie" value={formData?.movie} onChange={(data)=>{setadd({ ...formData!,movie:data.target.value })}} />
      </label>
      <br />
      <label>
        Trailer:
        <input type="text" name="trailer" value={formData?.trailer} onChange={(data)=>{setadd({ ...formData!, trailer:data.target.value})}} />
      </label>
      <br />
      <label>
        Poster:
        <input type="text" name="poster" value={formData?.poster} onChange={(data)=>{setadd({ ...formData!, poster:data.target.value})} }/>
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData?.description} onChange={(data)=>{setadd({ ...formData!,description :data.target.value})}} />
      </label>
      <br />
      <label>
        Language:
        <input type="text" name="language" value={formData?.language} onChange={(data)=>{setadd({ ...formData!,language :data.target.value})}} />
      </label>
      <br />
      <label>
        Timing:
        <input type="text" name="timing" value={formData?.timing} onChange={(data)=>{setadd({ ...formData!, timing:data.target.value})}} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

  </>
  )
}
