import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import MovieSlice from './MovieSlice'

const store=configureStore({
    reducer:{
        user:userSlice,
        movie: MovieSlice
    }
})

export default store

