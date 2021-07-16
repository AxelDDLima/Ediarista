import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvinment.style";
import { Container } from "@material-ui/core";

const SafeEnvinment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvinment;
