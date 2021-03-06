import Homepage from "./components/Home/Homepage";
import Seasons from "./components/Seasons/Seasons";
import Season from "./components/Season/Season";
import Epd from "./components/Episode/Epd";
import Characters from './components/Characters/Characters';
import NotFound from './utils/NotFound';

const AllRoutes = [
	{
		path: "/",
		component: Homepage
	},
	{
		path: "/got/seasons",
		component: Seasons
	},
	{
		path: "/got/saison/:id/",
		component: Season
	},
	{
		path: "/got/saison/:saison/episode/:episode",
		component: Epd
	},
	{
		path:'/got/characters',
		component:Characters
	},
	{
		component: NotFound 
	}
];

export default AllRoutes;
