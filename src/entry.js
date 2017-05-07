

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import _ from 'lodash'


import pages from './data/pages.js'
import RPage from './RPage.js' 

function getBaseUrl() {
	var re = new RegExp(/^.*\//);
	return ""+re.exec(window.location.pathname);
}

let BASE_URL = getBaseUrl();
if (_.endsWith(BASE_URL,'/')) BASE_URL = BASE_URL.substring(0, BASE_URL.length - 1); //remove ending '/'


let RNotfound = React.createClass({
	render: function() {
        return (<h2>{BASE_URL} route not found!</h2>);
	}
});
  	


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path={ BASE_URL +  "/" } component={ RPage }  / >
		<Route path={ BASE_URL +  "/:page" } component={ RPage }  / >
		<Route path="*" component={ RNotfound }  / >
	</Router>
, document.getElementById("main"));
