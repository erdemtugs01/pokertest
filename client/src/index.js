import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {default as axios} from 'axios'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            showPostResponse: false
        }
        this.handleClick = this.handleClick.bind(this);
        // this.showPostResponse = this.showPostResponse.bind(this);
    }

    handleClick(){
        this.setState({result: ''})
        if (this.refs.myInput !== null){
            // var input = this.refs.myInput;
            var inputValue = this.refs.myInput.value;
            if (!!!inputValue) {
                this.setState({ result: '' })
            }
            var request = [];
            request = inputValue.split(" ");
            // console.log(request);
            axios.post('http://localhost:8081/home', request)
            .then((response) => {
                const result = response.data.result;
                console.log(result);
                this.setState({ result })
            }).catch(function(error){
                console.log(error);
            })
        } 
    }
    render(){

        return (
            <div className="App">
                <input ref="myInput" />
                <button text="calculate" onClick={this.handleClick}>Calculate</button>
                {this.state.result && <p> {this.state.result}</p>}
            </div>
            
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));