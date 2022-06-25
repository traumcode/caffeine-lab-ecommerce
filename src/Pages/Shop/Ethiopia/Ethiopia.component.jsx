import React, { useState } from "react";
import "../Brazilia/Brazilia.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";


const Ethiopia = () => {
	const [ sort, setSort ] = useState();
	
	const handleChange = (event) => {
		setSort( event.target.value )
	}
	return (<section className="Brazilia-section">
		<div className="Brazilia-div">
			<h5 className="info-tag">Home</h5>
			<img alt="arrow" className="arrow-right" src={ arrow }></img>
			<h5 className="Brazilia-Tag">Ethiopia</h5>
		</div>
		<header>
			<h1 className="Brazilia-header-name">Ethiopia</h1>
			<div className="div-flex-sort">
				<label for="Sort-By">Sort by</label>
				<select value={ sort } onChange={ handleChange } name="Sort-By-Select" id="select">
					
					<option value="Featured">Featured</option>
					<option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
					<option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
					<option value="Price, high to low">Price, high to low</option>
					<option value="Price, low to high">Price, low to high</option>
				</select>
			</div>
		</header>
		<p>Exista trei regiuni principale de productie a cafelei – Yirgacheffe, Sidamo si Harrar – carora le corespund mai multe sub-regiuni. In functie de conditiile naturale si de clima, fiecare
			regiune produce cafea distincta, evidentiata prin profil aromatic unic. In general, cafeaua etiopiana este apreciata prin prisma complexitatii sale aromatice, cu accente de vin si note
			salbatice distinste.</p>
		<CardList sorted={ sort } name="Espresso"/>
	</section>)
};

export default Ethiopia;