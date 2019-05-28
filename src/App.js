import React, {Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { Robot } from './Robot';


class App extends Component {
  constructor() {
  super()
  this.state = {
    Robot:Robot,
    searchfield:''
  }
}
  onsearchchange = (event) => {
    this.setState({searchfield: event.target.value})

  }
  render() {
    const filterrobots = this.state.Robot.filter(Robot =>{
     return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })
    return(
    <div className = 'tc'>
    <h1> Robo Friends </h1>
    <Searchbox  searchchange={this.onsearchchange}/>
    <CardList Robot={filterrobots}/>

    </div>
  )

  }

}

export default App;
