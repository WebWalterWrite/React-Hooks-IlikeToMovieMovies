import React, { Fragment, useState, useEffect, lazy, Suspense } from "react";

// Import fetch api
import { getSeason } from "../../utils/api";

import { Container, Overview, Episode, Img } from "./season.styled";

// Import lazy component
const LazyEpisode = lazy( ()=> import("../Episode/Episode"));

const Season = props => {
	const saison = props.match.params.id; // id saison

	const [episode, setEpisode] = useState([]);
	const [visible, setVisible] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await getSeason(saison);
			setEpisode(result);
		})();
	}, []);


	const toggleModal = (saison, episode_number, overview, name) => {
		
		const data ={
			saison:saison,
			episode:episode_number,
			desc:overview,
			name:name
		}
		setData(data)
		setVisible(true)
		window.scrollTo({ 
			top:0, 
			behavior:"smooth"
		})
	}

	const { episodes, overview } = episode;
	
	return (
		<Fragment>
			{visible && 
			<Suspense fallback={<div>Loading...</div>}>
				<LazyEpisode  data={data} />
			</Suspense>
			}
			<h1>Saisons {saison}</h1>
			<Container>
				<Overview>{overview}</Overview>

				{episodes &&
					episodes.map(({ name, still_path, episode_number: ep, overview }, k) => (
						<Fragment key={k}>
							<Episode>
								<h1>Episode {ep}</h1>

								<Img>
									<h2>{name}</h2>
									<img
										src={`https://image.tmdb.org/t/p/w500/${still_path}`}
										alt={`illustration épisode ${ep}: ${name}`}
									/>
									<div>
									<p onClick={()=>toggleModal(saison, ep, overview, name)}>Découvrir</p>
									</div>
								</Img>

							</Episode>
						</Fragment>
					))}
			</Container>
		</Fragment>
	);
};

export default Season;
