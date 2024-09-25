'use client'
import Header from '@/pages/Home/Header';
import ShowsForYou from '@/pages/Home/ShowsForYou';
import Streaming from '@/pages/Home/Streaming';
import TvShows from '@/pages/Home/TvShows';
import MovieCard from '../pages/Home/MovieCard';
import FeaturedMovies from '@/pages/Home/FeaturedMovies';
import NewMovies from '@/pages/Home/NewMovies';
import { useGetAllMoviesQuery,
   useGetNewMoviesQuery, 
   useGetRandomMoviesQuery, useGetSpecificMovieQuery, useGetTopMoviesQuery } from '@/redux/api/movie';

export default function Home() {
  const {data: topMovies} = useGetTopMoviesQuery()
  const {data: randomMovies} = useGetRandomMoviesQuery()
  const {data: newMovies} = useGetNewMoviesQuery()
  const {data} = useGetAllMoviesQuery()
  const tvshows = data?.slice(0, 10)
  const {data: coverPhoto} = useGetSpecificMovieQuery('66e637a8417920bc6a71ce95')
  return (
    <div>
      <Header movies={randomMovies}/>  
      <ShowsForYou movies={newMovies}/>
      <Streaming movies={topMovies}/>
      <MovieCard movie={coverPhoto}/>
      <FeaturedMovies d1={data} d2={randomMovies}/>
      <TvShows movies={tvshows} coverPoster={coverPhoto}/>
      <NewMovies data={randomMovies} movies={data?.slice(0,10)} />
    </div>
    
  );
}
