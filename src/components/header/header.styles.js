import styled from "styled-components";
import { Link } from "react-router-dom";

/** @createdOn 20-Aug-2021 */
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

/** @createdOn 20-Aug-2021 */
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

/** @createdOn 20-Aug-2021 */
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

/** @createdOn 20-Aug-2021 */
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// import { css } from "styled-components";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// export const OptionDiv = styled.div`${OptionContainerStyles}`;