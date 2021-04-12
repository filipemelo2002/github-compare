import * as Api from '../../api/repository';

describe('API Repository Requests', () => {
  it('should return a single repository object', async () => {
    const response = await Api.getRepository('filipemelo2002/gama-bank');
    expect(response).toHaveProperty('id');
  });

  it('should return an error message', async () => {
    try {
      await Api.getRepository('filipemelo2002/invalid-repo');
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });
});
