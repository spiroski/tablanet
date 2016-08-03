/**
*
* NewRoundAdder
*
*/

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';
import {
  Grid,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Clearfix,
} from 'react-bootstrap/lib';

import RoundScoreSlider from 'components/RoundScoreSlider';

function NewRoundAdder(props) {
  let player1Ref;
  let player2Ref;

  const getP1Node = () => ReactDOM.findDOMNode(player1Ref);

  const getP2Node = () => ReactDOM.findDOMNode(player2Ref);

  let onAdd = evt => {
    evt.preventDefault();
    const p1Node = getP1Node();
    const p2Node = getP2Node();
    const round = [
      {
        playerID: 0,
        score: parseInt(p1Node.value, 10),
      }, {
        playerID: 1,
        score: parseInt(p2Node.value, 10),
      },
    ];
    p1Node.value = '';
    p2Node.value = '';
    props.onAddRound(round);
  };

  let setScore = (p1, p2) => {
    const p1Node = getP1Node();
    const p2Node = getP2Node();
    p1Node.value = p1;
    p2Node.value = p2;
  };

  return (
    <div className={styles.newRoundAdder}>
      <Form onSubmit={onAdd}>
        <Grid>
          <Row>
            <Col xs={6}>
              <FormControl
                type="text" bsSize="lg" ref={ref => {
                  player1Ref = ref;
                }}
              />
            </Col>
            <Col xs={6}>
              <FormControl
                type="text" bsSize="lg" ref={ref => {
                  player2Ref = ref;
                }}
              />
            </Col>
            <Clearfix />
          </Row>
          <br />
          <RoundScoreSlider onScoreChange={setScore} />
          <br />
          <Row>
            <Col xs={12}>
              <Button block bsStyle="success" bsSize="lg" type="submit">Add Score</Button>
            </Col>
          </Row>
        </Grid>
      </Form>
    </div>
  );
}

export default NewRoundAdder;
