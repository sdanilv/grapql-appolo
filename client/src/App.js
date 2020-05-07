import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Directors from "./components/Directors/Directors";
import Movies from "./components/Movies/Movies";

import {DIRECTORS_LINK, MOVIES_LINK} from "./Tools/Paths";
import Header from "./components/Header/Header";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
});
const App = () =>
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Header/>
            <Route exact path={[MOVIES_LINK,"/"]} render={() => <Movies/>}/>
            <Route path={DIRECTORS_LINK} render={() => <Directors/>}/>
        </BrowserRouter>
    </ApolloProvider>

export default App;
