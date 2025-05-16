import { useForm } from "react-hook-form";
import { FormInput } from "../components/form/FormInput";
import { FormTextarea } from "../components/form/FormTextarea";
import type { TContactForm } from "../types/form";

/**
 * Renders the contact form using react-hook-form.
 * Includes validation, error messages, and reset on success.
 */
export function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TContactForm>();

  function onSubmit(data: TContactForm) {
    console.log("✅ Form submitted:", data);
    reset();
  }

  return (
    <div className="bg-light min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>

        {isSubmitSuccessful && (
          <div className="bg-green-100 text-green-800 text-sm rounded-md p-3 text-center mb-4">
            <span className="text-lg">✅</span> Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-main">
          <FormInput
            label="Full Name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            })}
            error={errors.fullName?.message}
          />

          <FormInput
            label="Subject"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            })}
            error={errors.subject?.message}
          />

          <FormInput
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            error={errors.email?.message}
          />

          <FormTextarea
            label="Message"
            {...register("body", {
              required: "Message is required",
              minLength: {
                value: 3,
                message: "Message must be at least 3 characters",
              },
            })}
            error={errors.body?.message}
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
