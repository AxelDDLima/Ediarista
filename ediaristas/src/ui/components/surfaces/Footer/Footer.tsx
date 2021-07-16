import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos?</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur, quidem officia? Laudantium corporis fuga sit
            reiciendis, odio et suscipit facilis illo ad nobis, ducimus
            exercitationem numquam labore dignissimos quidem culpa.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Siga-nos</FooterTitle>
          <AppList>
            <li>
              <a
                href={"https://github.com/AxelDDLima"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img src={"/img/logos/icons8-github.svg"} alt={"github"} />
              </a>
            </li>
            <li>
              <a
                href={"https://www.instagram.com/axexxeu/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img
                  src={"/img/logos/icons8-instagram.svg"}
                  alt={"instagram"}
                />
              </a>
            </li>
            <li>
              <a
                href={"https://www.linkedin.com/in/axel-douglas-405251191/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <img src={"/img/logos/icons8-linkedin.svg"} alt={"linkedin"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
