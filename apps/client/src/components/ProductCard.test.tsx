import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from './ProductCard'
import { ReactNode } from 'react'

jest.mock('@tanstack/react-router', () => ({
    Link: ({ children } : { children: ReactNode }) => children
}))

test('loads and displays ProductCard', async () => {
  render(<ProductCard product={{
    id: 1,
    name: 'Product Name',
    description: 'Product description',
    image: 'http://images.com',
    price: 1999,
  }}/>)
  //screen.debug()
  const title = await screen.findAllByText('Product Name')
  const description = await screen.findAllByText('Product description')
  expect(title).toBeTruthy()
  expect(description).toBeTruthy()
})