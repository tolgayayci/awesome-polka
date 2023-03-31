import * as Yup from "yup";

export const validateTeam = Yup.object().shape({
     team: Yup.array().of(
       Yup.object().shape({
         name: Yup.string().min(5, 'too short').required('Name is Required'), // these constraints take precedence
         surname: Yup.string().min(30, 'too short').required('Surname is Required'), // these constraints take precedence
         image: Yup.string().min(5, 'too short').required('Image is Required'), // these constraints take precedence
         linkedIn: Yup.string().url().min(20, 'too short'), // these constraints take precedence
         role: Yup.string().min(5, 'too short').required('Role is Required'), // these constraints take precedence
       })
     )
     .required('Must have friends') // these constraints are shown if and only if inner constraints are satisfied
     .min(1, 'Minimum of 1 questions'),
});