import { contactService } from "../../services/contactService";


export function loadContacts() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().contactModule
        try {
            const contacts = await contactService.getContacts(filterBy)
            console.log(contacts);
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log(err);
        }
    }
}

export function saveContact(contact) {
    return async (dispatch) => {
        await contactService.saveContact(contact)
        if (contact._id) {
            dispatch({ type: 'UPDATE_CONTACT', contact })
        } else {
            return async (dispatch) => {
                dispatch({ type: 'ADD_CONTACT', contact })
            }
        }
    }
}


export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}
export function setcurrContact(contact) {
    return async (dispatch) => {
        dispatch({ type: 'SET_CURR_CONTACT', contact })
    }
}

export function getContactById(contactId) {
    return async () => {
        return await contactService.getContactById(contactId)
    }
}