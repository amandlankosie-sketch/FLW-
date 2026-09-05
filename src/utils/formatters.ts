/**
 * Format a number as South African Rand currency (ZAR)
 * e.g. 15499 => "R 15,499"
 */
export function formatZAR(amount: number): string {
  return 'R ' + Math.round(amount).toLocaleString('en-ZA');
}

/**
 * Generate a realistic FLW order number
 * e.g. "FLW-2026-48291"
 */
export function generateOrderNumber(): string {
  const year = new Date().getFullYear();
  const randomDigits = Math.floor(10000 + Math.random() * 90000);
  return `FLW-${year}-${randomDigits}`;
}

/**
 * Calculate product final price based on selected model, storage, and optional color
 */
export function calculateItemPrice(
  basePrice: number,
  model: string,
  storage: string,
  modelMultiplier: Record<string, number>,
  storageAddon: Record<string, number>,
  color?: string,
  colorAddon?: Record<string, number>
): number {
  const multiplier = modelMultiplier[model] ?? 1;
  const sAddon = storageAddon[storage] ?? 0;
  const cAddon = (color && colorAddon && colorAddon[color] !== undefined) ? colorAddon[color] : 0;
  return Math.round((basePrice + cAddon) * multiplier + sAddon);
}
