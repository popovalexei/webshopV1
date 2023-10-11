import { useContext } from 'react';
import './category-item.styles.scss';
import { ProductsContext } from '../../contexts/products.context';

const CategoryItem = ({ category }) => {

  const {title } = category;

  const { setFilter} = useContext(ProductsContext)

  return (
    <div className="category-container" onClick={() => setFilter(title)}>
      <div className="category-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
