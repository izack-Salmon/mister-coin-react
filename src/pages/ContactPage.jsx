import React, { Component } from 'react'
import { connect } from 'react-redux'
import { contactService } from "../services/contactService";
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { loadContacts, setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {


    componentDidMount() {
        this.props.loadContacts()
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    // loadContacts = async () => {
    //     const contacts = await contactService.getContacts(this.state.filterBy)
    //     this.setState({ contacts })
    // }

    render() {
        const { contacts } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <div>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList history={this.props.history} contacts={contacts} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
    }
}

const mapDispatchToProps = {
    loadContacts,
    setFilterBy
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)