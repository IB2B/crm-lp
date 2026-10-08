/**
 * Real client quotes, shown in "What our clients say".
 *
 * Paste each quote exactly as the client wrote it, with their permission.
 * The first one is shown big; the rest slide along in two rows.
 * The section appears on the page by itself as soon as this list has a quote.
 *
 * Example (delete the // to use):
 *   { quote: "Since TORCH we answer every WhatsApp the same day.", name: "Marco B.", business: "Dental clinic · Milan" },
 */
export type Testimonial = { quote: string; name: string; business: string }

export const testimonials: Testimonial[] = [
  // { quote: "", name: "", business: "" },
]
