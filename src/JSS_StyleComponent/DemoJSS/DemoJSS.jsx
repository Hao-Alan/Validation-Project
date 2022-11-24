import React from "react";
import { Button, SmallButton } from "../Components/Button";
import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextField";

const DemoJSS = () => {
  return (
    <div>
      <Button bgprimary font2x>
        xin chao tat ca moi nguoi
      </Button>
      <SmallButton>hello em</SmallButton>
      <StyledLink>heloo anh</StyledLink>
      <br />
      <br />
      <TextField inputField="orange" fw="600" />
      <br />
      <TextField inputField="green" />
    </div>
  );
};

export default DemoJSS;
