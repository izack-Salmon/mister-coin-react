import React, { Component } from 'react'
import { contactService } from '../services/contactService'
import { getContactById, saveContact, setcurrContact } from '../store/actions/contactActions'
import { connect } from 'react-redux'

export class _ContactEditPage extends Component {

    state = {
        contact: {
            name: '',
            email: '',
            phone: '',
        },
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        console.log(contactId);
        const contact = contactId ? await this.props.getContactById(contactId) : contactService.getEmptyContact()
        console.log(contact);
        // this.props.setcurrContact(contact)
        this.setState({ contact })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        const { contact } = this.state
        ev.preventDefault()
        this.props.saveContact(contact)
        // await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    onGoBack = (id) => {
        id ? this.props.history.push(`/contact/${id}`) : this.props.history.push(`/contact`)
    }

    render() {
        const { contact } = this.state
        console.log(contact);
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-edit'>
                <h1>Add contact</h1>
                <form onSubmit={this.onSaveContact}>
                    <label htmlFor="name">name</label>
                    <input onChange={this.handleChange} value={contact.name} name="name" type="text" />
                    <label htmlFor="phone">phone</label>
                    <input onChange={this.handleChange} value={contact.phone} name="phone" type="text" />
                    <label htmlFor="email">email</label>
                    <input onChange={this.handleChange} value={contact.email} name="email" type="text" />
                    <button >Save</button>
                </form>
                <button onClick={() => this.onGoBack(contact._id)} >Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contact: state.contactModule.currContact,
    }
}

const mapDispatchToProps = {
    getContactById,
    saveContact,
    setcurrContact
}

export const ContactEditPage = connect(mapStateToProps, mapDispatchToProps)(_ContactEditPage)