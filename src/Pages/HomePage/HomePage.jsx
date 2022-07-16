import React, { useState } from "react";
import InputField from "../../Components/InputField/InputField";
import { CenterdContainer } from "../../StyledComponents/CenteredContainer";
import { PageContainer } from "../../StyledComponents/PageContainer";
import { Div } from "../../StyledComponents/Div";
import Info from "../../Components/Info/Info";
import Modal from "../../Components/Modal/Modal";

function HomePage() {
  const [status, setStatus] = useState("stopped");

  return (
    <PageContainer backgroundColor="#f6f6f7">
      {status === "completed" && <Modal setStatus={setStatus} />}
      <CenterdContainer flexDirection="column">
        <Div fontSize="20px" margin="-10vh 0 10px 0">
          TYPING SPEED TEST
        </Div>
        <Div fontSize="50px" fontWeight="bold" marginBottom="40px">
          Test your typing skills
        </Div>
        <Info status={status} setStatus={setStatus} />
        <InputField setStatus={setStatus} status={status} />
      </CenterdContainer>
    </PageContainer>
  );
}

export default HomePage;
