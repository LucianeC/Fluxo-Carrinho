import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function Routes (){ 
    return (
        <BrowserRouter>
            <Switch>
                <Route path= '/' exact = {true} componet = {}/>
            </Switch>
        </BrowserRouter>
       
    )
}