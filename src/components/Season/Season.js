import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import fetch api
import { getSeason } from "../../utils/api";

// import style
import { Container, Overview, Episode, Img } from "./season.styled";

// Import spinner
import Loader from "../../utils/loader";

const Season = props => {
	const saison = props.match.params.id; // id saison
	const [episode, setEpisode] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await getSeason(saison);
			setEpisode(result);
		})();
	}, []);

	const { episodes, overview } = episode;

	return (
		<Fragment>
			{episodes ? (
				<Container>
				<Overview>
					<div>
						<p>GameOfThrones</p>
						<h1>Saison {saison}</h1>
					</div>
					<p>{overview}</p>
						
				</Overview>

				{episodes &&
				episodes.map(
				({ name, still_path, episode_number: ep, overview, crew }, k) => (
					<Fragment key={k}>
						<Episode>
						<h1>Episode {ep}</h1>
						<Img>
							<h2>{name}</h2>
							<img src={`https://image.tmdb.org/t/p/w500/${still_path}`}
								alt={`illustration épisode ${ep}: ${name}`}
							/>
						<div>
							<Link to={{ pathname:`/got/saison/${saison}/episode/${ep}/${name
												.replace(/\W+/g, "-")
												.toLowerCase()}`,
												state: props.location.pathname
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
