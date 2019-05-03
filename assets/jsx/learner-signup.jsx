import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseLearningCircles} from "p2pu-search-cards/dist/build-de";

import InputWithLabel from 'p2pu-input-fields/dist/InputWithLabel';
import SelectWithLabel from './components/select-with-label';

import "p2pu-search-cards/dist/build.css"
import "p2pu-theme/src/scss/base.scss"
import "p2pu-input-fields/dist/build.css"

const GOAL_OPTIONS = [
  { value: `To increase my employability`, label: `To increase my employability`},
  { value: `Professional development for my current job`, label:  `Professional development for my current job`},
  { value: `To accompany other educational programs`, label:  `To accompany other educational programs`},
  { value: `Personal interest`, label:  `Personal interest`},
  { value: `Social reasons`, label:  `Social reasons`},
  { value: `For fun / to try something new`, label:  `For fun / to try something new`},
  { value: `Other`, label: `Other`},
];

const COMPUTER_ACCESS_OPTIONS = [
  { value: `Both`, label: `Both`},
  { value: `Just a laptop`, label: `Just a laptop`},
  { value: `Just headphones`, label: `Just headphones`},
  { value: `Neither`, label: `Neither`},
];

const DIGITAL_LITERACY_OPTIONS = [
  { value: '0', label: `Can't do`},
  { value: '1', label: `Need help doing`},
  { value: '2', label: `Can do with difficulty`},
  { value: '3', label: `Can do`},
  { value: '4', label: `Expert (can teach others)`},
]

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      goal: '',
      support: '',
      computer_access: '',
      use_internet: '',
      mobile: '',
      communications_opt_in: '',
    };
  }

  onSubmit() {
  }

  onDataChange(data, callback=null) {
    this.setState({...this.state, ...data}, callback);
  }

  render() {
    const {
      name,
      email,
      goal,
      support,
      computer_access,
      use_internet,
      mobile,
      communications_opt_in
    } = this.state;
    return (
      <div>
        <InputWithLabel
          label={`Name`}
          value={name}
          handleChange={this.onDataChange}
          name={'name'}
          id={'id_name'}
          errorMessage={''}
          required={true}
        />
        <InputWithLabel
          label={`Email address`}
          value={email}
          handleChange={this.onDataChange}
          name={'email'}
          id={'id_email'}
          errorMessage={''}
          required={true}
        />
        <SelectWithLabel
          label={`What is your goal for taking this learning circle?`}
          name={'goal'}
          value={goal}
          options={GOAL_OPTIONS}
          handleChange={this.onDataChange}
          placeholder={`Select one of the following`}
          multi={false}
        />
        <InputWithLabel
          label={`A successful study group requires the support of all of its members. How will you help your peers achieve their goals?`}
          value={support}
          handleChange={this.onDataChange}
          name={'support'}
          id={'id_support'}
          errorMessage={''}
          required={true}
        />
        <SelectWithLabel
          label={`Can you bring a laptop and headphones to the learning circle each week?`}
          classes='no-flex'
          options={COMPUTER_ACCESS_OPTIONS}
          multi={false}
          value={computer_access}
          name='computer_access'
          handleChange={this.onDataChange}
          placeholder={`Select one of the following`}
        />
        <SelectWithLabel
          label={`How comfortable are you using the internet?`}
          classes='no-flex'
          options={DIGITAL_LITERACY_OPTIONS}
          multi={false}
          value={use_internet}
          name='use_internet'
          handleChange={this.onDataChange}
          placeholder={`Select one of the following`}
        />
        <InputWithLabel
          label={`If you’d like to receive weekly text messages reminding you of upcoming learning circle meetings, put your phone number here.`}
          value={mobile}
          handleChange={this.onDataChange}
          name={'mobile'}
          id={'id_mobile'}
          errorMessage={''}
          required={false}
        />
        <p>{`Your number won't be shared with other participants.`}</p>
      </div>
    );
  }
};

const App = () => <SignupForm />;

render(<App />, document.getElementById("learning-circle-signup"));
