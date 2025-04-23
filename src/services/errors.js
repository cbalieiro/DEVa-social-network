import { messages } from '../contants/messages.js'

export const errors = (errorCode) => {
  let message = ' ';
  switch (errorCode) {
    case 'auth/email-already-exists':
      message = messages.errors.emailAlreadyInUse;
      break;
    case 'auth/email-already-in-use':
      message = messages.errors.emailAlreadyInUse;
      break;
    case 'auth/user-not-found':
      message = messages.errors.userNotFound;
      break;
    case 'auth/uid-already-exists':
      message = messages.errors.userUIDlAlreadyInUse;
      break;
    case ' The email address is badly formatted. ':
      message = messages.errors.invalidEmail;
      break;
    default:
      message = errorCode;
  }

  return message;
};
