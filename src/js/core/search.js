export function matches(entry, query, fields = ['name', 'sub', 'text']) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((f) => (entry[f] || '').toLowerCase().includes(q));
}