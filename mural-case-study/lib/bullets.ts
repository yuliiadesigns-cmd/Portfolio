export function extractBulletList(body: string, marker: string): string[] {
  const idx = body.indexOf(marker);
  if (idx === -1) return [];
  const tail = body.slice(idx + marker.length);
  return tail
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("-"))
    .map((l) => l.replace(/^-\s*/, "").trim())
    .filter(Boolean);
}
