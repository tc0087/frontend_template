import { useDispatch } from 'react-redux';
import { homeSync } from '../../redux/actions/home';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 onClick={() => dispatch(homeSync())}>Home</h1>
    </div>
  );
};

export default Home;
