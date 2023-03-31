import * as Yup from "yup";

export const validateDescription = Yup.object().shape({
  bio: Yup.string().required("Bio is required"),
  description: Yup.string(),
});
