import React from "react";
import { useState } from "react";
import  { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./Search";
import './../App.css';
import * as ROUTES from '../Routes';

export const Nav = ({props}) =>{
    const [open , setOpen] = useState(false);
    

    const openMenu = () =>{
        setOpen(!open);
    };

    return(
        <header>
            <nav>
                <div className="dropList">
                    <Link onClick={openMenu} >
                        <i className="bi bi-list"></i>
                    </Link>
                </div>
                <div className="Logo" style={{ textDecoration: "none", color: "white" }}>
                    <i className="bi bi-gift-fill"></i>
                    <h3>HEAVEN</h3>
                </div>
                <div className="Searchbtn">
                   <SearchBar products={props}></SearchBar>
                </div>
                <div className="icon">
                    <ul>
                        <li>
                            <Link to = '/Sign'><i className="bi bi-person-circle"></i></Link> 
                        </li>
                        <li>
                            <Link to = {ROUTES.HOME}>Home</Link>
                        </li>
                        <li>
                            <Link to= '/About'>About</Link>
                        </li>
                        <li>
                        <Link to={ROUTES.Cart} ><i className="bi bi-bag-fill"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Nav;