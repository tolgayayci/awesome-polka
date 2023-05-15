import { renderHook } from '@testing-library/react-hooks';
import { useCheckProject } from '../useCheckProject';
import { readProjectAttribute } from '../../data/queries/readProjectAttribute';
import { useProjectStore } from '../../data/store/projectStore';

jest.mock('../../data/queries/readProjectAttribute');
jest.mock('../../data/store/projectStore');

describe('useCheckProject', () => {
  beforeEach(() => {
    (useProjectStore as jest.Mock).mockReturnValue({ project: null });
    (readProjectAttribute as jest.Mock).mockResolvedValue(null);
  });

  it('should set isLoading to false and not update project when there is no project', async () => {
    const projectSlug = 'test-project';
    const { result, waitForNextUpdate } = renderHook(() => useCheckProject(projectSlug));

    expect(result.current.project).toEqual({ project: null });
    expect(result.current.isLoading).toBe(false);
  });

  it('should not call readProjectAttribute when project is already in the store', async () => {
    const projectSlug = 'test-project';
    const mockProject = { slug: projectSlug, name: 'Test Project' };
    (useProjectStore as jest.Mock).mockReturnValue({ project: mockProject });

    const { result, waitForNextUpdate } = renderHook(() => useCheckProject(projectSlug));

    expect(readProjectAttribute).not.toHaveBeenCalled();
    expect(result.current.project).toEqual({ project: mockProject });
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle errors and set isLoading to false', async () => {
    const projectSlug = 'test-project';
    const errorMessage = 'Error fetching project';
    (readProjectAttribute as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useCheckProject(projectSlug));

    expect(result.current.project).toEqual({ project: null });
    expect(result.current.isLoading).toBe(false);
  });
});
