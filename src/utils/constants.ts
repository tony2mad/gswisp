// Global constants
export const SITE_CONFIG = {
  name: 'GSWISP Internet',
  domain: 'gswisp.net',
  phone: {
    primary: '+385985353333',
    secondary: '+385984974777'
  },
  email: {
    primary: 'meridian.arts2@gmail.com',
    secondary: 'info@gswisp.net'
  },
  address: {
    street: 'Popa Frana Biničkog 12',
    city: 'Gospić',
    postalCode: '53000',
    country: 'HR'
  }
} as const;

export const ROUTES = {
  home: '/',
  interestForm: '/interest-form'
} as const;