import React from 'react'
import x1 from '../../imgs/1.jpg'
import x2 from '../../imgs/2.jpg'
import x3 from '../../imgs/3.jpg'
import x4 from '../../imgs/4.jpg'


export default function Originals() {
    return (<>
  <div id="carouselExampleControls" className="carousel slide position-relative" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    
                    <img src={x1} className="d-block w-100" alt="..." />
                    
                </div>
                
    <div className="carousel-item">
    <img src={x2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={x3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
    <img src={x4} className="d-block w-100" alt="..."/>
    </div> 
  </div>
  
             <div class="aroows position-absolute top-50 d-flex justify-content-between translate-middle-y w-100  ">
        <div class="arrow-right  text-white   ">
            
            <a class=" btn1 p-2  " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon arrow-left" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
              {/* <!-- <i class="fa-solid fa-chevron-right"></i> --> */}
            </a>
          </div>
        <div class="arrow-left  text-white   ">
            <a class="btn2 p-2 r " type="button"         data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon arrow-right" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
              {/* <!-- <i class="fa-solid fa-chevron-left"></i> --> */}

            </a>
        </div>
    </div>
</div>
   
        
        
  </>
    
  )
}
