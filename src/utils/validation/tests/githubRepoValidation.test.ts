import { validateGithubRepo } from '../githubRepoValidation';

describe('validateGithubRepo', () => {
  it('should validate a correct GitHub repository URL', async () => {
    const validUrl = 'https://github.com/user/repo/';
    const result = await validateGithubRepo.isValid({ repoUrl: validUrl });
    expect(result).toBeTruthy();
  });

  it('should not validate an incorrect GitHub repository URL', async () => {
    const invalidUrl = 'https://notgithub.com/user/repo/';
    const result = await validateGithubRepo.isValid({ repoUrl: invalidUrl });
    expect(result).toBeFalsy();
  });

  it('should not validate a URL without a repository', async () => {
    const invalidUrl = 'https://github.com/user/';
    const result = await validateGithubRepo.isValid({ repoUrl: invalidUrl });
    expect(result).toBeFalsy();
  });

  it('should not validate an empty URL', async () => {
    const emptyUrl = '';
    const result = await validateGithubRepo.isValid({ repoUrl: emptyUrl });
    expect(result).toBeFalsy();
  });

  it('should not validate a missing URL', async () => {
    const result = await validateGithubRepo.isValid({});
    expect(result).toBeFalsy();
  });

  it('should return specific error messages', async () => {
    const invalidUrl = 'https://notgithub.com/user/repo/';
    const emptyUrl = '';

    try {
      await validateGithubRepo.validate({ repoUrl: invalidUrl });
    } catch (error) {
      expect(error.message).toBe(
        'Please enter a valid GitHub repository URL, this should be in the format'
      );
    }

    try {
      await validateGithubRepo.validate({ repoUrl: emptyUrl });
    } catch (error) {
      expect(error.message).toBe('GitHub repository URL is required');
    }
  });
});
