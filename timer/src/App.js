import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        time: 0,
        setTime: 0,
        list: []
      }
  }

  tick() {
    this.setState((prevState) => ({
      time: prevState.time + 1
    }))
  }

  setTimer(e) {
    this.setState({
      setTime: e.target.value * 1000
    })
  }

 
  startTimer() {
    this.interval = setInterval(() => this.tick(), 1000)
    setTimeout(() => {
      alert("Counter finished!")
      clearInterval(this.interval)
      
    }, this.state.setTime+5)

    var setTime = this.state.setTime
    var list = this.state.list
    list.push(setTime)
    localStorage.setItem(list, setTime)
  }
  
  resetTimer(){
    this.setState({
      setTime: 0,
      time: 0
    })
    var time = this.state.time
    time = 0

    var input = document.getElementById("input");
    input.value = ""
  }

  deleteItem(e) {
    var parent = e.target.parentNode
    parent.style.display="none";
  }

  componentWillUnmount(){}

  render() {
    return (
      <div className="App container row">
        <div className="counter col-xs-12 col-md-7">
          <div className="counter-wrapper row">
            <h1 className="col-xs-12"> { this.state.time }<span>seconds</span> </h1>
            <div className="col-xs-12 tarea">
              <input onChange={ (e) => this.setTimer(e) } placeholder="time here in seconds" id="input" />
            </div>
            <div className="col-xs-12 buttons">
              <button className="col-xs-4 btn" onClick={ () => this.startTimer() }><i className="fa fa-play"></i></button>
              <button className="col-xs-4 btn" onClick={ () => this.resetTimer() }><i className="fa fa-repeat"></i></button>
            </div>
          </div>
        </div>
        <div className="list col-xs-12 col-md-4">
          <ul>
            <h1>History: </h1>
            { 
              this.state.list.map((val, i) => (
                <li key={i} className="row"><h3 className="col-xs-10">{ val/1000 } seconds</h3><button className="col-xs-2" onClick={ (e) => this.deleteItem(e) } >Delete</button></li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
