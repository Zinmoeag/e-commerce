import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';

export const useScroll = (dependency) => {

  useEffect(() => {
  	window.scrollTo(0,0)
  }, [dependency]);

  return null; 
}
