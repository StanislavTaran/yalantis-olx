import moment from 'moment';

export const getDateString = iso => moment(iso, moment.ISO_8601).format('YYYY-MM-DD');
