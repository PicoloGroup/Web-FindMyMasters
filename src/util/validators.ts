import validator from 'validator';

export const validateEmail = (email: string): string => {
  if (!validator.isEmail(email)) return 'Lütfen geçerli bir email adresi gir.';
  return '';
};

export const validatePassword = (password: string): string => {
  if (!validator.isLength(password, { min: 8 })) return 'Şifren en az 8 karakterden oluşmalı.';
  return '';
};

export const validateUsername = (username: string): string => {
  if (username === '') return 'Lütfen bir kullanıcı adı gir.';
  if (!validator.isLength(username, { max: 32 })) return 'Kullanıcı adı en fazla 32 karakterden oluşabilir.';
  if (!validator.matches(username, RegExp('^[a-zA-Z0-9\\-_]+$'))) return 'Kullanıcı adı sadece harfler, rakamlar, tire (-) ve alt çizgi (_) içerebilir.';
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
