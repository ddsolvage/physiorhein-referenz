import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from "@/lib/placeholder-images";
import { Check, ArrowRight, BookOpen, Send, Users, Sparkles, HandHeart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jobOpenings = [
    {
        title: "Physiotherapeut (m/w/d) in Voll- oder Teilzeit",
        description: "Du bist engagiert, liebst die Arbeit mit Menschen und suchst eine Praxis, in der Qualität und ein gutes Miteinander zählen? Dann bist du bei uns richtig.",
        tags: ["Vollzeit", "Teilzeit"],
    },
    {
        title: "Osteopath (m/w/d) auf freiberuflicher Basis",
        description: "Zur Erweiterung unseres ganzheitlichen Angebots suchen wir eine/n Osteopath/in zur Kooperation in unseren Räumlichkeiten.",
        tags: ["Freiberuflich"],
    },
];

const benefits = [
    {
        icon: HandHeart,
        title: "Überdurchschnittliches Gehalt",
        description: "Wir wertschätzen Ihre Arbeit mit einer attraktiven und fairen Vergütung."
    },
    {
        icon: Sparkles,
        title: "Flexible Arbeitszeiten",
        description: "Gestalten Sie Ihre Arbeitswoche so, dass sie zu Ihrem Leben passt."
    },
    {
        icon: BookOpen,
        title: "Fortbildungsbudget & -tage",
        description: "Wir investieren in Ihre fachliche Entwicklung und fördern Ihre Spezialisierungen."
    },
    {
        icon: Users,
        title: "Moderne, helle Praxisräume",
        description: "Arbeiten Sie in einer Umgebung, in der sich sowohl Patienten als auch Therapeuten wohlfühlen."
    }
];

const workEnvironment = [
    {
        title: "Teamgeist",
        description: "Wöchentliche Team-Meetings, offene Ohren und gemeinsame Mittagspausen. Wir sind mehr als nur Kollegen."
    },
    {
        title: "Qualität statt Quantität",
        description: "Mit 45-Minuten-Terminen haben Sie wirklich Zeit, auf Ihre Patienten einzugehen und die beste Behandlung zu gewährleisten."
    },
    {
        title: "Digitale Unterstützung",
        description: "Von der digitalen Dokumentation bis zur Übungs-App – wir nutzen Technik, um Ihnen den Arbeitsalltag zu erleichtern."
    }
]

const applicationSteps = [
    {
        step: 1,
        title: "Bewerbung senden",
        description: "Senden Sie uns Ihre Unterlagen (Anschreiben, Lebenslauf) per E-Mail oder über unser Kontaktformular. Wir behandeln jede Bewerbung vertraulich."
    },
    {
        step: 2,
        title: "Kennenlernen",
        description: "Wenn Ihre Qualifikationen passen, laden wir Sie zu einem ersten Gespräch ein, um uns persönlich kennenzulernen und Ihre Fragen zu klären."
    },
    {
        step: 3,
        title: "Hospitation",
        description: "Lernen Sie das Team und unsere Praxisabläufe bei einem unverbindlichen Hospitationstag kennen. So können beide Seiten prüfen, ob es passt."
    }
];

export default function JobsPage() {
    const heroImage = placeholderImages.find((p) => p.id === "about-us-hero");

    return (
        <div>
            {/* Hero Section: Warum bei uns arbeiten? */}
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
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Gestalten Sie mit uns die Zukunft der Physiotherapie.
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                            Wir sind mehr als nur eine Praxis – wir sind ein Team, das sich der Mission verschrieben hat, Physiotherapie menschlicher, moderner und effektiver zu machen. Wenn Sie eine Leidenschaft für Ihren Beruf und den Wunsch haben, wirklich etwas zu bewegen, sind Sie bei uns genau richtig.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col text-center items-center">
                                <div className="bg-white p-4 rounded-full mb-4 shadow-md">
                                    <benefit.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offene Stellen */}
            <section id="openings" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Offene Stellen</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {jobOpenings.map((job, index) => (
                            <Card key={index} className="bg-background border-none rounded-2xl shadow-lg transition-transform hover:scale-[1.02]">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold mb-2">{job.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6">{job.description}</p>
                                    <Button asChild>
                                        <Link href="#bewerbung">Mehr erfahren & bewerben</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                         <Card className="bg-background border-none rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold mb-2">Initiativbewerbung</h3>
                            <p className="text-muted-foreground mb-4">Ihre Traumstelle ist nicht dabei? Wir sind immer offen für talentierte Menschen. Überraschen Sie uns!</p>
                            <Button asChild variant="outline">
                                <Link href="/kontakt">Jetzt initiativ bewerben</Link>
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Unser Arbeitsklima */}
            <section id="arbeitsklima" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Unser Arbeitsklima: Professionell & Herzlich</h2>
                     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {workEnvironment.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                                 <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </section>

            {/* Ausbildung bei PhysioRhein */}
            <section id="ausbildung" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <div className="bg-primary/10 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Ausbildung bei PhysioRhein</h2>
                            <p className="text-muted-foreground mb-4">Wir sind eine anerkannte Ausbildungspraxis und sehen es als unsere Verantwortung, die nächste Generation von Therapeuten zu fördern. Bei uns lernen Sie nicht nur Techniken, sondern auch den ganzheitlichen Blick auf den Patienten und die Freude am Beruf.</p>
                            <p className="text-muted-foreground">Wir bieten Plätze für Pflichtpraktika im Rahmen der Physiotherapie-Ausbildung an. Senden Sie uns gerne Ihre Anfrage.</p>
                        </div>
                        <div className="bg-background p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Das erwartet Sie im Praktikum:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />1:1-Betreuung durch erfahrene Therapeuten.</li>
                                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Einblick in alle Bereiche: Von Manueller Therapie bis CMD.</li>
                                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Teilnahme an Team-Meetings und internen Fortbildungen.</li>
                                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Ein offenes, unterstützendes und motivierendes Umfeld.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* So bewerben Sie sich */}
            <section id="bewerbung" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">So bewerben Sie sich</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Ihr Weg zu uns in drei einfachen Schritten.</p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute top-8 left-8 w-px h-[calc(100%-4rem)] bg-border md:top-8 md:left-1/2 md:w-[calc(100%-4rem)] md:h-px" />
                        <div className="relative grid md:grid-cols-3 gap-16">
                        {applicationSteps.map((step) => (
                            <div key={step.step} className="relative flex md:flex-col items-center text-left md:text-center gap-6">
                            <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-2xl ring-8 ring-background flex-shrink-0">{step.step}</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Bereit, den nächsten Schritt zu gehen?</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Wir freuen uns darauf, von Ihnen zu hören und vielleicht schon bald gemeinsam Patienten zu helfen. </p>
                    <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                        <Link href="/kontakt?subject=Bewerbung">
                            <Send className="mr-2 h-5 w-5" />
                            Jetzt bewerben
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
