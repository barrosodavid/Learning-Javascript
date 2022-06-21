import React, { useState } from 'react'
import PropTypes from 'prop-types'
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

Togglable.propTypes = {
    showText: PropTypes.string.isRequired,
    hideText: PropTypes.string.isRequired,
    children: PropTypes.node,
    visible: PropTypes.bool,
    big: PropTypes.bool
}

export default Togglable