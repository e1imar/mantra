import { Button, Collapse, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { getMainColor } from '../../../../utils/cssStyles';

const Title = styled.h2`
  font: var(--font-roboto);
  letter-spacing: var(--letter-spacing-main);
`;

const RedCircle = styled.div`
  background-color: ${getMainColor};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChildrenWrapper = styled(Stack)`
  margin-left: 14px;
  border-left: 1px solid var(--gray-darker);
  padding: 23px 0 23px 43px;
`;

export default function CartPageStep({ btnClicked, icon: Icon , children, title, isOpen, btnLabel = 'Далее' }) {
  return (
    <section>
      <header>
        <Stack direction="row" alignItems="center" spacing="12px" mb="12px">
          <RedCircle>
            <Icon />
          </RedCircle>
          <Title>{ title }</Title>
        </Stack>
      </header>
      <Collapse in={isOpen}>
        <ChildrenWrapper spacing="34px">
          {children}
          <Button onClick={() => btnClicked?.()} style={{ alignSelf: 'flex-end' }}>
            {btnLabel}
          </Button>
        </ChildrenWrapper>
      </Collapse>
    </section>
  );
}
