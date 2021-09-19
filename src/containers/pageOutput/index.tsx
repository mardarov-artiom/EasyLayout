import React, { useContext } from 'react';
import PageOutputInternalContainer from 'components/pageOutputInternalContainer';
import { GlobalContext } from 'globalContext';
import PageOutputHTML from 'components/PageOutputHTML';
import PageOutputCSS from 'components/pageOutputCSS';

import { PageOutputScrollContainer } from './styles';

const PageOutputContainer: React.FC = () => {
  const { layoutItemsList } = useContext(GlobalContext);
  return (
    <PageOutputScrollContainer>
      <div>
        <PageOutputInternalContainer name="HTML">
          <PageOutputHTML items={layoutItemsList} />
        </PageOutputInternalContainer>
        <PageOutputInternalContainer name="CSS">
          <PageOutputCSS items={layoutItemsList} />
        </PageOutputInternalContainer>
      </div>
    </PageOutputScrollContainer>
  );
};

export default PageOutputContainer;
