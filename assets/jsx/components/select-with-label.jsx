import React from 'react';
import {default as SWL} from 'p2pu-input-fields/dist/SelectWithLabel';

export default class SelectWithLabel extends React.Component {

  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selected){
    console.log(selected);
    this.props.handleChange(
      {[this.props.name]: selected.value}
    );
  }

  render(){
    let value_search = this.props.options.filter(({value, label}) => value == this.props.value);
    let value = value_search.length==1?value_search[0]:null;
    // TODO clearable isn't passed to react-select widget :(
    return (
        <SWL
          label={this.props.label}
          classes='no-flex'
          options={this.props.options}
          multi={this.props.multi}
          value={value}
          onChange={this.handleSelect}
          placeholder={this.props.placeholder}
          clearable={false}
        />
    );
  }
}

