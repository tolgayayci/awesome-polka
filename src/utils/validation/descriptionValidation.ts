import * as Yup from "yup";

export const validateDescription = Yup.object().shape({
  bio: Yup.string().required("Short description is required").min(12, "Short description must be at least 12 characters").max(50, "Short description cannot be longer than 50 characters"),
  description: Yup.string().max(1500, "Description cannot be longer than 1500 characters").notRequired(),
});
