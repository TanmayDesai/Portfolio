import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import LoadingScreen from './components/LoadingScreen';
import MainScreen from './components/MainScreen';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6170)
  }, [])


  return (
    <>
      { loading=== false? (
          <MainScreen />
        
      ):
      <LoadingScreen />
      }
    </>
  );
}

export default App;
