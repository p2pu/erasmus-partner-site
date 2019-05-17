import React, { Fragment, Component, createRef } from 'react';
import {ngettext, msgid, t, jt} from 'ttag';
import SignupForm from './signup-form';
import {day, date, time} from '../utils/i18n';


class LearningCircleSignup extends Component {
  constructor(props) {
    super(props)
    this.form = createRef()
  }

  componentDidMount() {
    this.form.current.scrollIntoView({behavior: "smooth"});
  }

  render() {
    const {learningCircle, ...rest} = this.props;
    const {course} = learningCircle;

    let meetingDay = <strong>{day(learningCircle.day)}</strong>;
    let startDate = <strong>{date(learningCircle.start_date)}</strong>;
    let startTime = <strong>{time(learningCircle.meeting_time)}</strong>;
    let endTime = <strong>{time(learningCircle.end_time)}</strong>;
    let courseProviderLink = <a href={ course.link } target="_blank">{learningCircle.course.provider}</a>;
    let venueLink = <a href={learningCircle.venue_website}>{ learningCircle.venue }</a>;

    return (
      <div className="form-container pt-5" ref={this.form}>
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5">{t`Sign up for ${course.title}`}</h2>
            <p>{course.caption}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            { learningCircle.image_url &&
                <img className="img-fluid" src={learningCircle.image_url} />
            }
            <p>{learningCircle.description}</p>
            <p>{t`Facilitated by ${learningCircle.facilitator}`}</p>
            <p>{jt`Course materials provided by ${courseProviderLink}`}</p>
            <p>
              {learningCircle.weeks <= 1 &&
                  jt`This learning circle meets ${meetingDay} from ${startTime} to ${endTime} ${learningCircle.time_zone}, ${startDate}.`
              }
              {learningCircle.weeks > 1 &&
                  jt`This learning circle meets every ${meetingDay} from ${startTime} to ${endTime} ${learningCircle.time_zone} starting ${startDate} for ${learningCircle.weeks} weeks.`}
                </p>
                <p>{jt`At ${venueLink}, ${learningCircle.venue_address}`}</p>
          </div>

          <div className="col-md-8">
            <SignupForm learningCircle={learningCircle} {...rest} />
          </div>
        </div>
      </div>
    );
  }
}

export default LearningCircleSignup;
