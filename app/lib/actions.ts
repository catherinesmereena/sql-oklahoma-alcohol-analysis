"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // In a real application, you would send this data to an email service or database
  console.log("Contact form submission:", { name, email, message })

  // For now, we'll just redirect back to the home page with a success parameter
  // In a real application, you might want to show a success message or redirect to a thank you page
  redirect("/#contact?success=true")
}
