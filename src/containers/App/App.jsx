// classnames для конкатенирования классов
/* import cn from 'classnames' */
import styles from './App.module.css';
import { getApiResource } from '../../utils/network';
import PeoplePage from '../PeoplePage';

const App = () => {

  return (
    <PeoplePage />
  );
}

export default App;
