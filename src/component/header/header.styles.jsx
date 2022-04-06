import styledComponents, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
export const HeaderContainer = styledComponents.div`
height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`;
export const LogoContainer = styledComponents(Link)`
height: 100%;
width: 70px;
padding: 25px;
`;
export const OptionsContainer = styledComponents.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

`;
export const OptionLink = styledComponents(Link)`
${OptionContainerStyles}
`;
export const OptionDiv= styledComponents.div`
${OptionContainerStyles}
`;
