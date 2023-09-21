import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';

export const useScroll = () => {

  useEffect(() => {
  	window.scrollTo(0,0)
  }, []);

  return null; 
}
