// i18n
import '../locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// utils
import createEmotionCache from '../utils/createEmotionCache';
// theme
import ThemeProvider from '../theme';
// locales
import ThemeLocalization from '../locales';
// components
import ProgressBar from '../components/progress-bar';
import SnackbarProvider from '../components/snackbar';
import { MotionLazyContainer } from '../components/animate';
import { ThemeSettings, SettingsProvider } from '../components/settings';

// Check our docs
// https://docs.minimals.cc/authentication/js-version

import { AuthProvider } from '../auth/JwtContext';
import MainLayout from '../layouts/main';

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>The Mantra Shop</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <SettingsProvider>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeLocalization>
                <SnackbarProvider>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                </SnackbarProvider>
              </ThemeLocalization>
            </ThemeProvider>
          </MotionLazyContainer>
        </SettingsProvider>
      </AuthProvider>
    </CacheProvider>
  );
}
