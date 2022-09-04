import './App.css';
import Banner from './components/banner/Banner';
import Client from './components/client/Client';
import Design from './components/design/Design';
import Faq from './components/faq/Faq';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Work></Work>
      <Project></Project>
      <Design></Design>
      <Client></Client>
      <Faq></Faq>
    </>
  );
}

export default App;
