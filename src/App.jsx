import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Hero from "./components/Hero";
import './App.css'
import CardList from './components/Cards/CardList';
import Form from "./components/Form/Form";
function App() {


  return (
    <>
     <Banner/>
     <Hero/>
     <CardList/>
     <Form/>
    </>
  )
}

export default App
