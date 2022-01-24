import appStyles from './app.module.css';
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getData} from '../redux/ducks/data';

const {container} = appStyles;

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])
  
// dispatch(getData())

  return (
    <main className={container}>
      <Header/>
      <MainSection/>
      <Footer/>
    </main>
  );
}

export default App;
