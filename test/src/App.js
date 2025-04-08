import  { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import Lenta from './Pages/Lenta'
import Popular from './Pages/Popular';
import Header from './Components/Header';
import Footer from './Components/Footer'
import CreatePost from './Pages/CreatePost'
import Profile from './Pages/Profile';
import Authentication from './Pages/Authentication'

export default function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element = {<Main />} />
        <Route path='/lenta' element = {<Lenta />} />
        <Route path='/popular' element = {<Popular />} />
        <Route path='/create' element = {<CreatePost />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/authentication' element = {<Authentication />} />
      </Routes>

      <Footer />
    </div>
  );
}
