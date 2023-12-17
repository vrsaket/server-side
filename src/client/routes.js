 
import Home from "./components/home"; 
import UserList , {loadData} from "./components/userlist";

const Routes = [
    {
        path:"/",
        component: Home,
        exact: true
    },
    {
        loadData,
        path:"/users",
        component: UserList,
        exact: true
    }
]

export default Routes;