import React, { useEffect, useState } from "react"
// import axios from "axios"
import { Grid } from "./Grid"

export const GridContainer = () => {
   const [popularMovies, setPopularMovies] = useState(0)
   // const [loading, setLoading] = useState(true)
   useEffect(() => {
      fetchPopular()
   }, [])

   const fetchPopular = async () => {
      const data = await fetch(
         "https://api.themoviedb.org/3/movie/popular?api_key=14d6161aef0c27f3cf2c7a08d84e97f2"
      )
      const movies = await data.json()
      console.log(movies.results)
      setPopularMovies(movies.results)
   }

   return (
      <>
         <Grid popularMovies={popularMovies} />
      </>
   )
}
