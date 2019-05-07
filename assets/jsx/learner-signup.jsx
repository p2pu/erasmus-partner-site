import React from 'react';
import { render } from 'react-dom';

import {Search, BrowseLearningCircles} from "p2pu-search-cards/dist/build-de";

import SignupForm from './components/signup-form';

import "p2pu-search-cards/dist/build.css"
import "p2pu-theme/src/scss/base.scss"
import "p2pu-input-fields/dist/build.css"

const App = () => <SignupForm />;

render(<App />, document.getElementById("learning-circle-signup"));
