const Notification = ({notification}) => {
    const baseStyle = {
        height:'3em',
        visiblity: 'visible',
        fontSize: '1.5em'
    }

    const style = notification ? {...baseStyle, visiblity: 'hidden'} : baseStyle
    return <div style={style}>
        <p>{notification}</p>
    </div>
}

export default Notification