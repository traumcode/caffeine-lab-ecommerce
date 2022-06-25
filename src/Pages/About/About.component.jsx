import React, { useEffect, useState } from "react";
import NavBarSite from "../../Components/NavBarSite/NavBarSite.component";
import Footer from "../../Components/Footer/Footer.component";
import { ReactComponent as TextDivider } from "../../Assets/text-divider.svg";
import { ReactComponent as IconCoffee } from "../../Assets/icon-coffee-bean.svg";
import { ReactComponent as IconGift } from "../../Assets/icon-gift.svg";
import { ReactComponent as IconTruck } from "../../Assets/icon-truck.svg";
import { ReactComponent as Logo } from "../../Assets/Morning Aroma.svg";
import AboutPhoto from "../../Assets/pexels2.jpg"
import "./About.styles.scss";


const About = () => {
	
	const [ click, setClick ] = useState();
	
	useEffect( () => {
		window.scrollTo( { top: 0, behavior: "smooth" } );
	}, [ click ] );
	
	
	return (
		<div className="About-container">
			<NavBarSite/>
			<section className="about-text-container">
				<h1>Caffeine Lab Manifest</h1>
				<p>
					
					Noi suntem Caffeine Lab si am unit sub acelasi acoperis, intregul proces de obtinere al unei cafele de calitate, pentru a va ghida in descoperirea reperelor pentru degustarea,
					prepararea si aprecierea unei cafele exceptionale.
					<br/>
					<br/>
					Va intrebati care este ingredientul nostru secret? Pasiunea este cea care ne-a motivat sa construim si sa impartasim aceasta viziune.
					<br/>
					<br/>
					La Caffeine Lab selectam cu grija originile de cafea, iar pentru fiecare dintre ele testam si alegem un profil de prajire care sa evidentieze diferitele arome naturale pe care
					cafeaua de specialitate le dezvaluie in ceasca fiecaruia. De asemenea observam, testam si apoi recomandam perioada optima de maturare a cafelelor noastre, respectiv numarul de zile
					de la prajire in care boabele isi dezvaluie buchetul cu claritate si eleganta.
					<br/>
					<br/>
					Entuziasmul, aprecierea calitatii, setea de nou, atentia la detalii si determinarea, ne motiveaza sa fim intr-o continua evolutie.
					<br/>
					<br/>
					Scopul nostru este de fi o sursa de cafea proaspat prăjita, superioara, acompaniata de inovatie, experienta si educatie.
				</p>
				<hr style={ { color: "#ffffffeb" } }/>
				<img src={ AboutPhoto } alt="" className="about-photo"/>
				<br/>
			</section>
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
			<section className="Chose-us-cards-section">
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
					<div className="Choose-us-cards-div" style={ { marginBottom: "100px" } }>
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

export default About;
