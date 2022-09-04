import './App.css';
import Fixture from './components/fixtures/Fixture';
import {Route, Switch, BrowserRouter as Routes, useParams} from 'react-router-dom';


function App() {
    return (
    <div className="App">
        <Routes>
            <Switch>
                <Route path="/fixtures/:id">
                    <Fixture />
                </Route>
            </Switch>
        </Routes>
    </div>
  );
}

export default App;
