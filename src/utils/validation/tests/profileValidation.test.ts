import { validateProfile } from '../profileValidation'; 
import * as Yup from 'yup';

describe('validateProfile', () => {
  it('should validate a correct profile object', async () => {
    const validProfile = {
      bio: 'This is a short bio',
      image: 'https://www.example.com/image.jpg',
    };

    await expect(validateProfile.validate(validProfile)).resolves.toEqual(validProfile);
  });

  it('should throw an error when bio is missing', async () => {
    const invalidProfile = {
      image: 'https://www.example.com/image.jpg',
    };

    await expect(validateProfile.validate(invalidProfile)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateProfile.validate(invalidProfile)).rejects.toMatchObject({ message: 'Short description is required' });
  });

  it('should throw an error when bio is too short', async () => {
    const invalidProfile = {
      bio: 'Too short',
      image: 'https://www.example.com/image.jpg',
    };

    await expect(validateProfile.validate(invalidProfile)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateProfile.validate(invalidProfile)).rejects.toMatchObject({ message: 'Short description must be at least 12 characters' });
  });

  it('should throw an error when bio is too long', async () => {
    const invalidProfile = {
      bio: 'This bio is way too long, exceeding the maximum character limit allowed',
      image: 'https://www.example.com/image.jpg',
    };

    await expect(validateProfile.validate(invalidProfile)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateProfile.validate(invalidProfile)).rejects.toMatchObject({ message: 'Short description cannot be longer than 50 characters' });
  });

  it('should throw an error when image is missing', async () => {
    const invalidProfile = {
      bio: 'This is a short bio',
    };

    await expect(validateProfile.validate(invalidProfile)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateProfile.validate(invalidProfile)).rejects.toMatchObject({ message: 'Image is Required' });
  });

  it('should throw an error when image URL is too short', async () => {
    const invalidProfile = {
      bio: 'This is a short bio',
      image: 'ab',
    };

    await expect(validateProfile.validate(invalidProfile)).rejects.toThrowError(Yup.ValidationError);
    await expect(validateProfile.validate(invalidProfile)).rejects.toMatchObject({ message: 'Image URL must be at least 3 characters long' });
  });

  // Add more tests for other edge cases if needed
});
