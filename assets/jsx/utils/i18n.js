import {t} from 'ttag';

const WEEK_DAYS = {
  Monday: t`Monday`,
  Tuesday: t`Tuesday`,
  Wednesday: t`Wednesday`,
  Thursday: t`Thursday`,
  Friday: t`Friday`,
  Saturday: t`Saturday`,
  Sunday: t`Sunday`,
}


export function day(day_) {
  if (WEEK_DAYS.hasOwnProperty(day_)){
    return WEEK_DAYS[day_];
  }
  return day_;
};

export function date(date_){
  return date_;
}

export function time(time_){
  return time_;
}
