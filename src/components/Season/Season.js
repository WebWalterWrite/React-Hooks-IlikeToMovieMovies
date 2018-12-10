import React, { Fragment, useState, useEffect } from "react";

import { getSeason } from "../../utils/api";

import { Container, Overview, Episode, Img } from "./season.styled";

const Season = props => {
	const saison = props.match.params.id; // id saison

    const [episode, setEpisode] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await getSeason(saison);
			console.log(result)
            setEpisode(result);
      
		})();
	}, []);

	const { episodes, overview } = episode;

	return (
		<Fragment>
			<h1>Saisons {saison }</h1>
			<Container>
				<Overview>{overview}</Overview>

				{episodes &&
					episodes.map(({ name, still_path, episode_number }, k) => (
						<Fragment key={k}>
							
							<Episode>
							 <h1>Episode {episode_number}</h1>
							
								<Img>
									<h2>{name}</h2>
									<img
										src={`https://image.tmdb.org/t/p/w500/${still_path}`}
										alt="illustration épisode"
									/>
									<div><p>Découvrir</p></div>
								</Img>
								
							</Episode>
						
						</Fragment>
					))}
			</Container>
		</Fragment>
	);
};

export default Season;
