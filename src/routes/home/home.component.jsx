// Components
import Directory from '../../components/directory/directory.component.js';
import Shop from '../shop/shop.component.jsx';

// Styles

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'All Items'
    },
    {
      id: 2,
      title: 'T-Shirts'
    },
    {
      id: 3,
      title: 'Tracksuits'
    },
    {
      id: 4,
      title: 'Sneakers'
    }
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Shop />
    </div>
  );
};

export default Home;
