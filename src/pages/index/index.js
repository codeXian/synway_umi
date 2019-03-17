import Link from 'umi/link';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import Count from './components/Count';
import styles from './index.css';
import { ReactComponent as Rice } from '@/assets/svgs/rice.svg';

function App(props) {
  return (
    <div className={styles.normal}>
      <Rice width="120" height="120" />
      <h2>
        {props.text} @ {props.pathname}
      </h2>
      <Count />
      <br />
      <Button
        onClick={() => {
          props.dispatch({
            type: 'global/setText',
          });
        }}
      >
        Set Title
      </Button>
      <Button
        onClick={() => {
          props.dispatch({
            type: 'global/throwError',
          });
        }}
      >
        Throw error
      </Button>
      <br />
      <div>
        <Link to="/admin">Go to /admin</Link>
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname,
    text: state.global.text,
  };
})(App);
