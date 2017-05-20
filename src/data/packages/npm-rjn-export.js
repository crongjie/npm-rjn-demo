import { exportText, exportFile, exportJson, exportCSV } from 'rjn-export'


const ExportExample = React.createClass({
	render: function() {
		return (<p> 
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportFile( 'Hello,World', 'someFileName.csv', 'text/csv')
                } 
            }>exportFile( 'Hello,World', 'someFileName.csv', 'text/csv')</button>
            <br /><br />
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
                    exportJson({ hello: 'world' , hi: 'world'});
                } 
            }>{ "exportJson({ hello: 'world' , hi: 'world'})" }</button>
            <br /><br />
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportCSV([{A:1, B:1},{A:2, B:2}]); 
                } 
            }>{ "exportCSV([{A:1, B:1},{A:2, B:2}])" }</button>
            <br /><br />
            <button type="button" className="btn btn-primary" onClick = { 
                function() { 
                    exportCSV(
                        [{A:1, B:1},{A:2, B:2}],
                        'someFileName.csv',
                        {
                            columns: {
                                A: 'Column 1',
                                B: 'Column 2'
                            }
                        }
                    ); 
                } 
            }>{ "exportCSV( [{A:1, B:1},{A:2, B:2}],'someFileName.csv', {...})" }</button>
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
import { exportText, exportFile, exportJson, exportCSV } from 'rjn-export'

 //Export a file with specific mime type. In this example, it will export a csv file
exportFile( 'Hello,World', 'someFileName.csv', 'text/csv');

//Export and download a file with text 'Hello', the default file name is 'download.txt'
exportText('Hello'); 

//Export and download a file with text 'Hello' with the file name is 'someFileName.txt'
exportText('Hello','someFileName.txt'); 

//Export and download a json file by object, the default file name is 'download.json'
exportJson({ hello: 'world' , hi: 'world'}); 

//Export and download a json file by object, the file name is 'someFileName.json'
exportJson(['Hello','World'],'someFileName.json'); 

//Export and download a CSV file by Array, the default file name is 'download.csv'
exportCSV([{A:1, B:1},{A:2, B:2}]); 

//Export and download a CSV file by Array, the file name is 'someFileName.csv'
exportCSV([{A:1, B:1},{A:2, B:2}],'someFileName.csv'); 

//Export and download a CSV file by Array, the file name is 'someFileName.csv', with specifiy column headers
exportCSV(
    [{A:1, B:1},{A:2, B:2}],
    'someFileName.csv',
    {
        columns: {
            A: 'Column 1',
            B: 'Column 2'
        }
    }
); 


`
},
<ExportExample />
];