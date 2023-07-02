import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }
  return (
    <>
      <div>
        <p>something went wrong!</p>
        <button onClick={() => goTo('/')}>home</button>
      </div>
    </>
  )
}

export default ErrorPage
