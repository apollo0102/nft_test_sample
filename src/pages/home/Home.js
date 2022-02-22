import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout';
import './Home.scss';

const Home = () => {
  const name = useName();
  return (
    <AppLayout>
      <h2>DDEFIRE: {name}</h2>
    </AppLayout>
  );
};

export default Home;
