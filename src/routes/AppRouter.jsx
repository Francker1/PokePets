import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { DogList } from "../components/dogs/DogList"
import { DogScreen } from '../components/dogs/DogScreen';
import { Header } from '../components/header/Header';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ Header }/>
                <Route exact path="/dogs/" component={ DogList } />
                <Route exact path="/dogs/:dogId" component={ DogScreen }/>

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
