import "./ProductList.styles.scss";
import NavBarSite from '../../Components/NavBarSite/NavBarSite.component';
import 'react-awesome-slider/dist/styles.css';
import { Outlet,Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from '../../Components/Footer/Footer.component';
import { useState, useEffect } from "react";



const ProductList = () => {
    const path = useLocation().pathname;
    const location = useLocation();
    const [click, setClick] = useState();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [location]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [click]);
    
    
    return(
        <section className="shop-menu-display">
           
        <NavBarSite />
        <div className="Shop-Menu">
            <ul>
                <Link className="first-row-item" style={{textDecoration:"none" }} to="/shop"><li  style={{fontWeight: (path=== "/shop") ? '800' : "500"}}>HOME</li></Link>
                <Link className="first-row-item"style={{textDecoration:"none"}} to="brazilia"><li  style={{fontWeight: (path=== "/shop/brazilia") ? '800' : "500"}}>BRAZILIA</li> </Link>
                <Link className="first-row-item"style={{textDecoration:"none"}} to="columbia"><li  style={{fontWeight: (path=== "/shop/columbia") ? '800' : "500"}}>COLUMBIA</li></Link>
                <Link className="second-row-item" style={{textDecoration:"none"}} to="ethiopia"><li  className="second-row-item"style={{fontWeight: (path=== "/shop/ethiopia") ? '800' : "500"}}>ETHIOPIA</li></Link>
                <Link className="second-row-item" style={{textDecoration:"none"}} to="guatemala"><li className="second-row-item" style={{fontWeight: (path=== "/shop/guatemala") ? '800' : "500"}}>GUATEMALA</li></Link>
            </ul>
            
        </div>
        <Outlet/>
        <Footer prop={setClick}/>
        </section>
    ) 
};

export default ProductList;