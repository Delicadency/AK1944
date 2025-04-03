import { addMonth } from './Dates';

describe('addMonth', () => {
    it('should add the correct number of months to a date', () => {
        const date = new Date(2023, 0, 1); // January 1, 2023
        const result = addMonth(date, 2); // Add 2 months
        expect(result.getMonth()).toBe(2); // March
        expect(result.getFullYear()).toBe(2023);
    });

    it('should handle negative offsets', () => {
        const date = new Date(2023, 5, 1); // June 1, 2023
        const result = addMonth(date, -3); // Subtract 3 months
        expect(result.getMonth()).toBe(2); // March
        expect(result.getFullYear()).toBe(2023);
    });

    it('should handle NaN offset gracefully', () => {
        const date = new Date(2023, 0, 1); // January 1, 2023
        const result = addMonth(date, NaN); // NaN offset
        expect(result.getTime()).toBeNaN(); // Result should be NaN
    });

    it('should handle non-integer offsets', () => {
        const date = new Date(2023, 0, 1); // January 1, 2023
        const result = addMonth(date, 2.5); // Non-integer offset
        expect(result.getMonth()).toBe(2); // March (ignores fractional part)
        expect(result.getFullYear()).toBe(2023);
    });
});
