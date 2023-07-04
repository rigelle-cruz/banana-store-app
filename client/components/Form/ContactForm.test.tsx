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

    const fullNameInput = screen.getAllByPlaceholderText('FULL NAME')
    expect(fullNameInput).toHaveLength(1)

    const emailInput = screen.getAllByPlaceholderText('EMAIL')
    expect(emailInput).toHaveLength(1)

    const topicInput = screen.getAllByPlaceholderText('TOPIC')
    expect(topicInput).toHaveLength(1)

    const messageTextarea = screen.getAllByPlaceholderText('MESSAGE')
    expect(messageTextarea).toHaveLength(1)

    const submitButton = screen.getAllByRole('button', { name: 'SEND' })
    expect(submitButton).toHaveLength(1)
  })
  it('displays the "Submitted!" message after submitting the form', () => {
    render(
      <MemoryRouter>
        <ContactForm />
      </MemoryRouter>
    )

    const fullNameInputs = screen.getAllByPlaceholderText('FULL NAME')
    fireEvent.change(fullNameInputs[0], { target: { value: 'John Doe' } })

    const emailInput = screen.getAllByPlaceholderText('EMAIL')
    fireEvent.change(emailInput[0], {
      target: { value: 'johndoe@example.com' },
    })

    const topicInput = screen.getAllByPlaceholderText('TOPIC')
    fireEvent.change(topicInput[0], { target: { value: 'Test Topic' } })

    const messageTextarea = screen.getAllByPlaceholderText('MESSAGE')
    fireEvent.change(messageTextarea[0], { target: { value: 'Test message' } })

    const submitButton = screen.getAllByRole('button', { name: 'SEND' })

    fireEvent.click(submitButton[0])

    const submittedMessage = screen.getByText('Submitted!')
    expect(submittedMessage).toBeTruthy()
  })
})
