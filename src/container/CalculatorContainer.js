import React, { Component } from 'react';
import WagesForm from '../component/WagesForm';
import Result from '../component/Result';
import './CalculatorContainer.css';

class CalculatorContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalWage: 0,
            result: 0
        }
        this.handleYourWage = this.handleYourWage.bind(this);
    }

    handleYourWage(yourWage,partnerWage,deposit){
        console.log(yourWage,partnerWage);
        let tempTotal = parseInt(yourWage) + parseInt(partnerWage);
        let tempResult = tempTotal * 3 + parseInt(deposit);
        this.setState({totalWage: tempTotal });
        this.setState({result: tempResult});
    }
  
    render() {
        return (
            <div className="container">
                <h1>Welcome to Jun's Bank</h1>
                <WagesForm
                onYourWageSubmit={this.handleYourWage}/>
                <Result result={this.state.result}/>
            </div>
        );
    }
}

export default CalculatorContainer;