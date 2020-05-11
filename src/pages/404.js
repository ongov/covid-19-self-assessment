// We are redirecting all 404s to EN self-assessment start page
export default function NotFound() {
  if (typeof window !== "undefined") {
    window.location = "/self-assessment"
  }

  return null
}
