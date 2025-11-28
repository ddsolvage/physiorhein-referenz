'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'Vorname ist ein Pflichtfeld'),
  lastName: z.string().min(1, 'Nachname ist ein Pflichtfeld'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Bitte wählen Sie einen Betreff'),
  message: z.string().min(10, 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const openingHours = [
    { day: "Montag – Donnerstag:", time: "08:00 – 19:00 Uhr" },
    { day: "Freitag:", time: "08:00 – 15:00 Uhr" },
    { day: "Samstag:", time: "nach Vereinbarung" },
];

function KontaktForm() {
    const { toast } = useToast();
    const form = useForm<ContactFormValues>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
    });
  
    function onSubmit(data: ContactFormValues) {
      console.log(data);
      toast({
        title: "Anfrage gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      });
      form.reset();
    }
  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vorname *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachname *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail *</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefonnummer (empfohlen)</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Worum geht es? *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Rückenschmerzen">Rückenschmerzen</SelectItem>
                    <SelectItem value="Sportverletzung">Sportverletzung</SelectItem>
                    <SelectItem value="Kopfschmerzen/Kiefer">Kopfschmerzen/Kiefer</SelectItem>
                    <SelectItem value="Nach OP">Nach OP</SelectItem>
                    <SelectItem value="Allgemeine Anfrage">Allgemeine Anfrage</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ihre Nachricht *</FormLabel>
                <FormControl>
                  <Textarea placeholder="" rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <p className="text-xs text-muted-foreground mb-4">
                Bitte beachten Sie: Dieses Formular ersetzt keine medizinische Notfallversorgung. In dringenden Fällen wenden Sie sich an den ärztlichen Notdienst.
            </p>
            <Button type="submit" className="w-full md:w-auto" size="lg">Anfrage senden</Button>
            <p className="text-xs text-muted-foreground mt-4">
                Antwort innerhalb von 24 Stunden.
            </p>
          </div>
        </form>
      </Form>
    );
}

export default function KontaktPage() {
    return (
        <div className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="p-6 rounded-2xl shadow-lg">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">PhysioRhein – Zentrum für moderne Physiotherapie &amp; Osteopathie</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <div className="text-muted-foreground">
                                            Rheinstraße 74<br/>65185 Wiesbaden
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <a href="tel:+496112345678" className="text-muted-foreground hover:text-primary">+49 (0)611 2345678</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <a href="mailto:hallo@physiorhein.de" className="text-muted-foreground hover:text-primary">hallo@physiorhein.de</a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="p-6 rounded-2xl shadow-lg">
                            <CardHeader className="p-0 mb-4 flex flex-row items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                <CardTitle className="text-xl">Öffnungszeiten</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="space-y-2">
                                    {openingHours.map(item => (
                                        <div key={item.day} className="flex justify-between">
                                            <span className="text-muted-foreground">{item.day}</span>
                                            <span className="font-semibold text-right">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="rounded-2xl shadow-lg h-[300px] overflow-hidden">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.955431696238!2d8.23232367709798!3d50.06780781534976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd91762e1d1679%3A0xe54335c02283a675!2sRheinstra%C3%9Fe%2074%2C%2065185%20Wiesbaden%2C%20Germany!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Praxisstandort auf Google Maps"
                            ></iframe>
                        </Card>
                    </div>
                    <div id="form" className="lg:col-span-3">
                        <Card className="p-8 rounded-2xl shadow-lg">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl">Kontaktformular</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <KontaktForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
