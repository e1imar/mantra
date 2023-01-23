import styled from '@emotion/styled';
import { Collapse, Stack } from '@mui/material';
import Plus from '../icon-like/Plus';
import { useState } from 'react';


const ExpandableInfoText = styled.p`
  font: var(--font-roboto);
  color: var(--gray-light);
  line-height: 21px;
  letter-spacing: var(--letter-spacing-main);
`;

const ExpandableInfoHeadingBig = styled.h3`
  color: #fff;
  font: var(--font-robot-heading);
  padding: 15px 0;
`;

const ExpandableInfoHeadingSmall = styled(ExpandableInfoHeadingBig)`
  font-size: 16px;
  padding: 8px 0;
`;

export default function ExpandableInfo({ title, text, isHead }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Stack mb={isOpen ? '22px' : ''} borderBottom="2px solid var(--gray-heavy)" justifyContent="space-between" direction="row" alignItems="center">
        {
          isHead ?
            <ExpandableInfoHeadingBig>{ title }</ExpandableInfoHeadingBig>
            :
            <ExpandableInfoHeadingSmall>{ title }</ExpandableInfoHeadingSmall>
        }
        {!isHead && <Plus onClick={() => setIsOpen(!isOpen)} />}
      </Stack>
      <Collapse in={isOpen || isHead}>
        <ExpandableInfoText>
          { text }
        </ExpandableInfoText>
      </Collapse>
    </section>
  )
}
