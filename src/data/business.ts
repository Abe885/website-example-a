// Single source of truth for Ember & Oak's details.
// Every page and component that shows the address, phone, email, or hours
// reads it from here, so a change in this file updates the whole site.

export type DayName =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface DayHours {
  day: DayName;
  // 24-hour "HH:MM" times, the format schema.org expects.
  // Leave both out for a day the café is closed.
  opens?: string;
  closes?: string;
}

// One entry per day. The type annotation makes the editor flag typos and missing fields.
const hours: DayHours[] = [
  { day: 'Monday', opens: '07:00', closes: '18:00' },
  { day: 'Tuesday', opens: '07:00', closes: '18:00' },
  { day: 'Wednesday', opens: '07:00', closes: '18:00' },
  { day: 'Thursday', opens: '07:00', closes: '18:00' },
  { day: 'Friday', opens: '07:00', closes: '18:00' },
  { day: 'Saturday', opens: '08:00', closes: '16:00' },
  { day: 'Sunday', opens: '08:00', closes: '16:00' },
];

export const business = {
  name: 'Ember & Oak Coffee',

  // Fictional address.
  address: {
    street: '418 Linden Street',
    city: 'Portland',
    region: 'OR',
    postalCode: '97214',
    country: 'US',
  },

  // 555-0100 through 555-0199 are reserved for fiction, so this never reaches a real person.
  phone: {
    display: '(503) 555-0142',
    tel: '+15035550142',
  },

  // .example is a reserved domain, so this address never delivers to anyone.
  email: 'hello@emberandoak.example',

  hours,
};
