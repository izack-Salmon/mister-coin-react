
import './App.css';
import './assets/scss/global.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { MinCoinApp } from "./pages/MinCoinApp";
import { ContactPage } from "./pages/ContactPage";
import { ContactDetailsPage } from "./pages/ContactDetailsPage";
import { StatisticPage } from './pages/StatisticPage'
import { AppHeader } from './cmps/AppHeader'
import { ContactEditPage } from './pages/ContactEditPage'
import { SignupPage } from './pages/SignupPage'


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Switch>
            <Route component={ContactEditPage} path='/contact/edit/:id?' />
            <Route component={ContactDetailsPage} path='/contact/:id' />
            <Route component={ContactPage} path='/contact' />
            <Route component={StatisticPage} path='/Statistic' />
            <Route component={SignupPage} path='/signup' />
            <Route component={MinCoinApp} path='/' />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
