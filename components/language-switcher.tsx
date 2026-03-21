"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState, useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Globe className="h-5 w-5" />
      </Button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 w-32 rounded-md border bg-popover p-1 shadow-md">
            <button
              onClick={() => switchLocale('es')}
              className={`w-full rounded-sm px-3 py-2 text-sm text-left hover:bg-accent ${
                locale === 'es' ? 'bg-accent font-medium' : ''
              }`}
            >
              Español
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`w-full rounded-sm px-3 py-2 text-sm text-left hover:bg-accent ${
                locale === 'en' ? 'bg-accent font-medium' : ''
              }`}
            >
              English
            </button>
          </div>
        </>
      )}
    </div>
  );
}
