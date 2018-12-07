import Homepage from './components/Home/Homepage';
import Seasons from './components/Seasons/Seasons';
import Season from './components/Season/Season';
const AllRoutes = [
    { 
        path:'/',
        component:Homepage,
    },
    {
        path:'/got/seasons',
        component:Seasons,
 
    },
    {
        path:'/got/saison/:id/',
        component:Season

    }
];

export default AllRoutes;