import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

test('sponsor packet URL matches the published PDF, including filename case', () => {
  const { packetUrl } = JSON.parse(readFileSync(new URL('../src/content/sponsors.json', import.meta.url), 'utf8'));
  const trackedFiles = execFileSync('git', ['ls-files', '-z', 'public/packets'], {
    cwd: new URL('..', import.meta.url),
    encoding: 'utf8',
  }).split('\0');
  assert.ok(trackedFiles.includes(`public${packetUrl}`), `Packet URL ${packetUrl} must match a tracked file exactly`);
  const pdf = readFileSync(new URL(`../public${packetUrl}`, import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
});
