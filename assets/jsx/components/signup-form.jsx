import React from 'react';
import { t } from 'ttag';
import Promise from 'promise-polyfill'
import 'whatwg-fetch'
import InputWithLabel from 'p2pu-input-fields/dist/InputWithLabel';
import CheckboxWithLabel from 'p2pu-input-fields/dist/CheckboxWithLabel';
import SelectWithLabel from './select-with-label';
import SignupSuccess from './signup-success';

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
    this.getError = this.getError.bind(this);

    this.state = {
      submitting: false,
      signupSuccess: false,
      name: '',
      email: '',
      goals: '',
      support: '',
      computer_access: '',
      use_internet: '',
      mobile: '',
      communications_opt_in: false,
      errors: {},
    };
  }

  onSubmit() {
    // Send data to signup API
    let {
      name,
      email,
      goals,
      support,
      computer_access,
      use_internet,
      mobile,
      communications_opt_in
    } = this.state;

    let data = {
      learning_circle: this.props.learningCircle.id,
      name,
      email,
      mobile,
      communications_opt_in,
      signup_questions: {
        goals, support, computer_access, use_internet
      },
    };

    this.setState({...this.state, submitting: true, errors: {} });
    fetch(this.props.signUpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json()).then( json => {
      // check respose code
      if (json.status == 'created'){
        console.log('Signed up!');
        this.setState({...this.state, submitting: false, signupSuccess: true });
        // TODO this.props.onSignupSuccess;
      } else {
        console.log('Error, signup failed: ' + JSON.stringify(json));
        this.setState({...this.state, submitting: false, errors: json.errors });
      }
    }).catch(error => {
      console.log('Error: something went wrong with the request');
      // check error
      this.setState({...this.state, submitting: false });
    });
  }

  getError(fieldName){
    if (this.state.errors && this.state.errors[fieldName]){
      return this.state.errors[fieldName];
    }
    return null;
  }

  onDataChange(data, callback=null) {
    this.setState({...this.state, ...data}, callback);
  }

  render() {
    const {
      name,
      email,
      goals,
      support,
      computer_access,
      use_internet,
      mobile,
      communications_opt_in
    } = this.state;
    return (
      <div className="signup-modal">
        { this.state.signupSuccess && <SignupSuccess learningCircle={this.props.learningCircle} /> }
        { !this.state.signupSuccess &&
            <div>
              <InputWithLabel
                label={t`Name`}
                value={name}
                handleChange={this.onDataChange}
                name={'name'}
                id={'id_name'}
                errorMessage={this.getError('name')}
                required={true}
              />
              <InputWithLabel
                label={t`Email address`}
                value={email}
                handleChange={this.onDataChange}
                name={'email'}
                id={'id_email'}
                errorMessage={this.getError('email')}
                required={true}
              />
              <SelectWithLabel
                label={t`What is your goal for taking this learning circle?`}
                name={'goals'}
                value={goals}
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
                errorMessage={this.state.errors && this.state.errors.signup_questions && this.state.errors.signup_questions[0].support}
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
                errorMessage={this.getError('mobile')}
                required={false}
              />
              <p>{t`Your number won't be shared with other participants.`}</p>
              <CheckboxWithLabel
                label={t`Would you like to receive information about other learning opportunities in the future?`}
                value={communications_opt_in}
                handleChange={this.onDataChange}
                name={'communications_opt_in'}
                id={'id_communications_opt_in'}
                errorMessage={''}
                required={false}
              />
              <button className="p2pu-btn btn-primary" onClick={this.onSubmit}>{t`Sign up`}</button>
            </div>
        }
        <button className="p2pu-btn btn-danger" onClick={this.props.onCancel}>{t`Back to search`}</button>
        { this.state.submitting && 
            <div className="signup-form-submitting" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'rgba(255,255,255, 0.9)', ['text-align']: 'center'}}>
              <div className="spinner-border" role="status">
                <span className="sr-only">{t`Submitting...`}</span>
              </div>
            </div>
        }
      </div>
    );
  }
};

