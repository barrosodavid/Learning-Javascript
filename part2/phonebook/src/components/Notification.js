const SuccessNotification = ({message}) => {

    const style={
        color: "green",
        fontFamily: "Arial",
        fontSize: "2em",
        marginBottom: "1em",
        background: "#ccc"
    };

    if (message === null) {
        return null;
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}
const ErrorNotification = ({message}) => {

    const style={
        color: "red",
        fontFamily: "Arial",
        fontSize: "2em",
        marginBottom: "1em",
        background: "#ccc"
    };

    if (message === null) {
        return null;
    }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export {SuccessNotification, ErrorNotification}