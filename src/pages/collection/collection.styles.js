import styled from 'styled-components';

/** @createdOn 20-Aug-2021 */
export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

/** @createdOn 20-Aug-2021 */
export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

/** @createdOn 20-Aug-2021 */
export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;
