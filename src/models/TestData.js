import Category from './Category';

export function fetchTestCategories() {
    // var categoryArr = new Array(5);
    // for(var i = 0; i < 5; i++) {
    //     var categoryName = 'Category ' + (i+1);
    //     categoryArr[i] = new Category(i, categoryName, 1000);
    // }
    return [
        new Category(1, 'Cars', 10000),
        new Category(2, 'Ships', 100000),
        new Category(3, 'Trains', 2000000),
        new Category(4, 'Bikes', 500),
        new Category(5, 'Chairs', 1000),
    ];

    // NOTE: Try to comment out one line = 4 categories. See how you get an error!!!
}