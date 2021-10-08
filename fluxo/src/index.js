import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './fluxo-carrinho/home'

import './index.css'

// import DetalheProduto from '../src/fluxo-carrinho/detalheProduto'
// import Carrinho from '../fluxo-carrinho/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact={true} component={Home} />
        {/* <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} /> */}
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);