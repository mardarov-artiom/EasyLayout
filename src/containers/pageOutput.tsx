import React, { ReactElement, useContext, useEffect, useState } from "react";
import PageOutputInternalContainer from "components/views/output/pageOutputInternalContainer";
import { GlobalContext } from "globalContext";
import PageOutputHTML from "components/views/output/pageOutputHTML";
import PageOutputCSS from "components/views/output/pageOutputCSS";

import { PageOutputScrollContainer } from "./styles/pageOutput";

const PageOutputContainer: React.FC = (): ReactElement => {
  const {layoutItemsList, copyTextState, copyHtmlToClipboard, copyCssToClipboard} = useContext(GlobalContext);
  const [ textState, setTextState ] = useState(copyTextState);

  useEffect(() => {
    setTextState(copyTextState);
  }, [copyTextState])
  return (
    <PageOutputScrollContainer>
      <div className="page-output-wrapper">
        <PageOutputInternalContainer name="HTML" text={textState.html} clickAction={copyHtmlToClipboard}>
          <PageOutputHTML items={layoutItemsList}/>
        </PageOutputInternalContainer>
        <PageOutputInternalContainer name="CSS" text={textState.css} clickAction={copyCssToClipboard}>
          <PageOutputCSS />
        </PageOutputInternalContainer>
      </div>
    </PageOutputScrollContainer>
  );
};

export default PageOutputContainer;
