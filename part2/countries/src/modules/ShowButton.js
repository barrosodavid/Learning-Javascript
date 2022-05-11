const ShowButton = ({ onClick, shown }) => {
    return shown ? (
        <button onClick={onClick}>Hide</button>
    ) : (
        <button onClick={onClick}>Show</button>
    );
};

export default ShowButton;