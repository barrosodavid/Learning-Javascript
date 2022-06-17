
import {useState} from 'react'
import { ButtonSmall } from '../styles'


const Togglable = (props) => {
    const [visible, setVisible] = useState(props.visible)

    return (
        <div>
        <ButtonSmall onClick={() => setVisible(!visible)}>
            {visible ? props.hideText : props.showText}
        </ButtonSmall>
        {visible ? <>{props.children}</> : <></>}
        </div>
    )
}

export default Togglable