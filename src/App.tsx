import React, { Fragment, ReactElement, useContext } from "react";
import GlobalStyle from "globalStyles";

import { GlobalContext } from "globalContext";
import Modal from "components/modal";
import PageInputContainer from "containers/pageInput";
import MainViewContainer from "containers/mainView";
import PageOutputContainer from "containers/pageOutput";
import { Container, Section, Bar } from "react-simple-resizer";
import PageMainContainer from "components/pageMainContainer";

import "normalize.css";
import "Grid.scss";

const App: React.FC = (): ReactElement  => {
  const {isLoading} = useContext(GlobalContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <GlobalStyle/>
      <PageMainContainer>
        <Container style={{width: 100 + "%", height: "100vh"}}>
          <Section defaultSize={384} minSize={250}>
            <PageInputContainer/>
          </Section>
          <Bar size={5} style={{background: "#1e1e1e", cursor: "e-resize"}}/>
          <Section minSize={100}>
            <MainViewContainer/>
          </Section>
          <Bar size={5} style={{background: "#1e1e1e", cursor: "e-resize"}}/>
          <Section defaultSize={384} minSize={320}>
            <PageOutputContainer/>
          </Section>
        </Container>
      </PageMainContainer>
      <Modal />
    </Fragment>
  );
};

export default App;
