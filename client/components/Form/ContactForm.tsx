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

function ContactForm() {
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
    <div className="container">
      <div className="row justify-content-center formRow">
        <div className="col-12 col-md-8">
          <div>
            {submitted && <div>Submitted!</div>}
            <form onSubmit={handleSubmit}>
              <label className="form-label">
                <input
                  className="form-control"
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label className="form-label">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label className="form-label">
                <input
                  className="form-control"
                  type="text"
                  name="topic"
                  placeholder="TOPIC"
                  value={formData.topic}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <label className="form-label">
                <textarea
                  rows={5}
                  className="form-text-area"
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <br />
              <button type="submit" className="submit-button">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
