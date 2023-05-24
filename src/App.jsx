import 'bootstrap/dist/css/bootstrap.min.css';
// import {Banner, Hero, UserForm,CardList, NavBar} from './components';
import { Home, NotFoundPage, About, Albums, SongPage } from './pages'
import {Nav } from './layout'
import {Routes, Route} from 'react-router-dom';

import './App.css'

function App() {
 


  return (

    <div className="App">
     
     
     <Routes>

      
       <Route path ='/' element={<Nav/>}>
       
        <Route path="/home"element={<Home />}/>
        <Route path="/about" element={<About />}/>

        <Route path="/Albums">
          <Route index element={<Albums />}/>
          <Route path =':id' element = {<SongPage/>}/>
        </Route>

        <Route path="*" element={<NotFoundPage />}>
      </Route> 
      </Route>
      
    </Routes> 
</div>
  )
}

export default App
