import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import component
import NotFound from '../../utils/NotFound';
import Back from '../Common/Back';

// Import fetch api
import { getSeason } from "../../utils/api";

// import style
import { Container, Overview, Episode, Img } from "./season.styled";

// Import spinner
import Loader from "../../utils/loader";

const Season = ({match, location}) => {
	
	const saison = match.params.id; // id saison
	const [episode, setEpisode] = useState([]);
	
	useEffect(() => {	
		(async () => {
			const result = await getSeason(saison);
			
			setEpisode(result);
		})();
	}, []);

	const { episodes, overview, error } = episode;

	return (
		<Fragment>
			
			{error ?  <NotFound/> : 
			 episodes ? (
				<Container>
					<Back data={{link:'/got/seasons', content:`Retour Saisons`}} />
				<Overview>
					<div>
						<p>GameOfThrones</p>
						<h1>Saison {saison}</h1>
					</div>
					<p>{overview}</p>
						
				</Overview>

				{episodes &&
				episodes.map(
				({ name, still_path, episode_number: ep }, k) => (
					<Fragment key={k}>
						<Episode>
						<h1>Episode {ep}</h1>
						<Img>
							<h2>{name}</h2>
							<img src={`https://image.tmdb.org/t/p/w500/${still_path}`}
								alt={`illustration épisode ${ep}: ${name}`}
							/>
						<div>
						<Link to={{ 
							pathname:`/got/saison/${saison}/episode/${ep}`,
												state: location.pathname
									}}>Decouvrir
							</Link>
						</div>
						</Img>
						</Episode>
					</Fragment>
					))}
				</Container>
			) : <Loader />
			}
		</Fragment>
	);
};

export default Season;
