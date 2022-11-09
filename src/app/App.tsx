import { FC } from 'react';

import '../App.css';
import { Header } from '../layout/Header/Header';
import { Navigation } from '../layout/Navigation/Navigation';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  );
};

export default App;
