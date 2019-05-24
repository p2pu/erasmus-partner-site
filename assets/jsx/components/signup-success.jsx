import React from 'react';
import {t} from 'ttag';

const SignupSuccess = () => (
  <div className="container signup-success">
    <div className="row">
      <div className="col-md-12">
        <p>{t`Thank you for signing up. We've sent you an email introducing you to your facilitator and we'll send you a reminder two days before each meeting.`}</p>
      </div>
      <div className="col-md-12">
        <img src="/assets/img/library-rock.gif"/>
      </div>
    </div>
  </div>
);

export default SignupSuccess;
