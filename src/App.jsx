import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Hero from "./components/Hero";
import './App.css'
import CardList from './components/Cards/CardList';
import UserForm from './components/form/UserForm';
function App() {


  return (
    <>
     <Banner/>
     <Hero/>
     <CardList/>
     <UserForm/>
    </>
  )
}

export default App
