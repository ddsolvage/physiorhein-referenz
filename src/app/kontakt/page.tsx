'use client'

import * as React from 'react'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

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
    { day: "Mo – Do", time: "08:00 – 19:00 Uhr" },
    { day: "Fr", time: "08:00 – 15:00 Uhr" },
    { day: "Sa", time: "nach Vereinbarung" },
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
                  <FormLabel>Vorname</FormLabel>
                  <FormControl>
                    <Input placeholder="Max" {...field} />
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
                  <FormLabel>Nachname</FormLabel>
                  <FormControl>
                    <Input placeholder="Mustermann" {...field} />
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
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="max.mustermann@email.de" {...field} />
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
                <FormLabel>Telefonnummer (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Ihre Telefonnummer" {...field} />
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
                <FormLabel>Worum geht es?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen Sie einen Grund aus" />
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
                <FormLabel>Ihre Nachricht</FormLabel>
                <FormControl>
                  <Textarea placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className="w-full md:w-auto" size="lg">Anfrage senden</Button>
            <p className="text-xs text-muted-foreground mt-4">
                Bitte beachten Sie: Dieses Formular ersetzt keine medizinische Notfallversorgung. In dringenden Fällen wenden Sie sich an den ärztlichen Notdienst.
            </p>
          </div>
        </form>
      </Form>
    );
}

function MobileContactBar() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 flex gap-2 z-40">
            <Button asChild variant="outline" className="flex-1" size="lg">
                <a href="tel:+496112345678">
                    <Phone className="mr-2 h-4 w-4"/> Anrufen
                </a>
            </Button>
            <Button asChild className="flex-1" size="lg">
                <Link href="#form">Termin anfragen</Link>
            </Button>
        </div>
    );
}

export default function KontaktPage() {
    const heroImage = placeholderImages.find((p) => p.id === "contact-hero");

    return (
        <div className="pb-20 md:pb-0">
            <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 bg-white">
                {heroImage && (
                <div className="absolute inset-0">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
                )}
                <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Lassen Sie uns über Ihre Beschwerden sprechen.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        Wir sind für Sie da. Kontaktieren Sie uns für einen Termin oder bei Fragen zu unseren Leistungen.
                    </p>
                </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Kontaktinformationen</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <p className="font-semibold">PhysioRhein</p>
                                        <p className="text-muted-foreground">Rheinstraße 74<br/>65185 Wiesbaden</p>
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
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Öffnungszeiten</h2>
                            <div className="space-y-2">
                                {openingHours.map(item => (
                                    <div key={item.day} className="flex justify-between">
                                        <span className="font-semibold">{item.day}</span>
                                        <span className="text-muted-foreground">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div id="form" className="lg:col-span-2">
                        <Card className="p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold mb-6">Termin anfragen</h2>
                            <KontaktForm />
                        </Card>
                    </div>
                </div>
            </section>

            <section className="w-full h-[400px] bg-muted">
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
            </section>
            
            <MobileContactBar />
        </div>
    );
}
