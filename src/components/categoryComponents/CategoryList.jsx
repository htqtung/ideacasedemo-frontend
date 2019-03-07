import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
// import fetchTestCategories from '../../Models/TestData';
import { fetchAllCategories } from '../../actions/category';
import { connect } from 'react-redux';

class CategoryList extends Component {
    // state = { categoryList : [] }

    componentDidMount() {
        //this.setState({ categoryList: fetchTestCategories() });
        this.props.categoriesFetchAll();
    }

    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.categories.categoryList.map((item) =>
                            <CategoryListItem key={item.id} item={item} />
                        )
                    }
                </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);