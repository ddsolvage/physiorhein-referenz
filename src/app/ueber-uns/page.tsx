import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { Ear, BrainCircuit, Dumbbell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    id: "marc-weber",
    name: "Marc Weber",
    title: "Inhaber & Leitender Physiotherapeut",
    bio: [
      "Staatlich anerkannter Physiotherapeut",
      "Zertifiziert in Manueller Therapie, Sportphysiotherapie & Osteopathie (i.A.)",
      "Ehemaliger Athlet im Leichtathletikbereich",
    ],
    philosophy: "Mir war schnell klar, dass ich keine Praxis führen möchte, in der Patient:innen im 15-Minuten-Takt durchgeschleust werden. PhysioRhein ist mein Gegenentwurf: mehr Zeit, mehr Zuhören, mehr Qualität.",
  },
  {
    id: "sofia-mendes",
    name: "Sofia Mendes",
    title: "Physiotherapeutin M.Sc. Sportphysiotherapie",
    bio: [
        "Schwerpunkte: Knie, Sprunggelenk, Return-to-Sport nach Verletzungen.",
    ],
  },
  {
    id: "lara-koenig",
    name: "Dr. med. Lara König",
    title: "Ärztliche Kooperationspartnerin (Orthopädie)",
    bio: [
      "Unterstützt bei komplexen Fällen, Befundinterpretation und interdisziplinären Fragestellungen.",
    ],
  },
];

const philosophyPoints = [
    {
        icon: Ear,
        text: "Wir hören zu, bevor wir behandeln."
    },
    {
        icon: BrainCircuit,
        text: "Wir erklären, bevor wir belasten."
    },
    {
        icon: Dumbbell,
        text: "Wir machen Sie stark, statt Sie abhängig zu machen."
    }
];

export default function UeberUnsPage() {
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
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Wir behandeln Menschen, nicht nur Diagnosen.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                        PhysioRhein wurde 2021 von Marc Weber gegründet, um einen Ort für moderne, menschliche Physiotherapie in Wiesbaden zu schaffen. Ein Ort, an dem sich Patient:innen verstanden fühlen und echte Fortschritte erleben.
                    </p>
                </div>
                </div>
            </section>

            <section id="team" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Unser Team</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => {
                            const memberImage = placeholderImages.find(p => p.id === member.id);
                            return (
                                <Card key={member.name} className="bg-white rounded-2xl shadow-lg border-none overflow-hidden text-center">
                                    {memberImage && (
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={memberImage.imageUrl}
                                                alt={memberImage.description}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={memberImage.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader className="p-6">
                                        <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                                        <p className="text-primary font-medium">{member.title}</p>
                                    </CardHeader>
                                    <CardContent className="p-6 pt-0">
                                        <ul className="space-y-2 text-left text-muted-foreground list-disc pl-4 mb-4">
                                            {member.bio.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                        {member.philosophy && (
                                            <blockquote className="border-l-4 border-primary pl-4 text-left italic text-muted-foreground">
                                                {member.philosophy}
                                            </blockquote>
                                        )}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Unser Therapieansatz</h2>
                        <p className="mt-4 text-lg text-muted-foreground">In drei klaren Schritten zu Ihrer Genesung.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-12">
                        {philosophyPoints.map((point, index) => (
                             <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                                <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                                    <point.icon className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-xl font-semibold text-foreground">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Button asChild size="lg">
                            <Link href="/kontakt">
                                Jetzt Erstgespräch vereinbaren
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
