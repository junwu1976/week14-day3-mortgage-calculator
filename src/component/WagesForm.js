import React, {Component} from 'react';
import './WagesForm.css';

class WagesFrom extends Component{

    constructor(props){
        super(props);
        this.state = {
            yourWage: 0,
            partnersWage: 0,
            deposit: 0
        };
        this.handleYourWageChange = this.handleYourWageChange.bind(this);
        this.handlePartnerWageChange = this.handlePartnerWageChange.bind(this);
        this.handleDepositChange = this.handleDepositChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleYourWageChange(evt){
        this.setState({yourWage: evt.target.value});
    }

    handlePartnerWageChange(evt){
        this.setState({partnersWage: evt.target.value});
    }

    handleDepositChange(evt){
        this.setState({deposit: evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.onYourWageSubmit(this.state.yourWage,this.state.partnersWage,this.state.deposit);
    }

    render(){
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="your_wage">Your Wage</label>
                        </div>
                        <div className="col-75">
                        <input type="text" onChange={this.handleYourWageChange}
                             />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="partner_wage">Your Partner's Wage</label>
                        </div>
                        <div className="col-75">
                          <input type="text" onChange={this.handlePartnerWageChange}
                         />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="deposit">Deposit</label>
                        </div>
                        <div className="col-75">
                            <input type="text" onChange={this.handleDepositChange}
                         />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Calculator"/>
                    </div>
                </form>
            </div>
        )
    } 
}

export default WagesFrom;

