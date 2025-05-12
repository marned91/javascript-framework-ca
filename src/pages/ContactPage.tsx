import { useState } from 'react'
import React from 'react'

export function ContactPage() {
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: '',
  })

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    let hasError = false

    const newError = {
      fullName: '',
      subject: '',
      email: '',
      body: '',
    }

    if (fullName.trim().length < 3) {
      newError.fullName = 'Full name must be at least 3 characters'
      hasError = true
    }

    if (subject.trim().length < 3) {
      newError.subject = 'Subject must be at least 3 characters'
      hasError = true
    }

    if (!validateEmail(email)) {
      newError.email = 'Please enter a valid email address'
      hasError = true
    }

    if (body.trim().length < 3) {
      newError.body = 'Message must be at least 3 characters'
      hasError = true
    }

    setError(newError)

    if (!hasError) {
      console.log('✅ Form submitted:', {
        fullName,
        subject,
        email,
        body,
      })

      setSubmit(true)
      setFullName('')
      setSubject('')
      setEmail('')
      setBody('')
    }
  }

  return (
    <div className="bg-light min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>
        {submit && (
          <p className="font-main mb-3">✅ Message sent successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 font-main">
          <div>
            <label className=" block font-semibold mb-1">Full Name</label>
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="w-full p-2 border rounded mb-5"
            />

            {error.fullName && (
              <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
            )}

            <label className="block font-semibold mb-1">Subject</label>
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="w-full p-2 border rounded"
            />

            {error.subject && (
              <p className="text-red-500 text-sm mt-1">{error.subject}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-2 border rounded mb-5"
            />

            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                value={body}
                onChange={(event) => setBody(event.target.value)}
                className="w-full p-2 border rounded min-h-[100px] mb-5"
              />

              {error.body && (
                <p className="text-red-500 text-sm mt-1">{error.body}</p>
              )}

              <button
                type="submit"
                className="bg-primary hover:bg-darkHover font-navButtons text-white px-6 py-2 rounded w-full"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
