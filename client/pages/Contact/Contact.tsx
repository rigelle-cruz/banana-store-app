import ContactForm from '../../components/Form/ContactForm'

function Contact() {
  return (
    <>
    <div className='contactHeader'>
      <div>
        <h1>Contact.</h1>
        <h2 className='contactH2'>Bnana.</h2>
        <p>Level 5/12 Morgan Street</p> 
          <p>Newmarket</p> 
          <p>Auckland 1023</p>
        </div>
      </div>
      <div className='contactFormContainer'>
      <ContactForm />
      </div>
    </>
  )
}

export default Contact
