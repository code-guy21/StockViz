import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchPage from './screens/SearchPage/SearchPage';
import ListPage from './screens/ListPage/ListPage';

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path='/' component={SearchPage} />
				<Route path='/list' component={ListPage} />
			</Switch>
		</Router>
	);
};

export default App;
