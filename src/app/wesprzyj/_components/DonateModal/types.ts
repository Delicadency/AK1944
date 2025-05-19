export const PREDEFINED_AMOUNTS = [20, 50, 100, 200, 500] as const;
export type PredefinedAmount = (typeof PREDEFINED_AMOUNTS)[number];
