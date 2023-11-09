
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainFile from './Components/MainFile/MainFile';
import ViewPart from './Components/ViewParticularCard/ViewPart';



function App() {
  return (
    <div className="App">
    <Header/>
   <Routes>
     <Route path='/' element={ <MainFile/>} />

     <Route path='/view/:id' element={<ViewPart/>}/>
   </Routes>
    <Footer/>
    </div>
  );
}

export default App;
