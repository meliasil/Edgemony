
import { Header } from './components/Header/Header.jsx';
import { Main } from './components/Main/Main.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './App.css'
import { Button } from './components/atoms/Button/Button.jsx';


function App() {

  return (
    <>
    <Header
    brand={{name: 'Edgemony'}}
    className="header"
    cta={<button>Click me!</button>}>

    </Header>
      
      <Main />
      <Footer />
    </>
  )
}

export { App };
