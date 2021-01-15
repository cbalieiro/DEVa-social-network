import { currentUser, collectionPosts, createPost, editPostDB, updateLike, updateDislike, deletePostDB, validation, loginGoogle, loginGitHub, persist, createUser, logOut } from './index';
import { errors } from './errors'

describe('errors', () => {
  it('should be a function', () => {
    expect(typeof errors).toBe('function');
  });
});

describe('currentUser', () => {
  it('should be a function', () => {
    expect(typeof currentUser).toBe('function');
  });
});

describe('collectionPosts', () => {
  it('should be a function', () => {
    expect(typeof collectionPosts).toBe('function');
  });
});

describe('createPost', () => {
  it('should be a function', () => {
    expect(typeof createPost).toBe('function');
  });
});

describe('editPostDB', () => {
  it('should be a function', () => {
    expect(typeof editPostDB).toBe('function');
  });
});

describe('updateLike', () => {
  it('should be a function', () => {
    expect(typeof updateLike).toBe('function');
  });
});

describe('updateDislike', () => {
  it('should be a function', () => {
    expect(typeof updateDislike).toBe('function');
  });
});

describe('deletePostDB', () => {
  it('should be a function', () => {
    expect(typeof deletePostDB).toBe('function');
  });
});

describe('validation', () => {
  it('should be a function', () => {
    expect(typeof validation).toBe('function');
  });
});

describe('loginGoogle', () => {
  it('should be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('loginGitHub', () => {
  it('should be a function', () => {
    expect(typeof loginGitHub).toBe('function');
  });
});

describe('persist', () => {
  it('should be a function', () => {
    expect(typeof persist).toBe('function');
  });
});

describe('createUser', () => {
  it('should be a function', () => {
    expect(typeof createUser).toBe('function');
  });
});

describe('logOut', () => {
  it('should be a function', () => {
    expect(typeof logOut).toBe('function');
  });
});