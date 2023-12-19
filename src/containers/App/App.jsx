import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';

import { Route, Routes } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

import Header from '../../components/Header/Header';

import styles from './App.module.css';



const App = () => {

  return (
    <div className={styles.wrapper}> 
      <Header />

      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element()}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
