import { validateTokenSymbol } from "../coingeckoTokenValidation";

test('validates a valid CoinGecko URL', () => {
  const validUrl = 'https://www.coingecko.com/en/coins/ethereum';
  const result = validateTokenSymbol.validateSync({ tokenUrl: validUrl });
  expect(result).toEqual({ tokenUrl: validUrl });
});

test('does not validate an invalid CoinGecko URL', () => {
  const invalidUrl = 'https://www.example.com';
  expect(() => {
    validateTokenSymbol.validateSync({ tokenUrl: invalidUrl });
  }).toThrow('Please enter a valid CoinGecko page URL');
});

test('requires a CoinGecko URL', () => {
  expect(() => {
    validateTokenSymbol.validateSync({ tokenUrl: '' });
  }).toThrow('CoinGecko URL is required');
});
