import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Details from './pages/Details';
import TopNavBar from './components/TopNavBar';
import login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Compose from './pages/Compose';

const App: React.FC<AppProps> = () => {
	return (
		<BrowserRouter>
			<TopNavBar/>
			<NavBar />
			<main className="container" >
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route exact path="/details/:id" component={Details} />
					<Route exact path="/login" component={login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/compose" component={Compose} />
				</Switch>
			</main>
		</BrowserRouter>
	)
}

interface AppProps { }

export default App;
