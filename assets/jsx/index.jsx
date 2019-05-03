import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseLearningCircles} from "p2pu-search-cards/dist/build-de";

import "p2pu-search-cards/dist/build.css"
import "p2pu-theme/src/scss/base.scss"
import "p2pu-input-fields/dist/build.css"


class App extends React.Component {

  render() {
    const handleSelectResult = (props) => {
      console.log(props)
    }

    return(
      <Search
        searchSubject={'learningCircles'}
        Browse={BrowseLearningCircles}
      />
    );
  }
}

render(<App />, document.getElementById("learning-circle-search"));
