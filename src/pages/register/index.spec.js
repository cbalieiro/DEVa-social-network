import { Register } from './index.js';
import { newUser } from './standard.js';

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });
});

describe('newUser', () => {
  it('should be a function', () => {
    expect(typeof newUser).toBe('function');
  });
});
