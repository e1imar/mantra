import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import Image from 'next/image';
import IsAvailable from '../../components/mantra/presentational/IsAvailable';
import { getMainColor } from '../../utils/cssStyles';
import ExpandableInfo from '../../components/mantra/presentational/ExpandableInfo';

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

const ProductById = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <PageContainer>

      <ProductCard>
        <ImageWrapper>
          <Image src="https://themantra.ru/media/products/Mind_350.jpg" layout="fill" />
        </ImageWrapper>

        <Stack borderBottom="var(--border)" pb="7px" pt="7px" justifyContent="space-between" alignItems="center" direction="row">
          <IsAvailable />
          <Text>
            790 RUB
          </Text>
        </Stack>

        <Stack borderBottom="var(--border)" p="22px 0" justifyContent="space-between" alignItems="center" direction="row">
          <Text>
            790 RUB
          </Text>
          <IsAvailable />
        </Stack>

        <Stack borderBottom="var(--border)" p="27px 0" justifyContent="space-between" alignItems="center" direction="row">
          <Text>
            790 RUB
          </Text>
          <IsAvailable />
        </Stack>

        <Stack pt="44px" justifyContent="center" alignItems="center">
          <Button>
            В корзину
          </Button>
        </Stack>
      </ProductCard>

      <Info>
        <Stack spacing={3}>
          <ExpandableInfo isHead title="Львиная Грива (Lion's Mane Mushroom)" text="Львиная грива (Lion's Mane) – это съедобный гриб, растущий на деревьях в Северной Америке, Европе и Азии. Свое названия получил благодаря внешнему виду, похожему на гриву льва. Обладает ноотропными свойствами и полезен для улучшения когнитивных функций, борьбы с усталостью и улучшения настроения." />
          <ExpandableInfo isHead title="Основные эффекты" text="Способствует нормализации кровообращения. Укрепляет память и продуктивность работы головного мозга. Способствует укреплению физической выносливости Повышает иммунитет, дарит телу силы побеждать заболевания" />
          <Stack spacing={1}>
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
            <ExpandableInfo title="Механизм действия" />
          </Stack>
        </Stack>
      </Info>

    </PageContainer>
  )
};

export default ProductById;
