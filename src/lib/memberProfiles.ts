export interface MemberProfile {
  name: string;
  subteam?: string;
  role?: string;
  major?: string;
  graduationYear?: string;
  graduationTerm?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  email?: string;
}

export function graduationLabel(person: MemberProfile): string | undefined {
  const year = person.graduationYear?.trim();
  if (!year) return undefined;
  const term = person.graduationTerm?.trim();
  return term ? `${term} ${year}` : `Class of ${year}`;
}

export function memberSlug(name: string): string {
  return name.trim().toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function memberProfileUrl(name: string): string {
  return `/members/${memberSlug(name)}/`;
}
