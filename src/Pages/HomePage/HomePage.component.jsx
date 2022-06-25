import React, { useEffect, useState } from "react";
import NavBarSite from "../../Components/NavBarSite/NavBarSite.component";
import Footer from "../../Components/Footer/Footer.component";
import { ReactComponent as TextDivider } from "../../Assets/text-divider.svg";
import { ReactComponent as IconCoffee } from "../../Assets/icon-coffee-bean.svg";
import { ReactComponent as IconGift } from "../../Assets/icon-gift.svg";
import { ReactComponent as IconTruck } from "../../Assets/icon-truck.svg";
import { ReactComponent as Logo } from "../../Assets/Morning Aroma.svg";
import "./About.styles.scss";
import AboutPic from "../../Assets/pexels1.jpg"



const HomePage = () =>{
    
    const [ click, setClick ] = useState();
    
    useEffect( () => {
        window.scrollTo( { top: 0, behavior: "smooth" } );
    }, [ click ] );
    
    
    return (
        <div className="About-container">
            <div style={ { width: "100%", position: "absolute" } }>
                <div className="about-us-title">
                    <h1>Caffeine Lab</h1>
                    <h1 style={ { fontSize: "1.2rem" } }>Proaspat prajita in Bucuresti</h1>
                </div>
            </div>
            <div className="video-container">
                <img src={ AboutPic } alt="Video"/>
                {/*<video loop="true" muted="muted" autoplay="autoplay" playsinline>*/ }
                {/*	<source src={ video } type="video/mp4"/>*/ }
                {/*</video>*/ }
            </div>
            <NavBarSite/>
            <section className="Why-choose-us-section">
                
                <div>
                    <h1 className="Why-choose-us-title">De ce sa ne alegi pe noi ?</h1>
                </div>
                <div style={ { zIndex: "2", position: "relative" } }>
                    <h5>ATENTIA NOASTRA SE CONCENTREAZA PE UN SINGUR LUCRU, PARCUSUL CAFELEI:</h5>
                    <h5>DE LA FERMA, LA PRAJITORIE, IAR APOI IN CEASCA TA</h5>
                </div>
                <div style={ { zIndex: "2", position: "relative" } }>
                    <TextDivider style={ { width: "400px" } }/>
                </div>
            
            </section>
            <section className="Chose-us-cards-section" style={{ marginBottom: "100px"}}>
                <Logo className="background-logo"/>
                <div className="Choose-us-cards">
                    <div className="Choose-us-cards-div">
                        <div>
                            <IconCoffee style={ { width: "60px" } }/>
                        </div>
                        <h4>Cafea</h4>
                        <p>Pentru noi este foarte important sa alegem si sa-ti oferim cafeaua de cea mai buna calitate.
                            Selectam intotdeauna cu atentie loturile care confirma standardele cafelei de specialitate, ceea ce inseamna ca numai ciresele mature sunt culese manual si ca loturile pot
                            fi usor de urmarit de la origine pana la tine in ceasca.
                        </p>
                    </div>
                    <div className="Choose-us-cards-div">
                        <div>
                            <IconGift style={ { width: "60px" } }/>
                        </div>
                        <h4>Beneficii</h4>
                        <p>Special offers for certain special occasions.Save on your order and get special gifts with them. We try to make each order special and unique with a added bonus of a gift in
                            the form of a gift card or some chocolate. It is the small details such as these that add to the unique nature of these packages.
                            Oferte speciale pentru ocazii speciale. Vrem ca fiecare comanda sa o facem speciala si unica asa ca am adaugat bonusuri in forma de ciocolata de fiecare data cand
                            impachetam o comanda.
                            Credem ca micile detalii conteaza foarte mult si adauga un detaliu simplu dar de neuitat
                        </p>
                    </div>
                    <div className="Choose-us-cards-div">
                        <div>
                            <IconTruck style={ { width: "60px", height: "60px" } }/>
                        </div>
                        <h4>Livrare</h4>
                        <p>Acoperim toate costurile de transport iar livrarea este foarte rapida. Livram in maxim 3 zile din ziua plasarii comenzii, daca aceasta este facuta inainte de 12:00 in
                            zilele lucratoare.</p>
                    </div>
                </div>
            </section>
            
            <Footer prop={ setClick }/>
        
        </div>
    )
}

export default HomePage;
