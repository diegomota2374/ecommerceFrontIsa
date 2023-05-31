import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./CartIcon";
import Link from "next/link";

const ProductWrapper = styled.div``;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: none;
  font-size: 1rem;
  margin: 0;
  color:inherit;
  text-decoration:none;

`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <div>
        <WhiteBox href={url}>
          <img src={images[0]} alt="" />
        </WhiteBox>
        <ProductInfoBox>
          <Title href={url}> {title}</Title>
          <PriceRow>
            <Price> ${price}</Price>
            <div>
              <Button primary outline>
                <CartIcon />
              </Button>
            </div>
          </PriceRow>
        </ProductInfoBox>
      </div>
    </ProductWrapper>
  );
}
