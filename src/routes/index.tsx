import React from 'react';
import { SideBar } from '../UI/components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppContainer, ContentContainer } from '../UI/containers';
import { FightersPage, NewsListPage, NewsPage, StatisticPage, WelcomePage } from '../pages';

const Routes: React.FC = () => {
    return (
        <AppContainer>
            <SideBar/>
            <ContentContainer>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>
                    </Route>
                    <Route exact path="/fighters">
                        <FightersPage/>
                    </Route>
                    <Route exact path="/statistic">
                        <StatisticPage/>
                    </Route>
                    <Route exact path="/news">
                        <NewsListPage/>
                    </Route>
                    <Route exact path="/news/:id">
                        <NewsPage/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/fighters"/>
                    </Route>
                </Switch>
                {/*<Redirect to="/fighters"/>*/}
            </ContentContainer>
        </AppContainer>
    );
};

export default Routes;
