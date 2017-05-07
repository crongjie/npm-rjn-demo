import { exportText, exportFile } from 'rjn-export'


const ExportExample = React.createClass({
	render: function() {
		return (<p> 
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportText('Hello')
                } 
            }>exportText('Hello')</button>
            <br /><br />
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportText('Hello','someFileName.txt')
                } 
            }>exportText('Hello','someFileName.txt')</button>
            <br /><br />
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportFile( 'Hello,World', 'someFileName.csv', 'text/csv')
                } 
            }>exportFile( 'Hello,World', 'someFileName.csv', 'text/csv')</button>
        </p>);
	}
});


export const npmRjnExport = [
{
  "type": "desc",
  "title": "npm-rjn-export",
  "url": "https://github.com/crongjie/npm-rjn-export",
  "text": "A javascript front-end export utility. It can allow browser to download text file on the client side only(without server side)."
},
{
  "title": "Install",
  "language": "",
  "type": "source",
  "code": "npm install --save rjn-export"
},
{
  "title": "Usage",
  "language": "js",
  "type": "source",
  "code": `
import { exportText, exportFile } from 'rjn-export'

//Export and download a file with text 'Hello', the default file name is 'download.txt'
exportText('Hello'); 

//Export and download a file with text 'Hello' with the file name is 'someFileName.txt'
exportText('Hello','someFileName.txt'); 

 //Export a file with specific mime type. In this example, it will export a csv file
exportFile( 'Hello,World', 'someFileName.csv', 'text/csv');
`
},
<ExportExample />
];