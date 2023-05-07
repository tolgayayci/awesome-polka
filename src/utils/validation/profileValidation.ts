import * as Yup from "yup";

export const validateProfile = Yup.object().shape({
  bio: Yup.string().required("Short description is required").min(12, "Short description must be at least 12 characters").max(50, "Short description cannot be longer than 50 characters"),
  image: Yup.string().min(3, 'Image URL must be at least 3 characters long').required('Image is Required'),
});
