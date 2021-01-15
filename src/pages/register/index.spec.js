import { Register } from './index.js';
import { newUser } from './standard.js';

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });
});

describe('newUser', () => {
  it('Deve ser uma função', () => {
    expect(typeof newUser).toBe('function');
  });

  it('Deve conter uma estrutura html, respondendo como string', () => {
    const newUserHtml = newUser();
    expect(typeof newUserHtml === 'string').toBe(true);
  });
});
