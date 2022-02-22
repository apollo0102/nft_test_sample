// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout';
import Collectable from './Collectable'
import './Home.scss';
import Land from './Land'

const Home = () => {
  // const name = useName();
  return (
    <AppLayout>
      <Land/>
      <Collectable/>
    </AppLayout>
  );
};

export default Home;
