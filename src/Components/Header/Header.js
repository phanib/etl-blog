import React from "react";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 */
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  BlogLogin,
} from "./";
import { config } from "../../config";

export const Header = () => {
  return (
    <HeaderContainer>
      <BlogLogin isAbsolute={true} />
      <HeaderWrapper>
        <HeaderTitle>{config.title}</HeaderTitle>
        <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
