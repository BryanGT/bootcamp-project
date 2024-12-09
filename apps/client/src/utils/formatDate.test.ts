import { formatDate } from "./formatDate";
import { formatISO } from "date-fns";

jest.mock('date-fns', () => ({
  formatISO: jest.fn()
}));
const formatIsoMock = jest.mocked(formatISO)

describe('formatDate', () => {
  it('should format Date', () => {
    formatIsoMock.mockReturnValue('2024-11-25T18:00:46-06:00')
    const result = formatDate(new Date());
    expect(result).toEqual('2024-11-25T18:00:46-06:00')
  })
})