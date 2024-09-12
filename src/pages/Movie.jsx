import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillfileEarmarkTextFill
} from 'react-icons/bs'
import MovieCard from "../components/MovieCard"

import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY

const Movie = () => {

    return (
        <div>
            Movie
        </div>
    )
}

export default Movie