import React from 'react';
import { render } from 'react-dom';
import {t} from 'ttag';

import SearchProvider from 'p2pu-components/dist/Search/SearchProvider';
import LearningCircleSignup from 'p2pu-components/dist/LearningCircleSignup/LearningCircleSignup';
import SearchBar from 'p2pu-components/dist/Search/SearchBar';
import SearchTags from 'p2pu-components/dist/Search/SearchTags';
import BrowseLearningCircles from 'p2pu-components/dist/LearningCircles/Browse';
import DefaultNoResults from 'p2pu-components/dist/Search/DefaultNoResults';

//import "p2pu-components/dist/build.css"

const CustomSearch = (props) => {
  return (
    <>
      <div className="search-fields row g-0">
        <div className="bg-white shadow col-12">
          <SearchBar 
            placeholder={t`Keyword, organization, facilitator, etc...`}
            {...props} 
          />
        </div>
      </div>
      <SearchTags {...props} />
      <BrowseLearningCircles
        {...props}
        NoResultsComponent={DefaultNoResults}
      />
    </>
  );
}

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
              signUpUrl='https://learningcircles.p2pu.org/api/signup/'
            /> 
        }
        <div className={this.state.selectedLearningCircle?'d-none':''}>
          <SearchProvider
            origin="https://learningcircles.p2pu.org"
            initialState={{team_id: 28}}
            searchSubject={'learningCircles'}
            locale="en"
            defaultImageUrl="/assets/img/p2pu-ogimg-default.jpg"
            onSelectResult={this.handleLearningCircleSelection}
          >
            <CustomSearch />
          </SearchProvider>
        </div>
      </div>
    );
  }
};

render(<App />, document.getElementById("learning-circle-search"));
