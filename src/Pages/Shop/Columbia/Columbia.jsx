import React, { useState } from "react";
import "./Columbia.scss";
import "../Brazilia/Brazilia.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";


const Columbia = () => {
	const [ sort, setSort ] = useState();
	
	const handleChange = (event) => {
		setSort( event.target.value )
	}
	return (<section className="Brazilia-section">
		<div className="Brazilia-div">
			<h5 className="info-tag">Home</h5>
			<img alt="arrow" className="arrow-right" src={ arrow }></img>
			<h5 className="Brazilia-Tag">Columbia</h5>
		</div>
		<header>
			<h1 className="Brazilia-header-name">Columbia</h1>
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
		<p>Toate cafelele ies din boabe de cafea specifice si provin din regiuni diferite. Cafeaua din Columbia este una din ele, considerata ca fiind printre producatoarele de cafea de calitate
			inalta, de lux, iar majoritatea boabelor provenite din aceasta regiune sunt din varietatea Arabica. Cafeaua columbiana creste la altitudini mari in sol vulcanic. Cenusa vulcanica
			fertilizeaza plantele de cafea, fiindca e foarte bogata in minerale.</p>
		<CardList sorted={ sort } name="Light Roast"/>
	</section>)
};

export default Columbia;