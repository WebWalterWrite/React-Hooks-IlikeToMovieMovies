import React, { Fragment, useState, useEffect } from "react";

import { getSeason, getImgEpisode } from "../../utils/api";

import { Container, Overview, Episode } from "./season.styled";

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
			<h1>Saisons {saison}</h1>
			<Container>
				<Overview>{overview}</Overview>

				{episodes &&
					episodes.map(({ name, still_path, overview, episode_number }, k) => (
						<Fragment key={k}>
							<h2>Episode {episode_number}</h2>
							<Episode>
								<h2>{name}</h2>
								<div>
									<img
										src={`https://image.tmdb.org/t/p/w500/${still_path}`}
										alt="illustration épisode"
									/>
									<p>{overview}</p>
								</div>
							</Episode>
						</Fragment>
					))}
			</Container>
		</Fragment>
	);
};

export default Season;
