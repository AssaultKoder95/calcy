import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

const operationsArray = ['+', '-', '*', '/', '%', '='];

class OperationUI extends Component {
	handleClick = e => {
		this.props.handleClick(e.target.value);
	};
	handleClear = e => {
		this.props.handleClearField();
	};
	render() {
		return (
			<Container>
				<Row>
					<Col>
						{operationsArray.map((operation, index) => (
							<Button
								variant="outline-warning"
								onClick={e => this.handleClick(e)}
								key={index}
								value={operation}
							>
								{operation}
							</Button>
						))}
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="outline-success" onClick={e => this.handleClear()}>							
							Clear
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default OperationUI;
