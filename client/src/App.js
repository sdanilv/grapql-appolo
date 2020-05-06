import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Directors from "./components/Directors/Directors";
import Movies from "./components/Movies/Movies";

import {DIRECTORS_LINK, MOVIES_LINK} from "./Tools/Paths";
import Header from "./components/Header/Header";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const link = {
    uri: 'http://localhost:3001/graphqls',
};
const client = new ApolloClient({cache, link});
const App = () =>
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Header/>
            <Route exact path={[MOVIES_LINK,"/"]} render={() => <Movies/>}/>
            <Route path={DIRECTORS_LINK} render={() => <Directors/>}/>
        </BrowserRouter>
    </ApolloProvider>

export default App;
