import * as Yup from "yup";

const linkedInUrlRegex = /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-z0-9_-]+\/?$/i;

export const validateTeam = Yup.object().shape({
     team: Yup.array().of(
       Yup.object().shape({
         name: Yup.string().min(3, 'Name must be at least 3 characters long').required('Name is Required'), // these constraints take precedence
         surname: Yup.string().min(3, 'Surname must be at least 3 characters long').required('Surname is Required'), // these constraints take precedence
         image: Yup.string().min(3, 'Image URL must be at least 3 characters long').required('Image is Required'), // these constraints take precedence
         linkedIn: Yup.string() .matches(linkedInUrlRegex, 'Not a valid LinkedIn user profile URL').min(15, 'LinkedIn URL must be at least 15 characters long').required('LinkedIn URL is required'),
         role: Yup.string().min(3, 'Role must be at least 3 characters long').required('Role is Required'), // these constraints take precedence
       })
     )
     .required('You must have a team to set a team.') // these constraints are shown if and only if inner constraints are satisfied
     .min(1, 'Minimum of 1 team member is required.'),
});