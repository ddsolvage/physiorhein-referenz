import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Award,
  ShieldCheck,
  Bone,
  PersonStanding,
  Dumbbell,
  Stethoscope,
  Bed,
  ClipboardCheck,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { placeholderImages } from '@/lib/placeholder-images';

const trustBadges = [
  { icon: Star, text: '180+ Bewertungen', subtext: 'Google & Jameda' },
  { icon: ShieldCheck, text: 'Alle Kassen', subtext: 'GKV, PKV & BG' },
];

const services = [
  {
    icon: Bone,
    title: 'Rückenschmerz & Bandscheibe',
    description: 'Akute und chronische Rückenschmerzen, Bandscheibenvorfälle, Ischias – wir kombinieren manuelle Therapie, gezielte Übungen und Alltagsschulung.',
  },
  {
    icon: PersonStanding,
    title: 'Nacken, Kopf & Kiefer (CMD)',
    description: 'Verspannungen, Kopfschmerzen, Schwindel oder Kieferbeschwerden (CMD) behandeln wir mit sanften Techniken und Haltungscoaching.',
  },
  {
    icon: Dumbbell,
    title: 'Sportphysiotherapie',
    description: 'Vom Hobbysport bis zum Leistungssport – wir helfen nach Verletzungen, Operationen und bei Überlastung zurück in Ihren Sport.',
  },
  {
    icon: Stethoscope,
    title: 'Schulter, Hüfte & Knie',
    description: 'Arthrose, Instabilitäten oder Bewegungseinschränkungen – mit aktiver Therapie bringen wir Gelenke wieder ins Spiel.',
  },
  {
    icon: Bed,
    title: 'Post-OP & Reha',
    description: 'Individuelle Nachbehandlung nach Operationen, damit Beweglichkeit, Kraft und Sicherheit gezielt zurückkehren.',
  },
  {
    icon: ClipboardCheck,
    title: 'Prävention & Workplace Health',
    description: 'Screenings, Haltungs-Checks und Präventionsprogramme für Menschen, die Schmerzen vorbeugen möchten.',
  },
];

const steps = [
  {
    step: 1,
    title: '1. Ankommen & Zuhören',
    description: 'Wir nehmen uns Zeit für Ihre Geschichte, Ihre Beschwerden und Ihre Ziele. Keine fünf-Minuten-Anamnese, sondern ein echtes Gespräch.',
  },
  {
    step: 2,
    title: '2. Analyse & Befund',
    description: 'Wir testen Beweglichkeit, Kraft, Haltung und Alltagsbelastungen. Sie verstehen danach, woher Ihre Beschwerden kommen.',
  },
  {
    step: 3,
    title: '3. Individuelle Therapie & Plan',
    description: 'Gemeinsam legen wir Behandlungsziele, sinnvolle Termine und Übungen für zuhause fest – transparent und nachvollziehbar.',
  },
];

const whyUs = [
    { title: '45 Minuten pro Behandlung', description: 'Mehr Zeit bedeutet bessere Diagnostik, gezieltere Behandlung und Raum für Ihre Fragen.' },
    { title: 'Ganzheitlicher Blick', description: 'Wir betrachten den ganzen Menschen – Bewegungsmuster, Alltag, Schlaf, Stress. Ohne esoterische Versprechen, dafür mit klarem Konzept.' },
    { title: 'Interdisziplinär vernetzt', description: 'Enge Zusammenarbeit mit Ärzt:innen, Orthopäd:innen, Osteopath:innen und Trainer:innen im Raum Wiesbaden.' },
    { title: 'Digitale Unterstützung', description: 'Übungsprogramme als App, Erinnerungen an Hausaufgaben und Video-Feedback bei Bedarf.' },
];

