import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {

    return (
        <article className='product'>
            <img src={image ? image.url : defaultImage} alt={name}/>
            <h4>{name}</h4>
            <p>${price || '3.99'}</p>
        </article>
    );
};

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

// Product.defaultProps = {
//     name: 'Default Name',
//     price: 3.99,
//     image: {
//         url: defaultImage
//     }
// }

export default Product;
