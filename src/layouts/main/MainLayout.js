import PropTypes from 'prop-types';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import TheMain from './TheMain';
import MainLogo from '../../components/mantra/presentational/MainLogo';
import { PATH_MAIN } from '../../routes/paths';
import Link from 'next/link';
import { ThemeSettings } from '../../components/settings';

MainLayout.propTypes = { children: PropTypes.object };

export default function MainLayout({ children }) {
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
      <TheFooter />
    </>
  )
}
