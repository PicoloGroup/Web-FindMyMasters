import validator from 'validator';

export const validateEmail = (email: string): string => {
  if (!validator.isEmail(email)) return 'Please enter a valid email address.';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!validator.isLength(password, { min: 8 })) return 'Your password must be at least 8 characters.';
  return '';
};

export const validateUsername = (username: string): string => {
  if (username === '') return 'Please enter a username.';
  if (!validator.isLength(username, { max: 32 })) return 'Username can be up to a maximum of 32 characters.';
  if (!validator.matches(username, RegExp('^[a-zA-Z0-9\\-_]+$'))) return 'Username can only contain letters, numbers, dashes (-) and underscores (_).';
  return '';
};

export const validateUserFirstName = (firstName: string | null): string => {
  if (firstName === null) return '';
  if (!validator.isLength(firstName, { max: 20 })) return 'Adın en fazla 20 karakterden oluşabilir';
  return '';
};

export const validateUserLastName = (lastName: string | null): string => {
  // this is not a required field
  if (lastName === null) return '';
  if (!validator.isLength(lastName, { max: 40 })) return 'Soy ad(lar)ın en fazla 40 karakterden oluşabilir';
  return '';
};
