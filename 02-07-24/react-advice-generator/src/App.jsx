import './App.css'
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { Footer } from './components/footer/Footer';
import quotes from"./assets/data.json";

function App() {

  return (
    <>
    <Header />
    <Card quotes={quotes} />
    <Footer />
    </>
  ) 
}

export default App
