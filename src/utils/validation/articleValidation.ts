import * as Yup from "yup";

export const validateArticle = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  body: Yup.string(),
  externalUrl: Yup.string().url().required("External URL is required"),
});
