import { formatToday } from "./formatToday";
import { isToday } from "date-fns";

jest.mock('date-fns', () => ({
  isToday: jest.fn()
}));
const formatIsoMock = jest.mocked(isToday)

describe('formatDate', () => {
  it('should format Date', () => {
    formatIsoMock.mockReturnValue(true)
    const result = formatToday(new Date());
    expect(result).toEqual('today')
  })

  it('should format Date', () => {
    formatIsoMock.mockReturnValue(false)
    const result = formatToday(new Date());
    expect(result).toEqual('not today')
  })
})