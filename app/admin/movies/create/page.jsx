'use client'
import Upload from '@/components/Upload'
import { useState, useEffect } from 'react'
import { useCreateMovieMutation } from '@/redux/api/movie'
import { useFetchGenresQuery } from '@/redux/api/genre'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


  
  // ratings
  // backgroundImage: { type: String },
  // duration: {type: String},
  // youtubeLink : {type: String},
  


  
const CreateMovie = () => {
    const router = useRouter()
    const [showGenres, setShowGenres] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [movieData, setMovieData] = useState({
        name: "",
        year: "",
        detail: "",
        cast: [],
        rating: 0,
        image: null,
        genre: [],
        ratings: "",
        backgroundImage: "",
        duration: '',
        youtubeLink: ''
      });
      const [
        createMovie,
        { isLoading: isCreatingMovie, error: createMovieErrorDetail },
      ] = useCreateMovieMutation();
      const { data: genres, isLoading: isLoadingGenres } = useFetchGenresQuery();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "genre") {
      
          if (!showGenres.includes(value)){
            let newGenre = movieData.genre?.length ? [...movieData.genre, value]: [value]
            setMovieData((prevData) => ({
              ...prevData,
              genre: newGenre,
          }));
          setShowGenres(showGenres.length ?[...showGenres, value]: [value])
          } 
        } else {
          setMovieData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
      const handleCreateMovie = async (e) => {
        e.preventDefault()
        try {
          if (
            !movieData.name ||
            !movieData.year ||
            !movieData.detail ||
            !movieData.cast ||
            !imageUrl.length
            ){
            toast.error("Please fill all required fields");
            return;
          }
    
          
    
          if (imageUrl.length) {
            await createMovie({
              ...movieData,
              image: imageUrl,
            });
    
            router.push("/admin/movies");
    
            setMovieData({
              name: "",
              year: "",
              detail: "",
              cast: [],
              ratings: 0,
              image: null,
              genre: [],
              ratings: "",
              backgroundImage: "",
              duration: '',
              youtubeLink: ''
            });
            setShowGenres([])
            setImageUrl('')
    
            toast.success("Movie Added To Database");
          }
        } catch (error) {
          console.error("Failed to create movie: ", createMovieErrorDetail);
          toast.error(`Failed to create movie: ${createMovieErrorDetail?.message}`);
        }
      };
  return (
    <div className='flex-1 p-5'>
      <h1 className='head-title'>Add Movie</h1>
      <p className='mt-2 mb-5 font-semibold'>ADMIN PANEL</p>
        <div className='bg-gray-900/5 p-3 rounded flex flex-col items-center'>
            {/* <h2 className='text-2xl font-semibold text-center text-red-500 mb-4'>Create New movie</h2> */}
            <form onSubmit={handleCreateMovie} className='flex gap-3 lg:gap-20 w-full' >
                <div className="mb-4 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="username" className='block text-sm mb-2'>Title</label>
                        <input type="text" value={movieData.name}
                    onChange={handleChange} name="name" id="name" className='w-full p-px text-black outline-none border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="year" className='block text-sm  mb-2'>Year</label>
                        <input type="text" value={movieData.year}
                        onChange={handleChange} name="year" id="year" className='w-full text-black outline-none border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="detail" className='block text-sm  mb-2'>
                          Storyline
                          <textarea
                            name="detail"
                            onChange={handleChange}
                            className='w-full text-black outline-none 
                            p-2 border border-gray-300 mt-1 rounded' value={movieData.detail}
                          />
                        </label>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="cast" className='block text-sm  mb-2'>Cast(Comma Separated)</label>
                        <input type="text" value={movieData.cast}
                            onChange={handleChange} name="cast" id="cast" className='w-full text-black outline-none border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label className="block">
                            Genre:
                            <select
                            name="genre"
                            value={movieData.genre}
                            onChange={handleChange}
                            className="border px-2 py-1 w-full"
                            >
                            {isLoadingGenres ? (
                                <option>Loading genres...</option>
                            ) : (
                              <>
                              <option>Genres...</option>
                              {
                                genres.map((genre) => (
                                <option className='text-black' key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                                ))
                              }
                              </>
                              )}
                            </select>
                        </label>
                    </div>
                    <div className='text-transparent'>
                    {showGenres.length && <p className='text-black my-1'>Selected Genres: {showGenres.join(', ')}</p> }
                    </div>
                    
                    <Upload imageUrl={imageUrl} setImageUrl={setImageUrl}/>
                    <div>
                <button type="submit" disabled={isCreatingMovie} 
                className='lg:p-3 p-2 mt-3 bg-green-500 hover:bg-green-300 active:bg-green-900 text-white rounded-md'>Create Movie</button>
              </div>
                    
                </div>
                <div className="mb-4 w-1/2">
                    <div className="mb-4">
                        <label htmlFor="username" className='block text-sm  mb-2'>Background Poster</label>
                        <input type="text" value={movieData.backgroundImage}
                    onChange={handleChange} name="backgroundImage" className='w-full text-black outline-none  border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="year" className='block text-sm  mb-2'>Movie Link</label>
                        <input type="text" value={movieData.youtubeLink}
                        onChange={handleChange} name="youtubeLink" className='w-full text-black outline-none  border border-gray-300 rounded' />
                    </div>
           
                    
                    <div className="mb-4">
                        <label htmlFor="cast" className='block text-sm  mb-2'>Duration</label>
                        <input type="text" value={movieData.duration}
                            onChange={handleChange} name="duration" className='w-full text-black outline-none border border-gray-300 rounded' />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cast" className='block text-sm  mb-2'>Rating</label>
                        <input type="text" value={movieData.ratings}
                            onChange={handleChange} name="ratings" className='w-full text-black outline-none border border-gray-300 rounded' />
                    </div>
                  
                </div>
               
            </form>
            
            
        </div>
        
    </div>
  )
}

export default CreateMovie