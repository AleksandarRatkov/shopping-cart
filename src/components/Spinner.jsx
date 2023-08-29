import "./Spinner.css"

const Spinner = ({ text = '' }) => {
    const header = text ? <h4>{text}</h4> : null
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <span className="header">{header}</span>
        </div>
    )
}

export default Spinner