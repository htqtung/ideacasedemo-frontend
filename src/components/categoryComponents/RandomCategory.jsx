import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import { fetchAllCategories } from '../../actions/category';
import { connect } from 'react-redux';

class RandomCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //this.setState({ categoryList: fetchTestCategories() });
        this.props.categoriesFetchAll();
    }

    render() {
        let category = { id: -1, name: "N/A", budget: "-1" };
        const categoryList = this.props.categories.categoryList;

        if (categoryList && categoryList.length > 0) {
            let randomizedId = Math.floor(
                Math.random() * categoryList.length
            );
            category = categoryList[randomizedId];
        }

        return (
            <div>
                <h4>Randomized category:</h4>
                <CategoryItem item={category} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    categoriesFetchAll: () => {
        dispatch(fetchAllCategories());
    },
});

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomCategory);