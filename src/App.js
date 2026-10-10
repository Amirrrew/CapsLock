import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './styles/main.css'
import routes from './router';
import Navbar from './components/navbar/navbar';
import Page_loading from './components/loadings/Page_loading';
import useScrollReveal from './hooks/scroll_reveal/useScrollReveal';
import Message_toast from './components/toast/toast';
import ToastHost from './components/toast/ToastHost';
import { toast } from './utils/toast';
import ScrollToTop from './utils/ScrollToTop';


function waitForImages() {
  const imgs = Array.from(document.images).filter(img => img.loading !== 'lazy');
  return Promise.all(
    imgs.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(res => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          })
    )
  );
}

function App() {
  const Router = useRoutes(routes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const minTime = new Promise(res => setTimeout(res, 1200));
    const maxTime = new Promise(res => setTimeout(res, 10000));

    const ready = new Promise(res => requestAnimationFrame(() => res()))
      .then(() => Promise.all([document.fonts.ready, waitForImages()]));

    Promise.race([Promise.all([ready, minTime]), maxTime]).then(() => {
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  useScrollReveal(!loading)

  return (
    <>
      <ToastHost />
      <Page_loading done={!loading} />
      <Navbar />
      <ScrollToTop />
      <div className='base-layout'>{Router}</div>
    </>
  );
}

export default App;