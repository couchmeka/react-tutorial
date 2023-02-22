import React, { Component } from 'react'

//create two simple function components to make our table more readable

//Table Header Component
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  }


//table body simple component
const TableBody = (props) => {

    
    //iterate over the character data and create a row for each entry of the data.
    //construct rows and use map to iterate over each row and wrapt it in an html table row
    //registered an onclick listener to remove a character
    const rows = props.data.map((row, index) => {

    return (      
    <tr key ={index}>
    <td>{row.name}</td>
    <td>{row.job}</td>
    <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
    </tr>
            )      

    })
    
    return <tbody>{rows}</tbody>

}


// TABLE is our main component
class Table extends Component {
  render() {

    //read props passed in from App.js
const {characterData, removeCharacter} = this.props;

    return (
      <table>
   <TableHeader/>
   <TableBody data = {characterData} removeCharacter = {removeCharacter}
   />
      </table>
    )
  }
}

export default Table