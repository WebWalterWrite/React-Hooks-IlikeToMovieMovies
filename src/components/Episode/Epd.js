import React, { Fragment, useEffect, useState } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Import component
import People from "../Common/People";
import Back from "../Common/Back";
import NotFound from '../../utils/NotFound';

// Import fecth API
import { getEpisode, getImgEpisode } from "../../utils/api";

// Import style
import { Container, Img, Icon, Svg } from "./epd.styled";


const Epd = ({ match }) => {
	const season = match.params.saison;
	
	// Récuprer paramètres URl
	const num = match.params.saison;
	const episode = match.params.episode;

	// Données
	const [episod, setEpisod] = useState([]);
	const [pos, setPos] = useState(0); // Position des photos
	const [index, setIndex] = useState(1); // index compteur photos et visibilité icon

	// Récupérer les données API
	useEffect(() => {
		(async () => {
			const result = {
				images: await getImgEpisode(season, episode),
				data: await getEpisode(season, episode)
			};
			setEpisod(result);
		})();
	}, []);

	// Desctruring des données
	let {
		data: { name, overview, error } = {},
		data: { guest_stars } = [],
		images = []
	} = episod;

	/*
     caroussel photos
     moveleft = defilement vers la gauche
     moveright = defilement vers la droite
    */
	const moveLeft = () => {
		if (index > 1) return (setIndex(index - 1), setPos(pos + 500));
	};
	const moveRight = () => {
		if (index < images.length) return (setIndex(index + 1), setPos(pos - 500));
	};
	
	return (
		<Fragment>
		{error ? <NotFound/> :
		<Container>
				<Back  data={{link:`/got/saison/${num}`, content:`Saison ${num}`}}/>
			<h1>{name}</h1>
			<Img slide={pos}>
				{images.map(({ file_path }, k) => (
					<img
					key={k}
					src={`https://image.tmdb.org/t/p/w500/${file_path}`}
					alt={`illustration de l'épisode "${name}"`}
					/>
					))}
			</Img>

			<Icon>
				<div>
					<Svg
						onClick={moveLeft}
						icon={faChevronLeft}
						size="2x"
						visible={index === 1 ? "hidden" : "visible"}
						/>
				</div>
				<span>{index}/{images.length}</span>
				<div>
					<Svg
						onClick={moveRight}
						icon={faChevronRight}
						size="2x"
						visible={index === images.length ? "hidden" : "visible"}
						/>
				</div>
			</Icon>
			<p>{overview}</p>
			<p>Casting Episode</p>
			<People data={guest_stars} />
		</Container>
		}	
	</Fragment>
	)	
};

export default Epd;
