import { useState } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Divider, Drawer, Stack, Typography, Tooltip, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// config
import { NAV } from '../../../config';
//
import Iconify from '../../iconify';
import Scrollbar from '../../scrollbar';
//
import { defaultSettings } from '../config';
import { useSettingsContext } from '../SettingsContext';
import Block from './Block';
import BadgeDot from './BadgeDot';
import ToggleButton from './ToggleButton';
import ModeOptions from './ModeOptions';
import LayoutOptions from './LayoutOptions';
import StretchOptions from './StretchOptions';
import ContrastOptions from './ContrastOptions';
import DirectionOptions from './DirectionOptions';
import FullScreenOptions from './FullScreenOptions';
import ColorPresetsOptions from './ColorPresetsOptions';
import { BurgerMenu } from '../../mantra/presentational/BurgerMenu';

// ----------------------------------------------------------------------

const SPACING = 2.5;

export default function SettingsDrawer() {
  const {
    themeMode,
    themeLayout,
    themeStretch,
    themeContrast,
    themeDirection,
    themeColorPresets,
    onResetSetting,
  } = useSettingsContext();

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeLayout !== defaultSettings.themeLayout ||
    themeStretch !== defaultSettings.themeStretch ||
    themeContrast !== defaultSettings.themeContrast ||
    themeDirection !== defaultSettings.themeDirection ||
    themeColorPresets !== defaultSettings.themeColorPresets;

  return (
    <>
      {<BurgerMenu isOpen={open} notDefault={notDefault} onClick={handleToggle} />}

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          sx: {
            ...bgBlur({ color: theme.palette.background.default, opacity: 0.9 }),
            width: NAV.W_BASE,
            boxShadow: (theme) =>
              `-24px 12px 40px 0 ${alpha(
                theme.palette.mode === 'light'
                  ? theme.palette.grey[500]
                  : theme.palette.common.black,
                0.16
              )}`,
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(40, 44, 47, 0.4)',
            right: '17px',
            borderRadius: '14px',
            top: '18px',
            height: '96vh',
          },
        }}
      >

        <Scrollbar sx={{ p: SPACING, pb: 0, height: '100%' }}>
          <Stack height="100%" justifyContent="flex-end">
            <Block title="Mode">
              <ModeOptions />
            </Block>

            <Block title="Presets">
              <ColorPresetsOptions />
            </Block>
          </Stack>
        </Scrollbar>

        <Box sx={{ p: SPACING, pt: 0 }}>
          <FullScreenOptions />
        </Box>
      </Drawer>
    </>
  );
}
