import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const {title } = category;
  return (
    <div className="category-container">
      <div className="category-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
