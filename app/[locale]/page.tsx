'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Headphones, Presentation, TrendingUp, BarChart3, Globe, Shield, DollarSign } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const t = useTranslations('home');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950" />
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
        
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-1.5 text-sm font-medium backdrop-blur-sm w-fit">
                <TrendingUp className="mr-2 h-4 w-4 text-blue-600" />
                {t('hero.badge')}
              </div>
              
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {t('hero.title')}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground lg:text-xl max-w-[600px]">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div className="animate-fade-in animation-delay-400">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">{t('stats.clients')}</div>
                </div>
                <div className="animate-fade-in animation-delay-600">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">{t('stats.reports')}</div>
                </div>
                <div className="animate-fade-in animation-delay-800">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">{t('stats.experience')}</div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute top-0 right-0 w-72 animate-float">
                <Card className="border-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl animate-scale-in">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-blue-100">
                      <Shield className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wide">Análisis Premium</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm opacity-90">Coyuntura económica</div>
                      <div className="text-3xl font-bold">Actualizado</div>
                      <div className="flex items-baseline gap-1">
                        <TrendingUp className="h-4 w-4 text-green-300" />
                        <span className="text-sm text-green-300">Semanal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute top-32 left-0 w-64 animate-float animation-delay-400">
                <Card className="border-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-xl animate-scale-in animation-delay-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BarChart3 className="h-4 w-4 text-cyan-600" />
                      <span className="text-xs font-medium uppercase tracking-wide">Mercados</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">USD/ARS</span>
                        <span className="text-sm font-medium text-green-600">+2.4%</span>
                      </div>
                      <div className="h-16 flex items-end gap-1">
                        <div className="w-full h-8 bg-cyan-200 dark:bg-cyan-900 rounded-sm"></div>
                        <div className="w-full h-12 bg-cyan-300 dark:bg-cyan-800 rounded-sm"></div>
                        <div className="w-full h-10 bg-cyan-200 dark:bg-cyan-900 rounded-sm"></div>
                        <div className="w-full h-14 bg-cyan-400 dark:bg-cyan-700 rounded-sm"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute bottom-0 right-12 w-60 animate-float animation-delay-800">
                <Card className="border-2 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-2xl animate-scale-in animation-delay-400">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-white/20 p-2">
                          <DollarSign className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium">Política Monetaria</span>
                      </div>
                      <div className="text-2xl font-bold">Informes especiales</div>
                      <div className="text-sm opacity-90">Eventos internacionales</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-6xl space-y-12">
          <div 
            id="services-header" 
            data-animate
            className={`space-y-4 text-center transition-all duration-700 ${
              visibleSections.has('services-header') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t('services.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div
              id="service-1"
              data-animate
              className={`transition-all duration-700 delay-100 ${
                visibleSections.has('service-1')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="mt-4">{t('services.reports.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('services.reports.description')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('services.reports.extra')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div
              id="service-2"
              data-animate
              className={`transition-all duration-700 delay-200 ${
                visibleSections.has('service-2')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-950">
                    <Headphones className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle className="mt-4">{t('services.support.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('services.support.description')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('services.support.extra')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div
              id="service-3"
              data-animate
              className={`transition-all duration-700 delay-300 ${
                visibleSections.has('service-3')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Card className="border-2 h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950">
                    <Presentation className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="mt-4">{t('services.presentations.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('services.presentations.description')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t('services.presentations.extra')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div 
                id="analysis-content"
                data-animate
                className={`space-y-6 transition-all duration-700 ${
                  visibleSections.has('analysis-content')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                <h2 className="text-3xl font-bold md:text-4xl">
                  {t('analysis.title')}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t('analysis.subtitle')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                      <BarChart3 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t('analysis.economic.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('analysis.economic.description')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t('analysis.monetary.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('analysis.monetary.description')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t('analysis.markets.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('analysis.markets.description')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div 
                id="analysis-visual"
                data-animate
                className={`relative transition-all duration-700 delay-200 ${
                  visibleSections.has('analysis-visual')
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
              >
                <div className="aspect-square overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 shadow-xl">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="rounded-lg bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur-sm">
                        <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                        <p className="text-sm font-medium">Análisis</p>
                      </div>
                      <div className="rounded-lg bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur-sm">
                        <TrendingUp className="h-8 w-8 text-cyan-600 mb-2" />
                        <p className="text-sm font-medium">Tendencias</p>
                      </div>
                      <div className="rounded-lg bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur-sm">
                        <Globe className="h-8 w-8 text-indigo-600 mb-2" />
                        <p className="text-sm font-medium">Global</p>
                      </div>
                      <div className="rounded-lg bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur-sm">
                        <FileText className="h-8 w-8 text-blue-600 mb-2" />
                        <p className="text-sm font-medium">Reportes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-gradient-to-b from-background to-muted/30">
        <div 
          id="cta-section"
          data-animate
          className={`container flex flex-col items-center gap-6 py-20 text-center md:py-32 transition-all duration-700 ${
            visibleSections.has('cta-section')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {t('cta.title')}
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            {t('cta.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 transition-transform hover:scale-105">
              {t('cta.button')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

