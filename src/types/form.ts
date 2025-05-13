/**
 * Represents the shape of the contact form input.
 */
export type TContactForm = {
  /** Full name of the sender (min. 3 characters, required) */
  fullName: string
  /** Subject of the message (min. 3 characters, required) */
  subject: string
  /** Email address (must be valid, required) */
  email: string
  /** Message body content (min. 3 characters, required) */
  body: string
}
