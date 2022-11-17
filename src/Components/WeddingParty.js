import React, { Component } from 'react';

function WeddingParty() {
   return (
      <section id="weddingParty">
      
            <div className="weddingParty-content-container ">  
             <h1>Wedding Party</h1>
               <div className = "weddingParty-parents">
                  <div>
                     <h2>Bride's Parents</h2>
                     <p>Paul Yee</p>
                     <p>Janet Yee</p>
                  </div>
                  <div>
                     <h2>Groom's Parents</h2>
                     <p>Yu Chen Lin</p>
                     <p>Michelle Lin</p>
                  </div>   
               </div>
               <div className = "weddingParty-wedding-party">
                  <div>
                     <h2>Bridesmaids</h2>
                     <p>Amy Yee</p>
                     <p>Trang Nguyen</p>
                     <p>Jessica Koch</p>
                     <p>Sheetul Rayeed</p>
                  </div>
                  <div>
                     <h2>Groomsman</h2>
                     <p>fiend friend</p>
                     <p>friend friend</p>
                     <p>friend friend</p>
                     <p>friend friend</p>
                  </div>   
               </div>
            </div>
      
      </section>
   );
  
}

export default WeddingParty;