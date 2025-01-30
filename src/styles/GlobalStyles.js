import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createGlobalStyle } from 'styled-components';
import BackGround from '../assets/BackgroundImg/BackGround.avif'; 

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "roboto", sans-serif;
    
   
 
  body {
     background-image: url(${BackGround}); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-position: center; 
  margin: 0;
  padding: 0;
  height: 100vh; 
}}   
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 0, 0, 0.582);
  z-index: -1;
}

`


