import PropTypes from 'prop-types';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import TheMain from './TheMain';
import MainLogo from '../../components/mantra/presentational/MainLogo';
import { PATH_MAIN } from '../../routes/paths';
import Link from 'next/link';
import { ThemeSettings } from '../../components/settings';
import { Stack } from '@mui/material';

Layout.propTypes = { children: PropTypes.object };

export default function Layout({ children }) {
  return (
    <>
      <TheHeader>
        <Link href={PATH_MAIN.root}>
          <MainLogo />
        </Link>
        <ThemeSettings />
      </TheHeader>
      <TheMain>
        {children}
      </TheMain>
      <TheFooter>
        <Stack spacing="5px" alignItems="center">
          <MainLogo />
          <span>nootropics shop</span>
        </Stack>
      </TheFooter>
    </>
  )
}
