import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { MegaMenuMobile, MegaMenuDesktopHorizon } from 'src/components/mega-menu';

import { data } from './config-navigation';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const menuOpen = useBoolean();
  /* ../assets/background/overlay_1.jpg */
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: 'src/assets/background/overlay_1.jpg',
        }),
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          height: { xs: 64, md: 72 },
        }}
      >
        {mdUp ? (
          <MegaMenuDesktopHorizon data={data} />
        ) : (
          <MegaMenuMobile
            data={data}
            open={menuOpen.value}
            onOpen={menuOpen.onTrue}
            onClose={menuOpen.onFalse}
            action={
              <Button
                color="inherit"
                onClick={menuOpen.onTrue}
                startIcon={<Iconify icon="carbon:menu" />}
              >
                Categories
              </Button>
            }
          />
        )}

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          {!mdUp && (
            <IconButton size="small" color="inherit" sx={{ p: 0 }}>
              <Iconify icon="carbon:search" width={24} />
            </IconButton>
          )}

        </Stack>
      </Container>
    </Box>
  );
}
