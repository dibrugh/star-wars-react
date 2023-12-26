import { Route, Routes } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

import Header from '../../components/Header/Header';

import styles from './App.module.css';

/// Типизировать, кэшировать загрузку изображений, Suspens() с прелоадером

const App = () => {

  return (
    <div className={styles.wrapper}> 
      <Header />

      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
