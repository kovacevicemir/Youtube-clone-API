import React from 'react'

class SearchBar extends React.Component{
    state = {term : ''}

    handleChange = (event) => {
        this.setState({term:event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault()
        this.props.submitHandler(this.state.term)
    }

    render(){
        return(
            <div className="ui container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <input 
                        type="text"
                        value={this.state.term} 
                        placeholder="Search videos..." 
                        onChange={this.handleChange}
                        className="form field"
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar