'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(entry.target.id));
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px' }
      );

      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el) => {
        observerRef.current?.observe(el);
      });

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleSections((prev) => new Set(prev).add(el.id));
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  if (!mounted) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <div className="h-12 bg-muted/50 rounded-lg animate-pulse mx-auto max-w-md" />
            <div className="h-6 bg-muted/30 rounded-lg animate-pulse mx-auto max-w-sm" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 bg-muted/20 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <div 
          id="privacy-header"
          data-animate
          className={`space-y-4 text-center transition-all duration-700 ${
            visibleSections.has('privacy-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">{t('title')}</h1>
          <p className="text-sm text-muted-foreground">{t('lastUpdated')}</p>
        </div>

        <div
          id="privacy-intro"
          data-animate
          className={`transition-all duration-700 delay-100 ${
            visibleSections.has('privacy-intro')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('intro')}
          </p>
        </div>

        <div className="space-y-6">
          <div
            id="privacy-1"
            data-animate
            className={`transition-all duration-700 delay-200 ${
              visibleSections.has('privacy-1')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t('collection.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('collection.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="privacy-2"
            data-animate
            className={`transition-all duration-700 delay-300 ${
              visibleSections.has('privacy-2')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t('use.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('use.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="privacy-3"
            data-animate
            className={`transition-all duration-700 delay-400 ${
              visibleSections.has('privacy-3')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t('protection.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('protection.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="privacy-4"
            data-animate
            className={`transition-all duration-700 delay-500 ${
              visibleSections.has('privacy-4')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t('rights.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('rights.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="privacy-5"
            data-animate
            className={`transition-all duration-700 delay-600 ${
              visibleSections.has('privacy-5')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>{t('cookies.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookies.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="privacy-6"
            data-animate
            className={`transition-all duration-700 delay-700 ${
              visibleSections.has('privacy-6')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle>{t('contact.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
