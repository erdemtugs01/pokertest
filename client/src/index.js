import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import axios from 'axios'

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
            axios.post('localhost:8081/home', this.valueToPost)
                .then(function(response){
                    console.log(response);
                }).catch(function(error){
                    console.log(error);
                })
        }
    }
    showResponse(res){
        console.log(res);
    }
    showError(error){
        console.log(error);
    }
    render(){
        return (
            <div className="App">
                <input ref="myInput" />
                <button text="calculate" onClick={this.handleClick} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));