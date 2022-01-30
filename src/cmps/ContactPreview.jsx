import { Link } from "react-router-dom"

export function ContactPreview({ contact }) {

    return (
        <div className="preview-container">
            <div className="preview-info">
                <Link to={`/contact/${contact._id}`}>
                    <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                    <span>{contact.name}</span>
                </Link>
            </div>
        </div>
    )
}