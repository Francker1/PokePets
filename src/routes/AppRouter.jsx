import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { DogList } from "../components/dogs/DogList"
import { DogScreen } from '../components/dogs/DogScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ DogList }/>
                <Route exact path="/dog/:dogId" component={ DogScreen }/>

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
