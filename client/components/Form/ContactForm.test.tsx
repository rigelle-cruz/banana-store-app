//@vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields correctly', () => {
    render(
      <MemoryRouter>
        <ContactForm />
      </MemoryRouter>
    )

    const fullNameInput = screen.getAllByPlaceholderText('full name')
    expect(fullNameInput).toHaveLength(1)

    const emailInput = screen.getAllByPlaceholderText('email')
    expect(emailInput).toHaveLength(1)

    const topicInput = screen.getAllByPlaceholderText('topic')
    expect(topicInput).toHaveLength(1)

    const messageTextarea = screen.getAllByPlaceholderText('message')
    expect(messageTextarea).toHaveLength(1)

    const submitButton = screen.getAllByRole('button', { name: 'Send' })
    expect(submitButton).toHaveLength(1)
  })
  it('displays the "Submitted!" message after submitting the form', () => {
    render(
      <MemoryRouter>
        <ContactForm />
      </MemoryRouter>
    )

    const fullNameInputs = screen.getAllByPlaceholderText('full name')
    fireEvent.change(fullNameInputs[0], { target: { value: 'John Doe' } })

    const emailInput = screen.getAllByPlaceholderText('email')
    fireEvent.change(emailInput[0], {
      target: { value: 'johndoe@example.com' },
    })

    const topicInput = screen.getAllByPlaceholderText('topic')
    fireEvent.change(topicInput[0], { target: { value: 'Test Topic' } })

    const messageTextarea = screen.getAllByPlaceholderText('message')
    fireEvent.change(messageTextarea[0], { target: { value: 'Test message' } })

    const submitButton = screen.getAllByRole('button', { name: 'Send' })

    fireEvent.click(submitButton[0])

    const submittedMessage = screen.getByText('Submitted!')
    expect(submittedMessage).toBeTruthy()
  })
})
