"use client"

import { useState } from "react"

const ROLE_OPTIONS = [
  "Account officer/analyst",
  "Admin/storekeeper",
  "Operations officer",
  "Parking attendant",
  "Supervisor",
  "Ticket attendant",
  "Others",
] as const

export default function CareersApplicationForm() {
  const [role, setRole] = useState<string>(ROLE_OPTIONS[0])
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setMessage("")
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd })
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string }
      if (!res.ok || !data.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }
      setStatus("success")
      setMessage(data.message ?? "Thank you.")
      e.currentTarget.reset()
      setRole(ROLE_OPTIONS[0])
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="careers-form-area mt-6 space-y-6">
      <h3 className="text-xl font-semibold">Kindly fill the form below</h3>
      <p className="text-sm opacity-90">
        N.B: Only forms with accurate and clear information would be reviewed.
      </p>
      <p className="text-sm opacity-90">Upload CV: PDF only, max 1MB.</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

        <div>
          <label htmlFor="careers-cv" className="mb-1 block text-sm font-medium">
            Upload CV <span className="text-red-600">*</span>
          </label>
          <input
            id="careers-cv"
            name="cv"
            type="file"
            accept=".pdf,application/pdf"
            required
            className="block w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-orange-100 file:px-3 file:py-1.5 file:text-sm"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="careers-first" className="mb-1 block text-sm font-medium">
              First name <span className="text-red-600">*</span>
            </label>
            <input
              id="careers-first"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="careers-last" className="mb-1 block text-sm font-medium">
              Last name <span className="text-red-600">*</span>
            </label>
            <input
              id="careers-last"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="careers-phone" className="mb-1 block text-sm font-medium">
            Phone number <span className="text-red-600">*</span>
          </label>
          <input
            id="careers-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="careers-role" className="mb-1 block text-sm font-medium">
            Role applying for <span className="text-red-600">*</span>
          </label>
          <select
            id="careers-role"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          >
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {role === "Others" ? (
          <div>
            <label htmlFor="careers-role-other" className="mb-1 block text-sm font-medium">
              Enter role <span className="text-red-600">*</span>
            </label>
            <input
              id="careers-role-other"
              name="roleOther"
              type="text"
              required={role === "Others"}
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="header-btn4 inline-flex items-center gap-2 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : "Submit"}
          <i className="fa-solid fa-arrow-right" />
        </button>

        {status === "success" ? (
          <p className="text-sm text-green-700" role="status">
            {message}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            {message}
          </p>
        ) : null}
      </form>
    </div>
  )
}
