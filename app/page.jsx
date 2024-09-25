'use client'
import Header from '@/Apppages/Home/Header';
import ShowsForYou from '@/Apppages/Home/ShowsForYou';
import Streaming from '@/Apppages/Home/Streaming';
import TvShows from '@/Apppages/Home/TvShows';
import MovieCard from '../Apppages/Home/MovieCard';
import FeaturedMovies from '@/Apppages/Home/FeaturedMovies';
import NewMovies from '@/Apppages/Home/NewMovies';
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
