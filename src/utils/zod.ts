import type { SafeParseReturnType } from 'astro/zod';

export function getErrors<Input, Output>(
  validationResult: SafeParseReturnType<Input, Output>
) {
  if (!validationResult.success) return validationResult.error.format();
  return null;
}
