import { FC } from 'react';

import '../App.css';
import { Header } from '../layout/Header/Header';
import { Main } from '../layout/Main/Main';

const App: FC = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
