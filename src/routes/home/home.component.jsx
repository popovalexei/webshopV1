// Components
import Directory from '../../components/directory/directory.component.js';
import Shop from '../shop/shop.component.jsx';

// Styles

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'kits'
    },
    {
      id: 2,
      title: 'jackets'
    },
    {
      id: 3,
      title: 'T-shirts'
    },
    {
      id: 4,
      title: 'caps'
    },
    {
      id: 5,
      title: 'tracksuits'
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Shop />
    </div>
  );
};

export default Home;
