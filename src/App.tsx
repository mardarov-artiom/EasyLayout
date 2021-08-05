/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useActions } from './store/hooks/useActions';
import { useTypedSelector } from './store/hooks/useTypedSelector';

const App: React.FC = () => {
  const { mainView, pageInput, pageOutput, loading } = useTypedSelector(state => state.pageView);
  const { resizeView } = useActions();

  useEffect(() => {
    resizeView();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{pageInput}</h1>
      <h1>{mainView}</h1>
      <h1>{pageOutput}</h1>
    </div>
  );
};

export default App;
