import Header from '../components/header';
import Footer from '../components/footer';
import './AppLayout.scss';
const AppLayout = (props) => {
  return (
    <div className='app-layout  section-land'>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default AppLayout;
