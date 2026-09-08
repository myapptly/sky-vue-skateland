export const OWNER_EMAIL = 'denise@skyvueskateland.com';

export function isOwnerEmail(email: string | null | undefined) {
  return email?.trim().toLowerCase() === OWNER_EMAIL;
}
