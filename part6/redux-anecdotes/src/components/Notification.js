import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notifications)
  console.log(notification)

  const style = {
    background: '#bddbd2',
    border: 'solid black 2px',
    textAlign: 'center',
    fontSize: '2em',
    color: 'black'
  }
  return (
    <div>
      {notification.notification ? 
        <div style={style}>
        {notification.notification}
        </div> 
        : 
        <></>}
    </div>
  )
}

export default Notification