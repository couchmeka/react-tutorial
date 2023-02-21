import React , { Component } from 'react';
import Table from './Table'









class App extends Component {

state = {
    characters: [{
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      
    }]
}

//create simple function to remove character
removeCharacter =(index) =>{
    const { characters } = this.state

    //we can use set state to update the state.
    this.setState({
        //remove character at passed in index
        //a new list excluding that character
        characters: characters.filter((character, i) => {
return i !== index

        })
    })
}



//you always render a function in a component

    render() {
    
      return (
        <div className="container"> 
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        </div>
      )
     }
    }


    export default App