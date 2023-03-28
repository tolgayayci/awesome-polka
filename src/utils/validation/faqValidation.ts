import * as yup from "yup";

export const validateFaq = yup.object().shape({
    question: yup.string()
      .required('Please enter a question')
      .max(80, 'Question cannot be longer than 80 characters')
      .matches(/^[a-zA-Z0-9\s]+$/, 'Question must only contain letters, numbers, and spaces'),
    answer: yup.string()
      .required('Please provide an answer')
      .max(300, 'Answer cannot be longer than 300 characters')
      .matches(/^[a-zA-Z0-9\s]+$/, 'Answer must only contain letters, numbers, and spaces'),
})