'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold md:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <Card className="border-2 animate-fade-in-up animation-delay-200">
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
          <Card className="border-2 animate-fade-in-up animation-delay-400">
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

          <Card className="border-2 animate-fade-in-up animation-delay-600">
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

        <Card className="border-2 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 animate-fade-in-up animation-delay-800">
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
  );
}

