import React from 'react';
import {ngettext, msgid, t, jt} from 'ttag';
import SignupForm from './signup-form';
import {day, date, time} from '../utils/i18n';

const LearningCircleSignup = ({learningCircle, ...props}) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>{t`Sign up for ${learningCircle.course.title}`}</h2>
        <p>{learningCircle.course.caption}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        { learningCircle.image_url &&
            <img class="img-fluid" src={learningCircle.image_url} />
        }
        <p>{learningCircle.description}</p>
        <p>{t`Facilitated by ${learningCircle.facilitator}`}</p>
        <p>{jt`Course materials provided by ${<a href={ learningCircle.course.link } target="_blank">{learningCircle.course.provider}</a>}`}</p>
        <p>
          {learningCircle.weeks <= 1 && 
              jt`This learning circle meets ${<strong>{day(learningCircle.day)}</strong>} from ${<strong>{time(learningCircle.meeting_time)} to {time(learningCircle.end_time)}</strong>} ${learningCircle.time_zone}, ${<strong>{date(learningCircle.start_date)}</strong>}.`
          }
          {learningCircle.weeks > 1 && 
              jt`This learning circle meets every ${<strong>{day(learningCircle.day)}</strong>} from ${<strong>{time(learningCircle.meeting_time)} to {time(learningCircle.end_time)}</strong>} ${learningCircle.time_zone} starting ${<strong>{date(learningCircle.start_date)}</strong>} for ${learningCircle.weeks} weeks.`}
        </p>
        <p>{jt`At ${<a href={learningCircle.venue_website}>{ learningCircle.venue }</a>}, ${learningCircle.venue_address}`}</p>
      </div>

      <div className="col-md-8">
        <SignupForm {...props} />
      </div>
    </div>
  </div>
);

export default LearningCircleSignup;