const testimonials = [
    {
        quote: "Nach Jahren mit Rückenschmerzen habe ich hier das erste Mal verstanden, warum ich sie habe – und was ich konkret dagegen tun kann.",
        name: "Anna L., 38",
        role: "Bürojob",
        avatar: "https://picsum.photos/seed/testimonial1/100/100"
    },
    {
        quote: "Ich hatte Angst, nie wieder richtig joggen zu können. Nach dem Kreuzbandriss hat mich PhysioRhein Schritt für Schritt zurück auf die Laufstrecke begleitet.",
        name: "Marcel R., 29",
        role: "Hobby-Läufer",
        avatar: "https://picsum.photos/seed/testimonial2/100/100"
    },
    {
        quote: "Keine Fließbandphysio, sondern echte Betreuung. Man merkt, dass hier mitgedacht wird.",
        name: "Sabine K., 52",
        role: "Patientin",
        avatar: "https://picsum.photos/seed/testimonial3/100/100"
    }
]

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              
              <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-3 bg-white p-2 pr-4 rounded-full">
                      <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                      </div>
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground">Exzellent</span>
                  </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
                Bewegung <br />
                <span className="relative inline-block">
                  zurück ins Leben.
                  <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-primary/30"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Moderne Physiotherapie & Osteopathie in Wiesbaden.
                Wir nehmen uns 45 Minuten Zeit für Ihre Geschichte statt Fließbandbehandlung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80 text-lg py-6 px-8 rounded-full">
                  <Link href="/kontakt">Termin vereinbaren</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-foreground border-gray-300 text-lg py-6 px-8 rounded-full">
                  <Link href="/kontakt#form">Rückruf anfordern</Link>
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-8">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-gray-200/70 text-gray-600 p-2 rounded-md">
                        <badge.icon className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">{badge.text}</p>
                        <p className="text-xs text-muted-foreground">{badge.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md">
                  <div className="flex items-center gap-4">
                      <div className="bg-blue-100 text-primary p-2 rounded-full">
                          <Clock className="h-5 w-5"/>
                      </div>
                      <div>
                          <p className="font-bold text-foreground">45 Min. Termine</p>
                          <p className="text-sm text-muted-foreground">Zeit für echte Gesundheit.</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Wir helfen, wenn Schmerzen Ihren Alltag bestimmen.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Statt generischer Standardprogramme entwickeln wir individuelle Behandlungspläne, die sich an Ihrem Alltag orientieren – nicht umgekehrt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col text-center items-center p-6 border-0 shadow-lg rounded-2xl bg-background transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ihr Weg zu mehr Beweglichkeit</h2>
            <p className="mt-4 text-lg text-muted-foreground">Klar in drei Schritten.</p>
          </div>
          
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:grid grid-cols-3 gap-16 items-start">
              <div className="absolute top-6 left-0 w-full h-px bg-border" />
              {steps.map((step, index) => (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-12 h-12 mb-6 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-xl ring-8 ring-background">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-12">
              {steps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl ring-8 ring-background">{step.step}</div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="link" className="text-lg text-primary underline">
              <Link href="/kontakt">
                Jetzt ersten Termin vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Warum PhysioRhein?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {whyUs.map((item, index) => (
                      <Card key={index} className="border-0 shadow-none bg-transparent">
                          <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Stimmen unserer Patienten</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                          <CardContent className="p-0 flex flex-col h-full">
                              <p className="text-muted-foreground text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                              <div className="flex items-center gap-4">
                                  <Avatar>
                                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                      <p className="font-semibold">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Contact Snippet Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
              <h3 className="text-xl font-semibold mb-4">PhysioRhein – Zentrum für moderne Physiotherapie & Osteopathie</h3>
              <p className="mb-2">Marc Weber & Team</p>
              <p className="mb-8">Rheinstraße 74, 65185 Wiesbaden</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                      <a href="https://www.google.com/maps/search/?api=1&query=Rheinstraße+74+65185+W Wiesbaden" target="_blank" rel="noopener noreferrer">Route planen</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                      <a href="tel:+496112345678">Jetzt anrufen</a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
