export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // client-side
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
}
