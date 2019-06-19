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

/* takes time formatted as hh:mm:ss and outputs it without seconds in the locale format */
export function time(time_){
  let [h,m,s] = time_.split(':');
  let now = new Date();
  now.setHours(h);
  now.setMinutes(m);
  return now.toLocaleTimeString('default', {hour: 'numeric', minute:'2-digit'});
}
