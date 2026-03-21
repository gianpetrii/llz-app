'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
  const t = useTranslations('about');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setMounted(true);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <div className="h-12 bg-muted/50 rounded-lg animate-pulse mx-auto max-w-md" />
            <div className="h-6 bg-muted/30 rounded-lg animate-pulse mx-auto max-w-xl" />
          </div>
          <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-48 bg-muted/20 rounded-lg animate-pulse" />
          </div>
          <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div 
          id="about-header"
          data-animate
          className={`space-y-4 text-center transition-all duration-700 ${
            visibleSections.has('about-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl font-bold md:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div
          id="mission-card"
          data-animate
          className={`transition-all duration-700 delay-100 ${
            visibleSections.has('mission-card')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">{t('mission.title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p className="text-base leading-relaxed">
              {t('mission.p1')}
            </p>
            <p className="text-base leading-relaxed">
              {t('mission.p2')}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <div
            id="vision-card"
            data-animate
            className={`transition-all duration-700 delay-200 ${
              visibleSections.has('vision-card')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                    <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle>{t('vision.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="approach-card"
            data-animate
            className={`transition-all duration-700 delay-300 ${
              visibleSections.has('approach-card')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950">
                    <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>{t('approach.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('approach.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          id="team-section"
          data-animate
          className={`space-y-6 transition-all duration-700 delay-400 ${
            visibleSections.has('team-section')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">{t('team.title')}</h2>
            <p className="text-muted-foreground">{t('team.subtitle')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-2xl font-bold text-blue-600 dark:text-blue-400">
                    LL
                  </div>
                  <div>
                    <CardTitle className="text-lg">{t('team.member1.name')}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t('team.member1.role')}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t('team.member1.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-950 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    LL
                  </div>
                  <div>
                    <CardTitle className="text-lg">{t('team.member2.name')}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t('team.member2.role')}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t('team.member2.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    EZ
                  </div>
                  <div>
                    <CardTitle className="text-lg">{t('team.member3.name')}</CardTitle>
                    <p className="text-sm text-muted-foreground">{t('team.member3.role')}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t('team.member3.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          id="clients-card"
          data-animate
          className={`transition-all duration-700 delay-500 ${
            visibleSections.has('clients-card')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-2 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-2xl">{t('clients.title')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-semibold">{t('clients.investors.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('clients.investors.description')}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">{t('clients.companies.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('clients.companies.description')}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">{t('clients.professionals.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('clients.professionals.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}

