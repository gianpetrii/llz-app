"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">LLZ macro y finanzas</h3>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">{t('navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">{t('services')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{t('weeklyReports')}</li>
              <li className="text-muted-foreground">{t('technicalSupport')}</li>
              <li className="text-muted-foreground">{t('presentations')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">{t('legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

