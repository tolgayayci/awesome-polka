import * as Yup from "yup";

export const validateFaq = Yup.object().shape({
     faqs: Yup.array().of(
       Yup.object().shape({
         question: Yup.string().min(5, 'too short').required('Required'), // these constraints take precedence
         answer: Yup.string().min(30, 'too short').required('Required'), // these constraints take precedence
       })
     )
     .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
     .min(1, 'Minimum of 1 questions'),
});