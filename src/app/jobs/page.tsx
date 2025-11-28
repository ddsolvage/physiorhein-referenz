import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";

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
    "Überdurchschnittliches Gehalt",
    "Flexible Arbeitszeiten",
    "Fortbildungsbudget & -tage",
    "Moderne, helle Praxisräume",
    "Wöchentliche Team-Meetings",
    "Digitale Dokumentation",
];

export default function JobsPage() {
    const heroImage = placeholderImages.find((p) => p.id === "about-us-hero");

    return (
        <div>
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
                            Werde Teil von PhysioRhein
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                            Wir suchen Talente, die mit uns wachsen wollen. Wenn du eine Leidenschaft für moderne Therapie und den Wunsch hast, wirklich etwas zu bewegen, freuen wir uns auf dich.
                        </p>
                    </div>
                </div>
            </section>

            <section id="openings" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Offene Stellen</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6">{job.description}</p>
                                <Button asChild>
                                    <Link href="/kontakt">Jetzt bewerben</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="benefits" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Was wir bieten</h2>
                     <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
                        {benefits.map(benefit => (
                            <div key={benefit} className="flex items-center gap-4">
                                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                     </div>
                </div>
            </section>
        </div>
    );
}
