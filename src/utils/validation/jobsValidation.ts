import * as Yup from "yup";

export const validateJobs = Yup.object().shape({
     jobs: Yup.array().of(
       Yup.object().shape({
        title: Yup.string().min(5, 'too short').required('Title is Required'),
        category: Yup.string().min(5, 'too short').required('Category is Required'),
        link: Yup.string().url().min(5, 'too short').required('Link is Required'),
        remote: Yup.string().required('Remote status is Required'),
        location: Yup.string().min(5, 'too short').required('Location is Required'),
        type: Yup.string().required('Full Time status is Required'),
       })
     )
     .required('Must have job postings')
     .min(1, 'Minimum of 1 job posting'),
});
