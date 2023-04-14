import * as Yup from "yup";

export const validateFaq = Yup.object().shape({
     faqs: Yup.array().of(
       Yup.object().shape({
         question: Yup.string().min(8, 'Question must be at least 8 characters long').required('Question is required'), // these constraints take precedence
         answer: Yup.string().min(30, 'Answer must be at least 30 characters long').required('Answer is required'), // these constraints take precedence
       })
     )
     .required('You must have at least one question to set this section.') // these constraints are shown if and only if inner constraints are satisfied
     .min(1, 'Minimum of 1 questions is required.'),
});