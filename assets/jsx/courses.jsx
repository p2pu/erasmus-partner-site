import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseCourses} from "p2pu-search-cards";

import "p2pu-search-cards/dist/build.css"
import "p2pu-input-fields/dist/build.css"


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div>
          <Search
            searchSubject={'courses'}
            locale="en"
            moreInfo={false}
            courseLink={true}
            initialState={{languages: ['fi']}}
            Browse={BrowseCourses}
          />
        </div>
      </div>
    );
  }
};

render(<App />, document.getElementById("course-search"));
