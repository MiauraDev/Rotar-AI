import './App.css';
import 'normalize.css';
import { Header } from './components/Header/Header';
import { Present } from './components/Present/Present';
import { Companies } from './components/Companies/Companies';
import { About } from './components/About/About';
import { Advantage } from './components/Advantage/Advantage';
import { TakeControl } from './components/TakeControl/TakeControl';
import { StartProject } from './components/StartProject/StartProject';
import { Testimoni } from './components/Testimoni/Testimoni';
import { Footer } from './components/Footer/Footer';

function App() {
  

  return (
    <>
      <Header />  
      <Present />
      <Companies />
      <About />
      <Advantage />
      <TakeControl />
      <StartProject />
      <Testimoni />
      <Footer />
    </>
  )
}

export default App

