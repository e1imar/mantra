import ExpandableInfo from '../components/mantra/presentational/ExpandableInfo';
import { Stack } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';


const FAQ_LIST = [
  {
    title: 'Что такое ноотропы?',
    text: '',
  },
  {
    title: 'Как принимать ноотропы?',
    text: '',
  },
  {
    title: 'Легальны ли ноотропы?',
    text: '',
  },
  {
    title: 'Ноотропы это плацебо?',
    text: '',
  },
  {
    title: 'Есть ли у ноотропов побочные эффекты?',
    text: '',
  },
  {
    title: 'Для чего используются ноотропы?',
    text: '',
  },
]

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 290px;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
  
  max-width: 760px;
  margin: 0 auto;
`;

export default function FAQ() {
  return (
    <Container>
      <ImageWrapper>
        <Image layout="fill" src="/assets/mantra/limitless.png" />
      </ImageWrapper>
      <Stack width="100%">
        {
          FAQ_LIST.map(props => <ExpandableInfo {...props} />)
        }
      </Stack>
    </Container>
  );
}
