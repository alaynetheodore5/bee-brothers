import React from 'react';

const Navbar = props => {

    
    return (
    <div id="wrapper">
        <div class="overlay"></div>
        {/* <!-- Sidebar --> */}
        <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <div class="sidebar-header">
                    <div class="sidebar-brand"><a href="#"><img classname="logo" src="/Images/bee-logo.png" alt=""/></a></div>
                </div>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Menu</a></li>
                <li><a href="#events">Fall Specials</a></li>
                <li><a href="#team">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#followme">Follow me</a></li>
            </ul>
        </nav>
        {/* <!-- /#sidebar-wrapper --> */}

        {/* <!-- Page Content --> */}
        <div id="page-content-wrapper">
            <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                <span class="hamb-top"></span>
    			<span class="hamb-middle"></span>
				<span class="hamb-bottom"></span>
            </button>

        </div>
        {/* <!-- /#page-content-wrapper --> */}

    </div>
        )
    }
    
    export default Navbar;