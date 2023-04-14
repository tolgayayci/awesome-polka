import { validateFaq } from '../faqValidation';

describe('validateFaq', () => {
  test('valid faq object passes validation', () => {
    const faq = {
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 30 days of purchase. Please see our return policy for details.',
        },
      ],
    };
    expect(validateFaq.isValidSync(faq)).toBe(true);
  });

  test('faq object with missing required field fails validation', () => {
    const faq = {
      faqs: [
        {
          answer: 'We accept returns within 30 days of purchase. Please see our return policy for details.',
        },
      ],
    };
    expect(() => validateFaq.validateSync(faq)).toThrow('Required');
  });

  test('faq object with invalid question length fails validation', () => {
    const faq = {
      faqs: [
        {
          question: 'What?',
          answer: 'We accept returns within 30 days of purchase. Please see our return policy for details.',
        },
      ],
    };
    expect(() => validateFaq.validateSync(faq)).toThrow('Question must be at least 8 characters long');
  });

  test('faq object with invalid answer length fails validation', () => {
    const faq = {
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'Details.',
        },
      ],
    };
    expect(() => validateFaq.validateSync(faq)).toThrow('Answer must be at least 30 characters long');
  });

  test('faq object with too few questions fails validation', () => {
    const faq = {
      faqs: [],
    };
    expect(() => validateFaq.validateSync(faq)).toThrow('Minimum of 1 questions is required.');
  });
});
