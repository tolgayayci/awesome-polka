import { validateTeam } from '../teamValidation';

describe('validateTeam', () => {
  test('valid team object passes validation', () => {
    const team = {
      team: [
        {
          name: 'John',
          surname: 'Doe',
          image: 'https://example.com/image.jpg',
          linkedIn: 'https://www.linkedin.com/in/johndoe/',
          role: 'Developer',
        },
      ],
    };
    expect(validateTeam.isValidSync(team)).toBe(true);
  });

  test('team object with missing required field fails validation', () => {
    const team = {
      team: [
        {
          surname: 'Doe',
          image: 'https://example.com/image.jpg',
          linkedIn: 'https://www.linkedin.com/in/johndoe/',
          role: 'Developer',
        },
      ],
    };
    expect(() => validateTeam.validateSync(team)).toThrow('Name is Required');
  });

  test('team object with invalid LinkedIn URL fails validation', () => {
    const team = {
      team: [
        {
          name: 'John',
          surname: 'Doe',
          image: 'https://example.com/image.jpg',
          linkedIn: 'invalid-url',
          role: 'Developer',
        },
      ],
    };
    expect(() => validateTeam.validateSync(team)).toThrow('Not a valid LinkedIn user profile URL');
  });

  test('team object with too few members fails validation', () => {
    const team = {
      team: [],
    };
    expect(() => validateTeam.validateSync(team)).toThrow('Minimum of 1 team member is required.');
  });
});
