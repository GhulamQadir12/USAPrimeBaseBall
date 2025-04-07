import * as Yup from 'yup';

export const validationSchemaSignup = Yup.object().shape({
  firstname: Yup.string().max(40).required(),
  lastname: Yup.string().max(40).required(),
  streetaddress: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  email: Yup.string().required().email("well that's not an email"),
  birthday: Yup.string().required(),
  mobilenumber: Yup.string()
    .matches(/^[0-9]{11}$/, 'Mobile number must be exactly 10 digits')
    .required('A phone number is required'),
  year: Yup.string()
    .required()
    .min(4)
    .matches(/^[0-9]{4}$/, 'Year must be exactly 4 digits'),
  zipcode: Yup.string()
    .required()
    .matches(/^[0-9]{6}$/, 'Zip code must be exactly 6 digits'),
    password: Yup.string().required().min(6, 'pretty sure this will be hacked'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
});

export const validationSchemaEditProfile = Yup.object().shape({
  location: Yup.string().max(40).required(),
  height: Yup.string().max(40).required(),
  weight: Yup.string().max(40).required(),
  ball: Yup.string().max(40).required(),
  man: Yup.string().max(40).required(),
  cap: Yup.string().max(40).required(),
  shirt: Yup.string().max(40).required(),
  short: Yup.string().max(40).required(),
  school: Yup.string().max(40).required(),
  team: Yup.string().max(40).required(),
  baseball: Yup.string().max(40).required(),
  birthday: Yup.string()
    .required()
    .matches(
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
      'Date must be in MM/DD/YYYY format',
    ),
  gmail: Yup.string().required().email("well that's not an email"),
  year: Yup.string().required().min(4),
});

export const validationSchemaLogin = Yup.object().shape({
  gmail: Yup.string().required().email("well that's not an email"),
  password: Yup.string().required().min(8, 'pretty sure this will be hacked').max(10, 'only 10 digit length'),
});

export const validationSchemaEmail = Yup.object().shape({
  gmail: Yup.string().required().email("well that's not an email"),
});

export const validationSchemaPasswords = Yup.object().shape({
  password: Yup.string().required().min(6, 'pretty sure this will be hacked'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const validationSchemaEditProfile2 = Yup.object().shape({
  location: Yup.string().max(40).required(),
  email: Yup.string()
    .required()
    .matches(/^[0-9]{6}$/, 'Zip code must be exactly 6 digits'),
  birthday: Yup.string()
    .required()
    .matches(
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
      'Date must be in MM/DD/YYYY format',
    ),
  gmail: Yup.string().required().email("well that's not an email"),
});