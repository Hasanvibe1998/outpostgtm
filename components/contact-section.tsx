"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setErrorMsg("")

    const { error } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      },
    ])

    setLoading(false)

    if (error) {
      console.error(error)
      setErrorMsg("❌ Something went wrong. Try again.")
    } else {
      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full p-3 border rounded"
          />

          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 border rounded"
            rows={4}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-3 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600">✅ Message sent successfully!</p>
          )}

          {errorMsg && (
            <p className="text-red-600">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  )
}