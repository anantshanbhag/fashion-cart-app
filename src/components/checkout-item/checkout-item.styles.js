import styled from 'styled-components';

/** @createdOn 20-Aug-2021 */
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

/** @createdOn 20-Aug-2021 */
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

/** @createdOn 20-Aug-2021 */
export const TextContainer = styled.span`
  width: 23%;
`;

/** @createdOn 20-Aug-2021 */
export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

/** @createdOn 20-Aug-2021 */
export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
