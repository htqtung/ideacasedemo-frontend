import React, { Component } from 'react';

class CategoryItem extends Component {
    state = {}
    render() {
        return (
            <span>
                {`Category: ${this.props.item.name}, budget: ${this.props.item.budget} euros`}
            </span>
        );
    }
}

export default CategoryItem;