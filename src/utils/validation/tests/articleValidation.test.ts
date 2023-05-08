import { validateArticle } from '../articleValidation'; // Update the import path to match your project structure
import * as Yup from 'yup';

describe('validateArticle', () => {
  it('should validate a correct article object', async () => {
    const validArticle = {
      title: 'Test title',
      description: 'Test description',
      body: 'Test body',
      externalUrl: 'https://www.example.com',
    };

    await expect(validateArticle.validate(validArticle)).resolves.toEqual(validArticle);
  });

  it('should throw an error when title is missing', async () => {
    const invalidArticle = {
      description: 'Test description',
      body: 'Test body',
      externalUrl: 'https://www.example.com',
    };

    await expect(validateArticle.validate(invalidArticle)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateArticle.validate(invalidArticle)).rejects.toMatchObject({ message: 'Title is required' });
  });

  // Add more tests for other fields and edge cases
});
