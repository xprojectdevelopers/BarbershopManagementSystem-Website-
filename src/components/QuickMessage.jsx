import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, WarningCircle } from "phosphor-react"
import { supabase } from "@/lib/supabaseClient"

const QuickMessageDialog = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({ type: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" })) // clear error habang nagta-type
  }

  const validateForm = () => {
    let newErrors = {}

    const nameRegex = /^[A-Za-z\s]{2,}$/ // at least 2 letters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // must contain @ and .
    const phoneRegex = /^\d{11}$/ // exactly 11 digits

    if (!nameRegex.test(formData.name)) {
        newErrors.name = "Name must be at least 2 characters and only letters."
    }

    if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address."
    }

    if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 11 digits."
    }

    if (formData.message.length < 10) {
        newErrors.message = "Message must be at least 10 characters long."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
    }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ type: "", message: "" })

    if (!validateForm()) {
      setAlert({ type: "error", message: "Please fix the highlighted errors." })
      setLoading(false)
      return
    }

    const { error } = await supabase.from("quick_messages").insert([formData])

    if (error) {
      setAlert({ type: "error", message: "Something went wrong. Please try again." })
    } else {
      setAlert({ type: "success", message: "Message sent successfully!" })
      setFormData({ name: "", email: "", phone: "", message: "" }) // clear form
      setErrors({})
    }

    setLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a
          href="#"
          className="text-sm md:text-base underline cursor-pointer"
          style={{ fontFamily: "satoshi-medium" }}
        >
          Send Us a Quick Message
        </a>
      </DialogTrigger>
      <DialogContent className="max-w-4xl flex flex-col h-[620px] md:h-auto p-6 md:p-10">
        <DialogHeader>
          <DialogTitle
            className="text-center text-xl md:text-[32px] tracking-[0.4px]"
            style={{ fontFamily: "satoshi-bold" }}
          >
            We Keep It Simple, No Judgment
          </DialogTitle>
          <p
            className="text-center text-sm md:text-base tracking-[0.4px] mt-2"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Molave Street's Barbers will reach out to you shortly through the phone number or email you provide.
          </p>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8">
            {/* Left column */}
            <div className="flex flex-col gap-4 md:gap-6" style={{ fontFamily: "satoshi-medium" }}>
              <div>
                <label className="block text-sm md:text-base">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 mt-1 text-sm md:text-base focus:outline-none ${
                    errors.name ? "border-red-500" : "border-gray-300 focus:border-black"
                  }`}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm md:text-base">Email address *</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 mt-1 text-sm md:text-base focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300 focus:border-black"
                  }`}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm md:text-base">Phone number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border rounded p-2 mt-1 text-sm md:text-base focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300 focus:border-black"
                  }`}
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col" style={{ fontFamily: "satoshi-medium" }}>
              <label className="block text-sm md:text-base">Write a message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full h-40 md:h-52 border rounded p-2 mt-1 text-sm md:text-base resize-none focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300 focus:border-black"
                }`}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
          </div>

          {/* Global Alert */}
            {alert.message && (
            <div className="mt-4">
                <Alert variant={alert.type === "error" ? "error" : "success"} className="flex items-center gap-3">
                {alert.type === "error" ? (
                    <WarningCircle size={20} weight="fill" className="text-red-500" />
                ) : (
                    <CheckCircle size={20} weight="fill" className="text-green-500" />
                )}
                <div>
                    <AlertTitle>{alert.type === "error" ? "Error" : "Success"}</AlertTitle>
                    <AlertDescription>{alert.message}</AlertDescription>
                </div>
                </Alert>
            </div>
            )}

          {/* Actions */}
          <div
            className="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-6 text-sm md:text-base"
            style={{ fontFamily: "satoshi-medium" }}
          >
            <DialogClose asChild>
              <Button variant="orig" size="sm" className="w-full md:w-[160px] cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
              variant="orig"
              size="sm"
              className="w-full md:w-[160px] bg-black text-white hover:bg-gray-900 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default QuickMessageDialog
