import React from 'react';
import Carousel from 'react-bootstrap/Carousel';  

const Header = props => {

    
    
    return (
        <div>

{/* <!-- ======= Landing Picture Section ======= --> */}

<section id="hero">
<div className="hero-container">
<h1>Bee<img src="/Images/bee.png" alt=""/>Brothers</h1>
<h2>Open daily 7AM - 3PM</h2> 
{/* <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down">&10035;</i></a>  */}
<a className="btn btn-dark" href="https://www.toasttab.com/bee-brothers-472-n-weber-road/v3?fbclid=IwAR0f2rQB4Gh__-P3yT7sb-ZyHJZj52bktEj2nwBan6sWcLEBoi1O4UKL-dk#!/order">Order Online</a>
<a href="#carousel" className="btn-scroll scrollto" title="Scroll Down">&nabla;</a>
</div>
</section>

<section id="carousel">  
    <div className='container-fluid' >  
      <Carousel>  
        <Carousel.Item style={{'height':"100vh"}} >  
          <img style={{'height':"100vh"}}  
            className="d-block w-100"  
            src={'assets/img/restaurant.jpg'}  
          />  
        </Carousel.Item  >  
        <Carousel.Item style={{'height':"100vh"}}>  
          <img style={{'height':"100vh"}}  
            className="d-block w-100"  
            src={'assets/img/waffles.jpg'}    
          />  
        </Carousel.Item>  
        <Carousel.Item style={{'height':"100vh"}}>  
          <img style={{'height':"100vh"}}  
            className="d-block w-100"  
            src={'assets/img/french-toast.jpg'}   
          />  
        </Carousel.Item>  
      </Carousel>  
      </div>  
    </section>  
</div>
  )
}

export default Header;