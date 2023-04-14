import * as Yup from "yup";

export const validateJobs = Yup.object().shape({
  jobs: Yup.array().of(
    Yup.object().shape({
      title: Yup.string()
        .min(5, 'Title should be at least 5 characters long')
        .required('Title is required'),
      category: Yup.string()
        .min(5, 'Category should be at least 5 characters long')
        .required('Category is required'),
      link: Yup.string()
        .url('Link must be a valid URL')
        .min(5, 'Link should be at least 5 characters long')
        .required('Link is required'),
      remote: Yup.string().required('Remote status is required'),
      location: Yup.string()
        .min(5, 'Location should be at least 5 characters long')
        .required('Location is required'),
      type: Yup.string().required('Full time status is required'),
    })
  )
  .required('At least one job posting is required')
  .min(1, 'At least one job posting is required'),
});
