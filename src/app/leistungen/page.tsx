
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from "@/lib/placeholder-images";
import { ArrowRight, Bone, BrainCircuit, CheckCircle2, CircleDollarSign, Dumbbell, HeartPulse, PersonStanding, ShieldCheck, Star, Stethoscope, UserCheck, Users } from "lucide-react";

const services = [
    {
        icon: Bone,
        title: "Rückenschmerz-Therapie",
        benefit: "Für einen Alltag ohne ständige Belastung.",
        href: "/leistungen/rueckenschmerzen"
    },
    {
        icon: Dumbbell,
        title: "Sportphysiotherapie",
        benefit: "Schneller & sicher zurück zur vollen Leistung.",
        href: "/leistungen/sportphysiotherapie"
    },
    {
        icon: PersonStanding,
        title: "Manuelle Therapie",
        benefit: "Blockaden lösen, Beweglichkeit zurückgewinnen.",
        href: "/leistungen/manuelle-therapie"
    },
    {
        icon: PersonStanding,
        title: "Osteopathie",
        benefit: "Die Ursache finden, nicht nur das Symptom behandeln.",
        href: "/leistungen/osteopathie"
    },
    {
        icon: BrainCircuit,
        title: "CMD-Behandlung / Kiefer",
        benefit: "Weniger Druck, weniger Kopfschmerz, bessere Funktion.",
        href: "/leistungen/cmd"
    },
    {
        icon: ShieldCheck,
        title: "Prävention & Coaching",
        benefit: "Beschwerden vorbeugen, bevor sie entstehen.",
        href: "/leistungen/praevention"
    },
];

const treatmentSteps = [
    {
        step: "01",
        title: "Anamnese & Analyse",
        description: "Wir hören Ihnen zu und nehmen uns Zeit für Ihre Geschichte. Eine fundierte Bewegungsanalyse zeigt uns die Ursachen Ihrer Beschwerden."
    },
    {
        step: "02",
        title: "Individuelle Therapie",
        description: "Basierend auf der Analyse erstellen wir einen maßgeschneiderten Plan aus aktiven Übungen und manuellen Techniken, der exakt zu Ihnen passt."
    },
    {
        step: "03",
        title: "Nachhaltiger Erfolg",
        description: "Wir geben Ihnen die richtigen Werkzeuge an die Hand, damit Sie auch zu Hause aktiv bleiben und langfristig schmerzfrei werden können."
    }
];

const whyUsPoints = [
    {
        icon: HeartPulse,
        title: "45 Minuten pro Behandlung",
        description: "Wir nehmen uns Zeit für eine gründliche Diagnostik und eine wirksame Therapie."
    },
    {
        icon: Users,
        title: "100% individuelle Betreuung",
        description: "Bei uns gibt es keine Standardprogramme, sondern nur auf Sie zugeschnittene Pläne."
    },
    {
        icon: UserCheck,
        title: "Ganzheitlich ohne Esoterik",
        description: "Wir betrachten den ganzen Menschen – wissenschaftsbasiert und nachvollziehbar."
    },
    {
        icon: BrainCircuit,
        title: "Sportwissenschaftliche Expertise",
        description: "Modernste Erkenntnisse aus Training und Therapie für bestmögliche Ergebnisse."
    },
];


export default function LeistungenPage() {
    const heroImage = placeholderImages.find((p) => p.id === "services-hero");

    return (
        <div className="bg-background">
            {/* 1. HERO-SEKTION */}
            <section className="relative bg-white pt-20 pb-16 md:pt-32 md:pb-24">
                {heroImage && (
                    <div className="absolute inset-0">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover object-center"
                            data-ai-hint={heroImage.imageHint}
                            priority
                        />
                         <div className="absolute inset-0 bg-background/80" />
                    </div>
                )}
                <div className="container mx-auto px-4 relative text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                           Unsere Leistungen – modern, individuell, wissenschaftsbasiert.
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                            Wir lösen Beschwerden, verbessern Ihre Beweglichkeit und geben Ihnen Lebensqualität zurück.
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <a href="#uebersicht">Behandlung wählen</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. KURZ-ÜBERSICHT DER LEISTUNGEN */}
            <section id="uebersicht" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="bg-white rounded-2xl p-8 shadow-lg border-none flex flex-col text-center items-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{service.benefit}</p>
                                <Button asChild variant="link" className="text-primary mt-auto">
                                    <Link href={service.href}>Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. TRUST-ELEMENTE */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                <Star className="w-6 h-6 fill-current"/>
                                <Star className="w-6 h-6 fill-current"/>
                                <Star className="w-6 h-6 fill-current"/>
                                <Star className="w-6 h-6 fill-current"/>
                                <Star className="w-6 h-6 fill-current"/>
                            </div>
                            <p className="text-lg font-semibold">4.9 Sterne</p>
                            <p className="text-muted-foreground">aus über 180 Bewertungen</p>
                        </div>
                        <div className="flex flex-col items-center">
                             <div className="bg-primary/10 p-3 rounded-full mb-2">
                                <ShieldCheck className="w-8 h-8 text-primary"/>
                            </div>
                            <p className="text-lg font-semibold">TÜV-geprüfte Qualität</p>
                            <p className="text-muted-foreground">Regelmäßige Fortbildungen</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-primary/10 p-3 rounded-full mb-2">
                                <UserCheck className="w-8 h-8 text-primary"/>
                            </div>
                            <p className="text-lg font-semibold">Über 10 Jahre Erfahrung</p>
                            <p className="text-muted-foreground">in moderner Physiotherapie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ihr Weg zur Besserung – Klar und transparent</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Bei uns wissen Sie immer, was passiert. Unser 3-Schritte-Modell sorgt für maximale Transparenz und beste Ergebnisse.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {treatmentSteps.map((step) => (
                            <div key={step.step} className="bg-white p-8 rounded-2xl shadow-lg border-none text-center">
                                <span className="text-5xl font-extrabold text-primary/20">{step.step}</span>
                                <h3 className="text-2xl font-bold mt-4 mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 5. WARUM WIR? */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Therapie statt Fließband</h2>
                         <p className="mt-4 text-lg text-muted-foreground">Was uns von anderen Praxen unterscheidet.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyUsPoints.map((point) => (
                            <div key={point.title} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl">
                                 <div className="bg-white p-3 rounded-full mb-4 shadow-md">
                                    <point.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                                <p className="text-muted-foreground text-sm">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 6. KONDITIONS-KARTE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                             <div className="flex items-center gap-3 text-primary mb-4">
                                <CircleDollarSign className="w-8 h-8"/>
                                <h2 className="text-2xl font-bold">Kosten & Erstattung</h2>
                            </div>
                           
                            <p className="text-muted-foreground">Wir behandeln Patienten aller gesetzlichen und privaten Krankenkassen sowie Selbstzahler. Osteopathie wird von vielen Kassen anteilig erstattet. Wir beraten Sie gerne transparent zu allen Möglichkeiten.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0"/>
                                <span>Alle gesetzlichen Kassen (GKV)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0"/>
                                <span>Alle privaten Kassen (PKV)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0"/>
                                <span>Selbstzahler & Prävention</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* 7. ABSCHLUSS-CTA */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Bereit, Ihre Beschwerden anzugehen?</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mb-8">Wählen Sie Ihre passende Behandlung und sichern Sie sich Ihren Termin in einer Praxis, die sich wirklich Zeit für Sie nimmt.</p>
                    <Button asChild size="lg" className="text-lg py-7 px-10">
                        <Link href="/kontakt?subject=Terminanfrage">
                            Jetzt Termin sichern
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
    );
}
