import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../../actions/category';

class DeleteCategory extends Component {

    handleDelete = (event) => {
        this.props.deleteCategoryClicked(this.props.item);
        event.preventDefault();
    }

    render() { 
        return ( 
            <button onClick={this.handleDelete} >Delete</button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCategoryClicked: (category) => {
        console.log(category);
        dispatch(deleteCategory(category));
    },
});
 
export default connect(null, mapDispatchToProps)(DeleteCategory);