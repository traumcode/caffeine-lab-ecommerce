import React, { useState } from "react";
import "../Brazilia/Brazilia.styles.scss";
import arrow from "../../../Assets/next.png";
import CardList from "../../../Components/CardList/CardList.component";


const Guatemala = () => {
	const [ sort, setSort ] = useState();
	
	const handleChange = (event) => {
		setSort( event.target.value )
	}
	return (<section className="Brazilia-section">
		<div className="Brazilia-div">
			<h5 className="info-tag">Home</h5>
			<img alt="arrow" className="arrow-right" src={ arrow }></img>
			<h5 className="Brazilia-Tag">Guatemala</h5>
		</div>
		<header>
			<h1 className="Brazilia-header-name">Guatemala</h1>
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
		<p>Cafeaua din Guatemala are un profil aromatic exceptional datorita faptului ca 70% din aceasta se cultiva in ferme de munte, la altitudini mari, unde clima este ideala pentru astfel de
			culturi. Are o textura cremoasa, savoare subtila si blanda, dar totodata complexa si fascinanta. Cu un corp „light” si o aroma dulce-florala, cafeaua din Guatemala te poarta intr-o
			calatorie a gusturilor distincte si delicate de fructe, flori si condimente dulci. Gustului suav si aromat face aceasta cafea ideala de savurat in orice moment al zilei.</p>
		<CardList sorted={ sort } name="Guatemala"/>
	</section>)
};

export default Guatemala;