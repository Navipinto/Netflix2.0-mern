
import './App.css';
import AuthProvider from './Context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Authenticated from './components/Authenticated';
import SearchData from './components/SearchData';
import MovieDetails from './components/MovieDetails';
import Movie from './components/Movie';
import Series from './components/Series';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup/>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/home" element={
              <Authenticated><Home /></Authenticated>}>
            </Route>
            <Route exact path="/movies" element={
              <Authenticated><Movie /></Authenticated>}>
            </Route>
            <Route exact path="/series" element={
              <Authenticated><Series /></Authenticated>}>
            </Route>
            <Route exact path="/search" element={
              <Authenticated><SearchData /></Authenticated>}>
            </Route>
            <Route exact path="/moviedetails" element={
              <Authenticated><MovieDetails /></Authenticated>}>
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
    <Toaster/>
    </div>
  );
}

export default App;
