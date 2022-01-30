import React, { Component } from 'react'
export class ContactFilter extends Component {
    state = {
        term: '',
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })
    }
    render() {
        const { term } = this.state
        return (
            <form className='contact-filter'>
                <input onChange={this.handleChange} type="search" value={term} name="term" id="search" />
            </form>
        )
    }
}