import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ResultUI = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<textarea defaultValue={props.result}></textarea>
				</Col>
			</Row>
		</Container>
	);
};

export default ResultUI;
