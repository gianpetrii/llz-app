"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t('form.success'), {
      description: t('form.successDescription'),
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!mounted) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <div className="h-12 bg-muted/50 rounded-lg animate-pulse mx-auto max-w-md" />
            <div className="h-6 bg-muted/30 rounded-lg animate-pulse mx-auto max-w-xl" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="h-32 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-32 bg-muted/20 rounded-lg animate-pulse" />
            <div className="h-32 bg-muted/20 rounded-lg animate-pulse" />
          </div>
          <div className="h-96 bg-muted/20 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div 
          id="contact-header"
          data-animate
          className={`space-y-4 text-center transition-all duration-700 ${
            visibleSections.has('contact-header')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl font-bold md:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            id="contact-info-1"
            data-animate
            className={`transition-all duration-700 delay-100 ${
              visibleSections.has('contact-info-1')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="h-5 w-5 text-blue-600" />
                {t('email')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">contacto@llz.com.ar</p>
            </CardContent>
          </Card>
          </div>

          <div
            id="contact-info-2"
            data-animate
            className={`transition-all duration-700 delay-200 ${
              visibleSections.has('contact-info-2')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  {t('schedule')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {t('scheduleText')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            id="contact-info-3"
            data-animate
            className={`transition-all duration-700 delay-300 ${
              visibleSections.has('contact-info-3')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  {t('location')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('locationText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          id="contact-form"
          data-animate
          className={`transition-all duration-700 delay-400 ${
            visibleSections.has('contact-form')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl">{t('form.title')}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {t('form.subtitle')}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('form.name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t('form.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('form.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">{t('form.company')}</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder={t('form.companyPlaceholder')}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('form.message')}</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('form.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                {loading ? t('form.sending') : (
                  <>
                    {t('form.submit')}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}

