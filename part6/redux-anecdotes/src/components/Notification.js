import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notifications)

  const baseStyle = {
    background: '#bddbd2',
    border: 'solid black 2px',
    textAlign: 'center',
    height: '3em',
    fontSize: '1em',
    overflow: 'hidden',
    color: 'black',
    visibility: 'visible'
  }

  //Make visible or invisible
  const style = notification.notification ? baseStyle : {...baseStyle, visibility: 'hidden'}

  return (
    <div>
      {
        <div style={style}>
        {notification.notification}
        </div>
      }
    </div>
  )
}

export default Notification