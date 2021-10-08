import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './fluxo-carrinho/home';
import DetalheProduto from "./fluxo-carrinho/detalheProduto";


export default function Routes (){ 
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
            </Switch>
        </BrowserRouter>
       
    )
} 