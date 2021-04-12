import * as Api from '../../api/repository';

describe('API Repository Requests', () => {
  it('should return a single repository object', async () => {
    const response = await Api.getRepository('filipemelo2002/filipemelo2002');
    expect(response).toHaveProperty('id');
  });

  it('should return an error message', async () => {
    try {
      await Api.getRepository('filipemelo2002/invalid-repo');
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  it("should return all user's repositories", async () => {
    const response = await Api.getAllUserRepositories('filipemelo2002');
    expect(response.items.length).toBeGreaterThan(0);
  });

  it("should fail fetching for user's repositories", async () => {
    const response = await Api.getAllUserRepositories('filipemelo2002INVALID');
    expect(response.items.length).toBe(0);
  });
});
