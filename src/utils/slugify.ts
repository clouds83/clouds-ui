export function slugify(text: string) {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends of the string
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters, and dashes with a single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
}
