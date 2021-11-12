import validator from 'validator';

export const validateEmail = (email: string): string => {
  if (!validator.isEmail(email)) return 'Please enter a valid email address.';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!validator.isLength(password, { min: 8 })) return 'Password must be at least 8 character.';
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
