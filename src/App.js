import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//COMPONENTES
import Header from './components/Header/Header';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//VIEWS
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';


function App() {

	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
				</Switch>
			</div>
		</Router>	
	);
}

export default App;
