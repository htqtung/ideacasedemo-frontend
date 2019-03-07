import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import DeleteCategory from './DeleteCategory';

class CategoryListItem extends Component {
    render() {
        return (
            <li>
                <CategoryItem item={this.props.item} />
                <DeleteCategory item={this.props.item} />
            </li>
        );
    }
}

export default CategoryListItem;
