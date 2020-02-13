import React, { Component } from 'react';
import ResultUI from './ResultUI';
import NumberUI from './NumberUI';
import OperationUI from './OperationUI';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = { result: '' };
	}

	handleNumberPadClick = value => {
        const updatedResult = this.state.result + value;
        this.setState({ result: updatedResult });
    };

	handleOperationPadClick = value => {        
        if(value === '=') {
            const result = eval(this.state.result).toString();
            this.setState({ result });
            return;
        }

        const updatedResult = this.state.result + value;
        this.setState({ result: updatedResult });
    };
    
    handleClearField = () => {
        this.setState({ result: '' });
    };

	render() {
		return (
			<div>
				<NumberUI handleClick={this.handleNumberPadClick} />
				<OperationUI handleClick={this.handleOperationPadClick} handleClearField={this.handleClearField} />
				<ResultUI result={this.state.result}/>
			</div>
		);
	}
}

export default Calculator;
