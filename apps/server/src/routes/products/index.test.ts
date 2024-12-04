import { productsRoute } from ".";

import request from 'supertest';
import express  from "express";

const app = express();

productsRoute(app);

jest.mock('../../services/products', () => ({
    ProductsService: class mockProductsService {
      async list() {
        return [];
      }
    },
}));

describe('GET /products', () => {
    it('responds with json', async () => {
        const response = await request(app)
        .get('/api/products')
        .set('Accept', 'application/json')
        
        //console.log(response.body)
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ status: 'success', data: [] })
    });
  });