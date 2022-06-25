import React, { useState } from "react";
import "./Brazilia.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";


const Brazilia = () => {
	const [ sort, setSort ] = useState();
	
	const handleChange = (event) => {
		setSort( event.target.value )
	}
	return (<section className="Brazilia-section">
		<div className="Brazilia-div">
			<h5 className="info-tag">Home</h5>
			<img alt="arrow" className="arrow-right" src={ arrow }></img>
			<h5 className="Brazilia-Tag">Brazilia</h5>
		</div>
		<header>
			<h1 className="Brazilia-header-name">Brazilia</h1>
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
		<p> Notele de aromă ale cafelei din Brazilia sunt rezultatul procesării umede și uscate utilizate în toate regiunile. Boabele de cafea se caracterizează prin aciditate scăzută, corp neted și
			arome dulci, cu note de ciocolată și note de nuci. Totodata, in unele regiuni se produc boabe de cafea grele, cu corp mediu, fructate și complexe.</p>
		<CardList sorted={ sort } name="Dark Roast"/>
	</section>)
};

export default Brazilia;