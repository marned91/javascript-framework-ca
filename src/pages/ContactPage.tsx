import { useState } from "react";
import React from "react";
import { FormInput } from "../components/form/FormInput";
import { FormTextarea } from "../components/form/FormTextarea";

/**
 * Renders a contact form with validation for:
 * - Full name
 * - Subject
 * - Email
 * - Message body
 *
 * On valid submission, logs form data to the console and resets the form.
 * Displays a success message if the form was submitted.
 *
 * @returns {JSX.Element} The rendered ContactPage
 */
export function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * Handles form submission with validation.
   * Prevents default form behavior, checks for input errors,
   * logs form data to the console, and clears fields if valid.
   *
   * @param event - The form submission event
   */
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    let hasError = false;

    const newError = {
      fullName: "",
      subject: "",
      email: "",
      body: "",
    };

    if (fullName.trim().length < 3) {
      newError.fullName = "Full name must be at least 3 characters";
      hasError = true;
    }

    if (subject.trim().length < 3) {
      newError.subject = "Subject must be at least 3 characters";
      hasError = true;
    }

    if (!validateEmail(email)) {
      newError.email = "Please enter a valid email address";
      hasError = true;
    }

    if (body.trim().length < 3) {
      newError.body = "Message must be at least 3 characters";
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      console.log("✅ Form submitted:", {
        fullName,
        subject,
        email,
        body,
      });

      setSubmit(true);
      setFullName("");
      setSubject("");
      setEmail("");
      setBody("");
    }
  }

  return (
    <div className="bg-light min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
        {submit && (
          <div className="bg-green-100 text-green-800 text-sm rounded-md p-3 text-center mb-4">
            <span className="text-lg">✅</span> Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 font-main">
          <FormInput
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={error.fullName}
          />

          <FormInput
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            error={error.subject}
          />

          <FormInput
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error.email}
          />

          <FormTextarea
            label="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            error={error.body}
          />

          <button
            type="submit"
            className="bg-primary hover:bg-darkHover font-navButtons text-white px-6 py-2 rounded w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
