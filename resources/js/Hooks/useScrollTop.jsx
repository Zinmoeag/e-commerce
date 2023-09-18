import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';

export const useScroll = () => {

  const location = useLocation();
  const [scrollResetDone, setScrollResetDone] = useState(false);

  useEffect(() => {
    const handleScrollReset = () => {
      if (!scrollResetDone) {
        window.scrollTo(0, 0);
        setScrollResetDone(true);
      }
    };

    // Attach the scroll reset event handler when the component mounts
    window.addEventListener('scroll', handleScrollReset);

    // Remove the event listener when the component unmounts or the route changes
    return () => {
      window.removeEventListener('scroll', handleScrollReset);
    };
  }, [location.pathname, scrollResetDone]);

  return null; // You can return null or any other value you prefer
  
}
