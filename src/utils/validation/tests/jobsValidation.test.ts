import { validateJobs } from '../jobsValidation';

describe('validateJobs', () => {
  test('valid jobs object passes validation', () => {
    const jobs = {
      jobs: [
        {
          title: 'Web Developer',
          category: 'Software Development',
          link: 'https://example.com/job',
          remote: 'Yes',
          location: 'New York, NY',
          type: 'Full Time',
        },
      ],
    };
    expect(validateJobs.isValidSync(jobs)).toBe(true);
  });

  test('jobs object with missing required field fails validation', () => {
    const jobs = {
      jobs: [
        {
          category: 'Software Development',
          link: 'https://example.com/job',
          remote: 'Yes',
          location: 'New York, NY',
          type: 'Full Time',
        },
      ],
    };
    expect(() => validateJobs.validateSync(jobs)).toThrow('Title is required');
  });

  test('jobs object with invalid title length fails validation', () => {
    const jobs = {
      jobs: [
        {
          title: 'Web',
          category: 'Software Development',
          link: 'https://example.com/job',
          remote: 'Yes',
          location: 'New York, NY',
          type: 'Full Time',
        },
      ],
    };
    expect(() => validateJobs.validateSync(jobs)).toThrow('Title should be at least 5 characters long');
  });

  test('jobs object with invalid link fails validation', () => {
    const jobs = {
      jobs: [
        {
          title: 'Web Developer',
          category: 'Software Development',
          link: 'invalid-url',
          remote: 'Yes',
          location: 'New York, NY',
          type: 'Full Time',
        },
      ],
    };
    expect(() => validateJobs.validateSync(jobs)).toThrow('Link must be a valid URL');
  });

  test('jobs object with too few job postings fails validation', () => {
    const jobs = {
      jobs: [],
    };
    expect(() => validateJobs.validateSync(jobs)).toThrow('At least one job posting is required');
  });
});
