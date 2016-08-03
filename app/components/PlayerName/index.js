/**
*
* PlayerName
*
*/

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.css';
import {
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Glyphicon,
} from 'react-bootstrap/lib';

class PlayerName extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.nameRef = undefined;
  }

  onNameClick = () => {
    this.setState({ edit: true });
    this.focusNameNode();
  }

  onChangeName = (evt) => {
    evt.preventDefault();
    this.props.onChangeName(ReactDOM.findDOMNode(this.nameRef).value);
    this.setState({ edit: false });
  }

  focusNameNode = () => {
    if (!this.nameRef) {
      setTimeout(this.focusNameNode, 100);
      return;
    }
    const node = ReactDOM.findDOMNode(this.nameRef);
    node.focus();
    node.select();
  }

  nameDisplay = (name) => <h3 onClick={this.onNameClick}>{name}</h3>

  editForm = (name) => (
    <Form horizontal onSubmit={this.onChangeName}>
      <FormGroup>
        <InputGroup bsSize="lg">
          <FormControl
            type="text" defaultValue={name} ref={(ref) => {
              this.nameRef = ref;
            }}
          />
          <InputGroup.Button>
            <Button bsStyle="success" type="submit">
              <Glyphicon glyph="ok" />
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );

  render() {
    return (
      <div className={styles.playerName}>
        {this.state.edit
          ? this.editForm(this.props.name)
          : this.nameDisplay(this.props.name)}
      </div>
    );
  }
}

PlayerName.propTypes = {
  onChangeName: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default PlayerName;
