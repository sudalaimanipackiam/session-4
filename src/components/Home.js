import React from 'react';
import profile from '../asset/my.png';
// import my from '../src/asset/my.jpg';
function Home() {
  return (
    
      <div className="bg-cover bg-center h-screen">
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">

          <h3 className="text-5xl md:text-6xl lg:text-7xl mb-4">P.SUDALAIMANI</h3>
          <div><img src={profile} alt="Profile"/></div>
          <br />
          <h3 className="text-3xl md:text-3xl lg:text-4xl mb-4">UX/UI Designer & Frond End Developer</h3>


        </div>
      </div>
  
  );
}
export default Home;
