import { validateGithubRepo } from "../githubRepoValidation";

describe('validateGithubRepo', () => {
  it('should validate a valid GitHub repository URL', async () => {
    const data = {
      repoUrl: 'https://github.com/myusername/my-repo',
    };

    await expect(validateGithubRepo.validate(data)).resolves.toBe(data);
  });

  it('should reject an invalid GitHub repository URL', async () => {
    const data = {
      repoUrl: 'https://example.com',
    };

    await expect(validateGithubRepo.validate(data)).rejects.toThrow(
      'Please enter a valid GitHub repository URL'
    );
  });

  it('should require a GitHub repository URL', async () => {
    const data = {
      repoUrl: '',
    };

    await expect(validateGithubRepo.validate(data)).rejects.toThrow(
      'GitHub repository URL is required'
    );
  });
});