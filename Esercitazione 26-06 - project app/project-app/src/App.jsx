
import { Header } from './components/Header/Header.jsx';
import { Main } from './components/Main/Main.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './App.css'
/* import { Button } from './components/atoms/Button/Button.jsx'; */
import posts from "./assets/data.json";


function App() {

  return (
    <>
    <Header
    brand={{name: 'Edgemony'}}
    className="header">

    </Header>
      <Main posts={posts}/>
      <Footer />
    </>
  )
}

export { App };
