"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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

  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold md:text-5xl">{t('title')}</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 animate-fade-in-up animation-delay-200">
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

          <Card className="border-2 animate-fade-in-up animation-delay-400">
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

          <Card className="border-2 animate-fade-in-up animation-delay-600">
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

        <Card className="border-2 animate-fade-in-up animation-delay-800">
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
  );
}

