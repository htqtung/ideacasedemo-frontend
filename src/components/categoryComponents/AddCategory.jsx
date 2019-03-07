import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions/category';

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            budget: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        const category = this.state;
        this.props.addCategoryClicked(category);
        event.preventDefault();

        //this.props.addcategoryClicked(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h4>New Category</h4>
                    <label> 
                        ID: <input id="id" type="text" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Name: <input id="name" type="text" onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Budget: <input id="budget" type="text" onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="ADD NEW CATEGORY" />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addCategoryClicked: (category) => {
        console.log(category);
        dispatch(addCategory(category));
    },
});

export default connect(null, mapDispatchToProps)(AddCategory);