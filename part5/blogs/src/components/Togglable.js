
import { useState } from 'react'
import { Button, ButtonSmall } from '../styles'


const Togglable = (props) => {
    const [visible, setVisible] = useState(props.visible)

    return (
        <div>
            {visible ? <>{props.children}</> : <></>}
            {props.big ?
                <Button onClick={() => setVisible(!visible)}>
                    {visible ? props.hideText : props.showText}
                </Button>
                :
                <ButtonSmall onClick={() => setVisible(!visible)}>
                    {visible ? props.hideText : props.showText}
                </ButtonSmall>
            }
        </div>
    )
}

export default Togglable