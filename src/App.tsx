import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import { theme } from './utils';
import Routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom';
import { ApolloProvider} from '@apollo/client'
import {client} from './GraphQL';
import moment from 'moment';
import 'moment/locale/ru'

function App() {
    moment.locale('ru');

    return (
    <ThemeProvider theme={theme}>
        <Router>
            <ApolloProvider client={client}>
                <Routes/>
            </ApolloProvider>
        </Router>
    </ThemeProvider>
  );
}

export default App;
