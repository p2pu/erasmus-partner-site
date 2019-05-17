import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseLearningCircles} from "p2pu-search-cards/dist/build-de.js";

import "p2pu-search-cards/dist/build.css"
import "p2pu-input-fields/dist/build.css"

import SignupForm from './components/signup-form';
import LearningCircleSignup from './components/learning-circle-signup';

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleLearningCircleSelection = this.handleLearningCircleSelection.bind(this);
    this.handleSignupDialogClose = this.handleSignupDialogClose.bind(this);
    this.state = {
      selectedLearningCircle: null,
    };
  }

  handleLearningCircleSelection(learningCircle) {
    console.log(`Clicked on ${learningCircle.url}`);
    this.setState({...this.state, selectedLearningCircle: learningCircle});
  }

  handleSignupDialogClose(learningCircle){
    this.setState({...this.state, selectedLearningCircle: null});
  }

  render() {
    return (
      <div>
        {
          this.state.selectedLearningCircle &&
            <LearningCircleSignup
              onCancel={this.handleSignupDialogClose}
              learningCircle={this.state.selectedLearningCircle}
              signUpUrl='https://staging-learningcircles.p2pu.org/api/signup/'
            /> 
        }
        <div className={this.state.selectedLearningCircle?'d-none':''}>
          <Search
            searchSubject={'learningCircles'}
            onSelectResult={this.handleLearningCircleSelection}
            Browse={BrowseLearningCircles}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("learning-circle-search"));
