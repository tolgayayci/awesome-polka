import { renderHook, act } from '@testing-library/react-hooks';
import { useCheckUser } from '../useCheckUser';
import { readUserAttribute } from '../../data/queries/readUserAttribute';
import { useUserStore } from '../../data/store/userStore';

jest.mock('../../data/queries/readUserAttribute');
jest.mock('../../data/store/userStore');
jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
}));

//eslint-disable-next-line @typescript-eslint/no-var-requires
const useAccount = require('wagmi').useAccount;

describe('useCheckUser', () => {
    beforeEach(() => {
      (useUserStore as jest.Mock).mockReturnValue({ user: null });
      (readUserAttribute as jest.Mock).mockResolvedValue(null);
      (useAccount as jest.Mock).mockReturnValue({ address: '0x12345' });
    });
  
    // Existing test case
    it('should set isLoading to false and not update user when there is no user', async () => {
      const { result } = renderHook(useCheckUser);

      expect(result.current.user).toEqual({"user": null});
    });
});
