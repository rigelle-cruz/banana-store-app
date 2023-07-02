import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  fullName: string
  email: string
  topic: string
  message: string
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  topic: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform your form submission logic here

    // Display 'submitted' message
    setSubmitted(true)

    setFormData(initialFormData)
  }

  return (
    <div>
      {submitted && <div>Submitted!</div>}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="fullName"
            placeholder="FULL NAME"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="topic"
            placeholder="TOPIC"
            value={formData.topic}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          <textarea
            name="message"
            placeholder="MESSAGE"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
