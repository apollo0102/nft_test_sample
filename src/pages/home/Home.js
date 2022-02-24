// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout'
import Collectable from './Collectable'
import './Home.scss'
import Land from './Land'
// import Test from './Test'

const Home = () => {
  // const name = useName();
  return (
    <AppLayout>
     {/* <Test/> */}
      <Land />
      <Collectable />
    </AppLayout>
  )
}

export default Home
