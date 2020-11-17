import React from 'react';

const Footer = props => {

    
    
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <img classname="footer-logo" src="/Images/bee-logo.png" alt="logo"/>
                    <h3>Bee Brothers</h3>
                    <p>472 N Weber Rd, Romeoville, IL 60446, USA</p>
                    <p>(815) 660-6358</p>
                    <div className="social-links">
                        <a href="https://github.com/alaynetheodore5" className="github"> </a>
                        <a href="mailto:info@bee-brothers.com" className="gmail"></a>
                        <a href="https://www.linkedin.com/in/astheodore/" className="linkedin"> </a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <u><span><a href="https://alaynetheodore5.github.io/portfolio/">Alayne</a></span></u>. All Rights Reserved
                    </div>
                </div>
            </footer>

            {/* <a href="#" className="back-to-top">Back to top</a> */}
        </div>

    )
}

export default Footer;