import { connect } from 'react-redux';
import { homeSync } from '../../redux/actions/home';

function Home({ homeSync }) {
  return (
    <div>
      <h1 onClick={homeSync}>Home</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    home: state.home.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeSync: () => dispatch(homeSync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
