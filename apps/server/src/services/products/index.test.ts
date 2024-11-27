import { prisma } from '../../lib/prismaClient';
import { ProductsService } from '.';

jest.mock('../../lib/prismaClient', () => ({
  prisma: {
    product: {
      findMany: jest.fn(),
    },
  },
}));

describe('ProductsService', () => {
  test('should return an empty list of products', async () => {
    const findManyMock = jest.mocked(prisma.product.findMany);
    findManyMock.mockResolvedValue([]);
    const service = new ProductsService();

    const result = await service.list({});

    expect(result).toEqual([]);
  });
});
