import React, { Component } from 'react';

import CategoryList from '../../components/categoryComponents/CategoryList';
import AddCategory from '../../components/categoryComponents/AddCategory';
import RandomCategory from '../../components/categoryComponents/RandomCategory';

class Categories extends Component {

    render() {
        return (
            <div>
                <AddCategory />
                <CategoryList />

                {/* Category of the day */}
                <RandomCategory />
                
            </div>
        );
    }
}

export default Categories;