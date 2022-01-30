import { ContactPreview } from "./ContactPreview";
import { Link } from "react-router-dom"

export function ContactList(props) {

    function goAddContact() {
        props.history.push(`/contact/edit`)
    }

    return (
        <section>
            <button onClick={goAddContact} className="add-contact">Add contact</button>
            {/* // <Link to={`/contact/edit`}></Link> */}
            <div className="list-containter">
                {props.contacts.map(contact =>
                    <ContactPreview contact={contact} key={contact._id} />
                )}
            </div>
        </section>
    )
}
