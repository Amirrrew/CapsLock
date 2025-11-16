import './App.css';
import Navbar from './components/Navbar';
import routes from './router';
import { useRoutes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';


function App() {
  let Router = useRoutes(routes);
  const [Loading, setLoading] = useState(true)


  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);


  return (
    <>
      {Loading ? (
        <div className='flex justify-center mt-32'>
          <div>
            <div className='loader'></div>
            <div className='text-center mt-5'>
              Loading ...
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='relative' style={{animation: "openApp 1s" ,zIndex: "100"}}>
            <Navbar></Navbar>
          </div>
          <div className='flex justify-end relative' style={{animation: "openApp 2s"}}>
            <div id='display-page' className='w-[100%] display-page transition-all'>
              {Router}
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      )}

    </>
  );
}

export default App;
