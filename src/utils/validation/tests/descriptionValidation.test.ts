import { validateDescription } from '../descriptionValidation';

describe('Description validation', () => {
  it('should require bio', async () => {
    const result = await validateDescription.isValid({ bio: '', description: 'Some description' });
    expect(result).toBe(false);
  });

  it('should require bio to be at least 12 characters', async () => {
    const result = await validateDescription.isValid({ bio: 'Too short', description: 'Some description' });
    expect(result).toBe(false);
  });

  it('should require bio to be no longer than 50 characters', async () => {
    const result = await validateDescription.isValid({ bio: 'A really long bio that exceeds the 50 character limit', description: 'Some description' });
    expect(result).toBe(false);
  });

  it('should allow description to be empty', async () => {
    const result = await validateDescription.isValid({ bio: 'A valid project bio', description: '' });
    expect(result).toBe(true);
  });

  it('should allow description to be most 1500 characters', async () => {
    const result1 = await validateDescription.isValid({ bio: 'A valid project bio', description: 'A'.repeat(1500) });
    expect(result1).toBe(true);

    const result2 = await validateDescription.isValid({ bio: 'A valid project bio', description: 'A'.repeat(1501) });
    expect(result2).toBe(false);
  });
});
