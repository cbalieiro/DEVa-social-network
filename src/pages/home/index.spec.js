import { Home } from './index.js';
import {
  timelineTags, postTags, navTags, editPostAtt, updateLikes,
} from './standard.js';

describe('Home', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
});

describe('timelineTags', () => {
  it('should be a function', () => {
    expect(typeof timelineTags).toBe('function');
  });
});

describe('postTags', () => {
  it('should be a function', () => {
    expect(typeof postTags).toBe('function');
  });
});

describe('navTags', () => {
  it('should be a function', () => {
    expect(typeof navTags).toBe('function');
  });
});

describe('editPostAtt', () => {
  it('should be a function', () => {
    expect(typeof editPostAtt).toBe('function');
  });
});

describe('updateLikes', () => {
  it('should be a function', () => {
    expect(typeof updateLikes).toBe('function');
  });
});
