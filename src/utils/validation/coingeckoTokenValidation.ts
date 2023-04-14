import * as yup from "yup";

// Define the validation schema
export const validateTokenSymbol = yup.object().shape({
    tokenUrl: yup
      .string()
      .url("Please enter a URL")
      .test(
        "is-coingecko-url",
        "Please enter a valid CoinGecko page URL, should be in this format: https://www.coingecko.com/en/coins/ethereum",
        (value) => {
          if (!value) return true;
          const pattern =
            /^(https?:\/\/)?www.coingecko\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+$/;
          return pattern.test(value);
        }
      )
      .required("CoinGecko URL is required"),
});
  