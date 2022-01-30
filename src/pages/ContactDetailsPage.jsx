import React, { Component } from 'react'
import { contactService } from "../services/contactService";
import { TransferFund } from "../cmps/TransferFund";
import { Link } from "react-router-dom"
export class ContactDetailsPage extends Component {

    state = {
        contact: null,
        amount: 0,
    }

    componentDidMount() {
        this.loadContact()
    }

    onTransferFund() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }

    }

    removeContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.loadContact()
        this.props.history.push('/')
    }

    async loadContact() {
        console.log(this.props.match.params.id);
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onGoBack = () => {
        this.props.history.push('/')
    }


    render() {
        const { contact, amount } = this.state
        if (!contact) return <div>Loading..</div>
        return (
            <div className='contact-datails'>
                <h1>Name : {contact.name}</h1>
                <h3>Gmail : {contact.email}</h3>
                <h3>phone : {contact.phone}</h3>
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                <button onClick={this.onGoBack} >Back</button>
                <button onClick={() => this.removeContact(contact._id)}>X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit contact</Link>
                <TransferFund amount={amount} />
            </div>
        )
    }
}
