import * as yup from "yup";

// Define the validation schema
export const validateGithubRepo = yup.object().shape({
    repoUrl: yup
      .string()
      .url("Please enter a valid URL")
      .test(
        "is-github-repo",
        "Please enter a valid GitHub repository URL, this should be in the format",
        (value) => {
          if (!value) return true;
          const pattern =
            /^(https?:\/\/)?github\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+\/+$/;
          return pattern.test(value);
        }
      )
      .required("GitHub repository URL is required"),
  });
  