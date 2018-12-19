import React, { Fragment, useEffect, useState,lazy, Suspense } from "react";
import { faChevronLeft, faChevronRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

// Import component
import People from "../Common/People";

// Import fecth API
import { getEpisode, getImgEpisode } from "../../utils/api";

// Import style
import { Container, Img, Icon, Svg } from "./epd.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LazyLoader = lazy(()=> import('../../utils/loader'));

const Epd = ({ match,location}) => {
    const prevUrl = location.state;
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
	const {
		data: { name, overview } = {},
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
	<Suspense fallback={<LazyLoader/>}>
		<Container>
            <div>
            	<Link to={prevUrl}>
				<FontAwesomeIcon icon={faArrowLeft} size="1x"/>
			 	 <span>Saison {num}</span>
				</Link>
            </div>
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
			<Suspense fallback='...loading'>
			<p>Casting Episode</p>
			<People data={guest_stars} />
			</Suspense>
		</Container>
	</Suspense>
	)	
};

export default Epd;
