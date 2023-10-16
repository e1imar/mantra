import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import Image from 'next/image';
import IsAvailable from '../../components/mantra/presentational/IsAvailable';
import { getMainColor } from '../../utils/cssStyles';
import ExpandableInfo from '../../components/mantra/presentational/ExpandableInfo';
import axios, {endpoints} from "../../utils/axios";
import PropTypes from "prop-types";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 
                      '. card . info .'
                      '. card . info .';
  grid-template-columns: 5% 1fr 66px 1.2fr 5%;
`;


const ImageWrapper = styled.div`
  width: 100%;
  height: 420px;
  position: relative;
  margin-bottom: 28px;
  border-radius: var(--border-radius);
  overflow: hidden;
`;


const ProductCard = styled.article`
  grid-area: card;
  max-width: 426px;
`;

const Info = styled.article`
  grid-area: info;
`;

const Text = styled.p`
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  min-width: 200px;
  font: var(--font-roboto);
  border: 2px solid ${getMainColor};
  border-radius: 60px;
  background-color: transparent;
  color: #fff;

  &:hover {
    background-color: ${getMainColor};
    cursor: pointer;
  }
`;

const ProductById = ({product}) => {
  const {title, price, available, currency} = product
  return <PageContainer>

    <ProductCard>
      <ImageWrapper>
        <Image src="https://themantra.ru/media/products/Mind_350.jpg" layout="fill" alt="mind"/>
      </ImageWrapper>

      <Stack borderBottom="var(--border)" pb="7px" pt="7px" justifyContent="space-between" alignItems="center"
             direction="row">
        <IsAvailable isAvailable={available}/>
        <Text>
          {price ? `${price} ${currency?.code}` : ''}
        </Text>
      </Stack>

      <Stack pt="44px" justifyContent="center" alignItems="center">
        <Button>
          В корзину
        </Button>
      </Stack>
    </ProductCard>

    <Info>
      <Stack spacing={3}>
        <ExpandableInfo isHead title={title}
                        text="Львиная грива (Lion's Mane) – это съедобный гриб, растущий на деревьях в Северной Америке, Европе и Азии. Свое названия получил благодаря внешнему виду, похожему на гриву льва. Обладает ноотропными свойствами и полезен для улучшения когнитивных функций, борьбы с усталостью и улучшения настроения."/>
        <ExpandableInfo isHead title="Основные эффекты"
                        text="Способствует нормализации кровообращения. Укрепляет память и продуктивность работы головного мозга. Способствует укреплению физической выносливости Повышает иммунитет, дарит телу силы побеждать заболевания"/>
        <Stack spacing={1}>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
          <ExpandableInfo title="Механизм действия"/>
        </Stack>
      </Stack>
    </Info>

  </PageContainer>
}

export async function  getStaticPaths() {
  const {data} = await axios.get(endpoints.product.list)
  return {
    paths: data.results.map(product => ({
      params: {id: `${product.id}`}
    })),
    fallback: 'blocking'
  }
}

export async function getStaticProps({params}) {
  const {data} = await axios.get(endpoints.product.details(params.id))
  return {props: {product: data}}
}

ProductById.propTypes = {
  product: PropTypes.object
}

export default ProductById;
