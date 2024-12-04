import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('loads and displays ProductCard', async () => {
  render(<Button>Click</Button>)
  const button = await screen.findByRole('button')
  expect(button.innerHTML).toEqual('Click 0')
  await userEvent.click(button)
  expect(button.innerHTML).toEqual('Click 1')
  await userEvent.click(button)
  expect(button.innerHTML).toEqual('Click 2')
  screen.debug()
})