import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleClick(){
        console.log(this.state.input)
    }
    render(){
        return (
            <div className="App">
                <input value={this.state.eventValue} />
                <button value="calculate" onClick={this.handleClick} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));