import MainLayout from 'src/layouts/main';
import HomeView from 'src/sections/_home/view/home-view';
import MarketingLandingView from 'src/sections/_marketing/view/marketing-landing-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'The starting point for your next project',
};

export default function HomePage() {
  return (
    <MainLayout>
      <MarketingLandingView />
    </MainLayout>
  );
}
