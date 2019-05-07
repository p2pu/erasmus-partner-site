import React from 'react';
import { t } from 'ttag';
import InputWithLabel from 'p2pu-input-fields/dist/InputWithLabel';
import SelectWithLabel from './select-with-label';

const GOAL_OPTIONS = [
  { value: `To increase my employability`, label: t`To increase my employability`},
  { value: `Professional development for my current job`, label:  t`Professional development for my current job`},
  { value: `To accompany other educational programs`, label:  t`To accompany other educational programs`},
  { value: `Personal interest`, label:  t`Personal interest`},
  { value: `Social reasons`, label:  t`Social reasons`},
  { value: `For fun / to try something new`, label:  t`For fun / to try something new`},
  { value: `Other`, label: t`Other`},
];

const COMPUTER_ACCESS_OPTIONS = [
  { value: `Both`, label: t`Both`},
  { value: `Just a laptop`, label: t`Just a laptop`},
  { value: `Just headphones`, label: t`Just headphones`},
  { value: `Neither`, label: t`Neither`},
];

const DIGITAL_LITERACY_OPTIONS = [
  { value: '0', label: t`Can't do`},
  { value: '1', label: t`Need help doing`},
  { value: '2', label: t`Can do with difficulty`},
  { value: '3', label: t`Can do`},
  { value: '4', label: t`Expert (can teach others)`},
]

export default class SignupForm extends React.Component {

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
      <div className="signup-modal">
        <InputWithLabel
          label={t`Name`}
          value={name}
          handleChange={this.onDataChange}
          name={'name'}
          id={'id_name'}
          errorMessage={''}
          required={true}
        />
        <InputWithLabel
          label={t`Email address`}
          value={email}
          handleChange={this.onDataChange}
          name={'email'}
          id={'id_email'}
          errorMessage={''}
          required={true}
        />
        <SelectWithLabel
          label={t`What is your goal for taking this learning circle?`}
          name={'goal'}
          value={goal}
          options={GOAL_OPTIONS}
          handleChange={this.onDataChange}
          placeholder={t`Select one of the following`}
          multi={false}
        />
        <InputWithLabel
          label={t`A successful study group requires the support of all of its members. How will you help your peers achieve their goals?`}
          value={support}
          handleChange={this.onDataChange}
          name={'support'}
          id={'id_support'}
          errorMessage={''}
          required={true}
        />
        <SelectWithLabel
          label={t`Can you bring a laptop and headphones to the learning circle each week?`}
          classes='no-flex'
          options={COMPUTER_ACCESS_OPTIONS}
          multi={false}
          value={computer_access}
          name='computer_access'
          handleChange={this.onDataChange}
          placeholder={t`Select one of the following`}
        />
        <SelectWithLabel
          label={t`How comfortable are you using the internet?`}
          classes='no-flex'
          options={DIGITAL_LITERACY_OPTIONS}
          multi={false}
          value={use_internet}
          name='use_internet'
          handleChange={this.onDataChange}
          placeholder={t`Select one of the following`}
        />
        <InputWithLabel
          label={t`If you’d like to receive weekly text messages reminding you of upcoming learning circle meetings, put your phone number here.`}
          value={mobile}
          handleChange={this.onDataChange}
          name={'mobile'}
          id={'id_mobile'}
          errorMessage={''}
          required={false}
        />
        <p>{t`Your number won't be shared with other participants.`}</p>
        <button className="p2pu-btn btn-danger" onClick={this.props.onCancel}>{t`Back to search`}</button>
      </div>
    );
  }
};

