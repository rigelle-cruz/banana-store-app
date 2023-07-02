import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }
  return (
    <>
      <div
        style={{
          margin: 'auto',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <img src="images/notice.svg" alt="notice" />
        <p>oops something went wrong!</p>
        <button
          style={{
            width: 'auto',
          }}
          onClick={() => goTo('/')}
        >
          home
        </button>
      </div>
    </>
  )
}

export default ErrorPage
