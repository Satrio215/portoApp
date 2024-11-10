import React from 'react';
import { createRoot } from 'react-dom/client';
import '../../css/styles.css'; 
import Lanyard from '@/Components/Lanyard'; 
import About from '@/Components/About'; 
import Projek from '@/Components/Projek'; 
import Footer from '@/Components/Footer';


const Welcome = ({ pengalamans, projeks }) => {
  return (
    <div>
         <About pengalamans={pengalamans}/>
        <Projek projeks={projeks}/>
        <Footer />
    </div>
   
  );
}

createRoot(document.getElementById('root')).render(<Lanyard />);

export default Welcome;
