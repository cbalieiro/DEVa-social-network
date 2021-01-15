import { Login } from './index.js';
import { loginTags } from './standard.js';

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });
});

describe('loginTags', () => {
  it('should be a function', () => {
    expect(typeof loginTags).toBe('function');
  });
  it('Deve conter uma estrutura html, respondendo como string', () => {
    const newLoginHtml = loginTags();
    expect(typeof newLoginHtml === 'string').toBe(true);
  });
});
