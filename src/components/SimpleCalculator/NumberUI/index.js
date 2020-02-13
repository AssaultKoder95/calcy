import React, { Component } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.css';

const NumberPadRows = {
	first: [1, 2, 3],
	second: [4, 5, 6],
	third: [7, 8, 9],
	fourth: [undefined, 0, undefined]
};

class NumberUI extends Component {
	handleClick = e => this.props.handleClick(e.target.value);

	render() {
		return (
			<Container>
				{Object.keys(NumberPadRows).map((key, index) => {
					return (
						<Row key={index}>
							<Col>
								{NumberPadRows[key].map(v => {
									if (v !== undefined) {
										return (
											<Button
												variant="outline-primary"
												onClick={e => this.handleClick(e)}
												key={v}
												value={v}
											>
												{v}
											</Button>
										);
									} else return undefined;
								})}
							</Col>
						</Row>
					);
				})}
			</Container>
		);
	}
}

export default NumberUI;
