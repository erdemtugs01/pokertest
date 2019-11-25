import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        // var valueToPost = '';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if (this.refs.myInput !== null){
            var input = this.refs.myInput;
            var inputValue = input.value;
            this.valueToPost = inputValue;
            console.log(this.valueToPost);
        }
    }
    render(){
        return (
            <div className="App">
                <input ref="myInput" />
                <button value="calculate" onClick={this.handleClick} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));