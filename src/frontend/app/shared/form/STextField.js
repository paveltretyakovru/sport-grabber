import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

import makeId from 'makeId';

class STextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorText: '',
    }
  }

  render() {
    return(
      <TextField
        { ...this.props }

        value = { this.state.value }
        errorText = {(() => {
          return !this.state.errorText
            ? ''
            : this.state.errorText;
        })()}

        onBlur = { this.handleCheckValid }
        onChange = {
          (event, newValue) =>
          this.handleChangeInput(newValue)
        }
      />
    );
  }

  // ============================ Handlers ====================================
  handleChangeInput(newValue) {
    this.setState({...this.state, value: newValue });
    
    if(this.props.onChangeHandle) {
      this.props.onChangeHandle(this.props.name, newValue);
    }
  }

  // ============ Update state values methods =================================
  setErrorValue(value = '') {
    this.setState({
      ...this.state,
      errorText: value,
    });
  }

  // ================ Additional methods for example a call from parents ======
  getValue() {
    return this.state.value;
  }

  setRandomValue(count = 20) {
    this.handleChangeInput(makeId(count));
  }

  // Simple validation
  validate() {
    if(this.props.required && this.state.value === '') {
      this.setErrorValue('This field required');
      return false;
    } else {
      this.setErrorValue();
      return true;
    }    
  }
}

export default STextField;