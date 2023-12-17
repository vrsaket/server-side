
import "babel-polyfill"  // for supporting async js for proper bundling
import 'regenerator-runtime/runtime' // supporting babel-polyfill
import  express from 'express';
import renderer from './helpers/renderer';
import { matchRoutes } from "react-router-config";
import Routes from "./client/routes";

import createStore from './helpers/createStore'; 

const app = express();

// making public directory using outside the world
app.use(express.static("public"));


const port = 3000;

app.get("*", (req, res) => { 
    const store = createStore();

    // some logic to initialize
   const promises =  matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ?  route.loadData(store) : null;
    })

    Promise.all(promises).then(() => {
        // load data in store
        res.send(renderer(req, store))        
    })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})