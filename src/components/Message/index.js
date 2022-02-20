// Write your code here

import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  return (
    <h1 className="title">{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
  )
}

export default Message
