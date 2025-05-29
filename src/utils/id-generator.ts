import { randomUUID } from 'node:crypto';

const prefixes = {
    files: 'file',
    user: 'user',
} as const;

export const generateId = (prefix: keyof typeof prefixes | string) => {
    const resolvedPrefix = (prefix in prefixes) ? prefixes[prefix as keyof typeof prefixes] : prefix;
    return `${resolvedPrefix}_${randomUUID()}`;
}