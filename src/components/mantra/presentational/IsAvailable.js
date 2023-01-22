import styled from '@emotion/styled';
import { Stack } from '@mui/material';

const Dot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

const GreenDot = styled(Dot)`
  background-color: var(--green);
`;

const RedDot = styled(Dot)`
  background-color: var(--red);
`;

const IsAvailableText = styled.p`
  font: var(--font-roboto);
  color: var(--gray-lighter);
`;

export default function IsAvailable({ isAvailable }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
      {
        isAvailable
        ?
          <>
            <GreenDot />
            <IsAvailableText>В наличии</IsAvailableText>
          </>
        :
          <>
            <RedDot />
            <IsAvailableText>Нет в наличии</IsAvailableText>
          </>
      }
    </Stack>
  );
}
