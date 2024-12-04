import { formatPrice } from "./formatPrice";

describe('formatPrice', () => {
  it('should format price', () => {
    const result = formatPrice(1000);
    expect(result).toEqual('$10.00')
  })

  it('should format negative price', () => {
    const result = formatPrice(-1000);
    expect(result).toBe('-$10.00')
  })

  it('should use currency USD Intl.Numberformat', () => {
    const spy = jest.spyOn(Intl, 'NumberFormat');
    formatPrice(100)
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('en-US', { style: 'currency', currency: 'USD' })
  })
})