import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Header from '../common/header-simple';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthBackgroundLayout({ children }: Props) {
  const theme = useTheme();

  return (
    <>
      <Header />

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          px: 2,
          py: 12,
          minHeight: '100vh',
        }}
      >
        <Stack
          spacing={4}
          sx={{
            p: 4,
            width: 1,
            mx: 'auto',
            flexShrink: 0,
            maxWidth: 400,
            borderRadius: 2,
            bgcolor: 'background.default',
            boxShadow: `-24px 24px 72px -8px 0.24`,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {children}
        </Stack>
      </Stack>
    </>
  );
}