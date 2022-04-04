import React, { ReactElement, useContext, useEffect, useState } from "react";
import PageOutputInternalContainer from "components/pageOutputInternalContainer";
import { GlobalContext } from "globalContext";
import PageOutputHTML from "components/PageOutputHTML";
import PageOutputCSS from "components/pageOutputCSS";

import { PageOutputScrollContainer } from "./styles";

const PageOutputContainer: React.FC = (): ReactElement => {
  const {layoutItemsList, copyTextState} = useContext(GlobalContext);
  const [ textState, setTextState ] = useState(copyTextState);

  useEffect(() => {
    setTextState(copyTextState);
  }, [copyTextState])
  return (
    <PageOutputScrollContainer>
      <div>
        <PageOutputInternalContainer name="HTML" text={textState.html}>
          <PageOutputHTML items={layoutItemsList}/>
        </PageOutputInternalContainer>
        <PageOutputInternalContainer name="CSS" text={textState.css}>
          <PageOutputCSS items={layoutItemsList}/>
        </PageOutputInternalContainer>
      </div>
    </PageOutputScrollContainer>
  );
};

export default PageOutputContainer;
