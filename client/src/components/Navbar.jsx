import React from 'react';
import { Link } from '@reach/router';

const Navbar = props => {

    
    return (
    <div id="wrapper">
        <div class="overlay"></div>
        {/* <!-- Sidebar --> */}
        <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <div class="sidebar-header">
                    <div class="sidebar-brand"><a href="#"><img classname="logo" src="/Images/bee.png" alt="bee"/></a></div>
                </div>
                <li><a href="#hero">Home</a></li>
                <li><a href="https://www.toasttab.com/bee-brothers-472-n-weber-road/v3?fbclid=IwAR0f2rQB4Gh__-P3yT7sb-ZyHJZj52bktEj2nwBan6sWcLEBoi1O4UKL-dk#!/order">Menu</a></li>
                <li><a href="/assets/img/bb-fall-2020-specials.pdf">Fall Specials</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/assets/img/bb-catering-menu.pdf">Catering Menu</a></li>
                <li><Link className="navbtn" to="/contact-us">My Schedule</Link> <a href="/contact-us">Contact</a></li>
                <li><a className="doordash" href="#https://www.doordash.com/store/bee-brothers-romeoville-445572/en-US"><img style={{height: "20px"}} src="/assets/img/doordash-app-logo.png" alt="door dash logo"/> Door Dash</a></li>
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