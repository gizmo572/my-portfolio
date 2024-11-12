import { Card } from './ui/card'
import SocialLinks from './social-links';
import NavBar from './navbar';
import CardContents from './card-content';
import { Suspense } from 'react';
import { CardContentsSkeleton } from './ui/skeletons';

export default function Header() {

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 text-foreground transition-colors duration-200">
      <Card className={`backdrop-blur-xl bg-secondary/10 m-2 border-none`}>
        <Suspense fallback={<CardContentsSkeleton />}>
          <CardContents />
        </Suspense>
      </Card>
      <nav className="hidden lg:flex flex-col space-y-4 max-w-md mx-auto">
        <NavBar />
      </nav>
      <SocialLinks />
    </header>
  )
}