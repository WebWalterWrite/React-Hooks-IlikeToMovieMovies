import React from "react";
import { Link } from 'react-router-dom';


// import style
import { Section } from './homepage.styled';
const Homepage = () => (

		<Section>
			<div>
				<div>
					<h1><Link to="/got/seasons">saisons</Link></h1>
				</div>
				<div>
					<h1><Link to="/got/characters">personnages</Link></h1>
				</div>
			</div>
		</Section>
	
);

export default Homepage;
