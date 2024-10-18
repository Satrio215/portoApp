import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/styles.css'; 
import Lanyard from '@/Components/Lanyard'; 
import About from '@/Components/About'; 


const Welcome = () => {
  return (
    <div>
         <About />
    </div>
   
  );
}

createRoot(document.getElementById('root')).render(<Lanyard />);

export default Welcome;
