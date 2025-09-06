'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/#community', label: 'Community' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
          <span className="font-bold text-lg font-headline">Synchronos Technology</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80 hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="secondary" className="hidden sm:flex transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_theme(colors.secondary)] hover:shadow-[0_0_30px_#FFD700]">
              <Link href="/#community">
                Join the Movement
              </Link>
            </Button>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo className="h-10 w-auto" />
                      <span className="font-bold text-lg font-headline">Synchronos Technology</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium transition-colors hover:text-secondary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                     <Button asChild size="sm" variant="secondary" className="transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_theme(colors.secondary)] hover:shadow-[0_0_30px_#FFD700]">
                      <Link href="/#community">
                        Join the Movement
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
