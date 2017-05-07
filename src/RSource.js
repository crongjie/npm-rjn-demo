/*
RSource - Source Code Component
*/
import React from 'react'
import ReactDOM from 'react-dom'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

let RSource = React.createClass({
	render: function() {
    let item = this.props.item;

		return (<div><h4>{ (item.title) ? item.title : 'Source Code'}</h4> 
        { 
          (item.text) ?	item.text.split('\r\n').map(function(line, idx){
						return <p key = { 'rdl'+idx }>{line}</p>;
					}) : ''
        }
        <SyntaxHighlighter language={ item.language } style={docco}>{ item.code }</SyntaxHighlighter>
      </div>);
	}
});
  	
export default RSource
