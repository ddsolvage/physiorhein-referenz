
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Briefcase, Dumbbell, Shield, Star, Award, HeartPulse, Target, Video } from "lucide-react";
import Link from 'next/link';

const testimonials = [
    {
        quote: "Ich sitze den ganzen Tag im Büro und hatte immer Angst vor 'Rücken'. Das Präventions-Screening hat mir meine Schwachstellen gezeigt und ich habe ein super einfaches Programm bekommen. Fühle mich viel sicherer.",
        name: "Jonas E.",
        role: "Consultant, 31",
    },
    {
        quote: "Als Läuferin wollte ich Verletzungen vorbeugen. Die Laufanalyse und das gezielte Krafttraining haben nicht nur mein Verletzungsrisiko gesenkt, sondern mich auch schneller gemacht. Top Investition!",
        name: "Katrin F.",
        role: "Hobbyläuferin, 44",
    }
];

const faqs = [
    {
        question: "Ich habe doch gar keine Schmerzen. Warum sollte ich zur Prävention kommen?",
        answer: "Das ist der beste Zeitpunkt! Prävention bedeutet, Probleme zu beheben, bevor sie zu Schmerzen führen. Schwache Muskeln, unsaubere Bewegungsmuster oder schlechte Haltung sind oft lange symptomfrei, bis es 'knallt'. Wir helfen Ihnen, diese Risikofaktoren frühzeitig zu erkennen und zu beheben."
    },
    {
        question: "Ist das nicht einfach nur Fitness-Training?",
        answer: "Nein. Unser Ansatz ist medizinisch und sportwissenschaftlich fundiert. Wir machen keine Standard-Fitnessübungen, sondern eine genaue Analyse Ihrer individuellen Statik, Beweglichkeit und Kraft. Darauf basierend erstellen wir einen hochspezifischen Plan, der Ihre persönlichen Schwachstellen adressiert."
    },
    {
        question: "Wie läuft so ein Gesundheits-Check-up ab?",
        answer: "In der Regel umfasst ein Check-up ein ausführliches Gespräch über Ihre Ziele und Alltagsbelastungen, eine Haltungs- und Bewegungsanalyse (z.B. auf dem Laufband mit Videoanalyse) und spezifische Kraft- und Mobilitätstests. Am Ende erhalten Sie eine verständliche Auswertung und einen konkreten Maßnahmenplan."
    },
    {
        question: "Übernimmt die Krankenkasse die Kosten für Prävention?",
        answer: "Präventionsleistungen sind in der Regel Selbstzahlerleistungen. Einige Krankenkassen bezuschussen jedoch Präventionskurse oder bieten Bonusprogramme an. Eine Investition in Prävention ist aber die beste Investition in Ihre langfristige Gesundheit und spart oft hohe Folgekosten."
    },
    {
        question: "Wie oft sollte man zur Prävention kommen?",
        answer: "Für einen umfassenden Check-up empfehlen wir einen Termin alle 1-2 Jahre. Je nach individuellem Risiko oder sportlichen Zielen können auch kürzere Abstände für ein 'Update' Ihres Trainingsplans sinnvoll sein. Wir beraten Sie dazu ganz individuell."
    }
];

const typicalIssues = [
    "Haltungs-Check & Ergonomieberatung für den Büroalltag",
    "Bewegungsanalyse (z.B. Laufanalyse) zur Technikoptimierung",
    "Kraft- und Stabilitäts-Screening zur Verletzungsprophylaxe",
    "Individuelle Trainingsplanerstellung und -steuerung",
    "Vorbereitung auf sportliche Wettkämpfe oder Ziele",
    "Gesundheitscoaching für einen aktiveren Lebensstil"
];

const outcomes = [
    { icon: Shield, text: "Geringeres Verletzungsrisiko" },
    { icon: Activity, text: "Verbesserte Körperhaltung & -wahrnehmung" },
    { icon: Dumbbell, text: "Steigerung von Kraft & Leistungsfähigkeit" },
    { icon: BrainCircuit, text: "Effizientere Bewegungsmuster" },
    { icon: HeartPulse, text: "Langfristiger Erhalt der Gesundheit" },
    { icon: Award, text: "Nachhaltig mehr Lebensqualität" }
];


export default function PraeventionPage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">Vorausschauende Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Prävention & Coaching</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Investieren Sie in Ihre Zukunft: Beschwerden vorbeugen, bevor sie entstehen, und Ihre Leistung nachhaltig steigern.
                    </p>
                </div>
            </section>
            
            {/* 2. PROBLEM -> LÖSUNG */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold mb-4">Was Sie vermutlich kennen</h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie haben keine akuten Schmerzen, fühlen sich aber oft steif oder unausgeglichen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie möchten mit einem neuen Sport beginnen, haben aber Angst, etwas falsch zu machen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie merken, dass die einseitige Belastung im Job oder Sport ihren Tribut fordert.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie wollen proaktiv etwas für Ihre Gesundheit tun, wissen aber nicht, wo Sie anfangen sollen.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir warten nicht auf den Schmerz, sondern analysieren Risikofaktoren.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Mit modernen Screening-Verfahren decken wir Ihre individuellen Schwachstellen auf.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Sie erhalten einen maßgeschneiderten Plan zur Leistungssteigerung und Verletzungsprophylaxe.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir coachen Sie zu einem gesünderen Lebensstil – verständlich und alltagstauglich.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ihr Weg zur nachhaltigen Gesundheit</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Unser proaktiver Ansatz in 3 Schritten.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <Target className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Ziel & Analyse</h3>
                            <p className="text-muted-foreground">Was wollen Sie erreichen? Schmerzfreiheit, Leistungssteigerung? Wir führen einen umfassenden Check-up Ihrer Bewegungsmuster, Kraft und Haltung durch.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Video className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Auswertung & Plan</h3>
                            <p className="text-muted-foreground">Sie erhalten eine verständliche Auswertung Ihrer Ergebnisse (z.B. per Videoanalyse) und einen konkreten, priorisierten Plan mit Übungen und Verhaltenstipps.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <User className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Coaching & Umsetzung</h3>
                            <p className="text-muted-foreground">Wir begleiten Sie bei der Umsetzung, passen den Plan regelmäßig an und geben Ihnen das Wissen an die Hand, um langfristig selbstständig gesund zu bleiben.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Unsere Präventions-Angebote</h2>
                        <div className="columns-1 md:columns-2 gap-x-12 space-y-4">
                            {typicalIssues.map((issue) => (
                                <div key={issue} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                    <p>{issue}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* 5. FÜR WEN GEEIGNET? */}
             <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Für wen ist Prävention ideal?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <Briefcase className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Vielsitzer & Büroathleten</h3>
                            <p className="text-sm text-muted-foreground">die Haltungsschäden und Verspannungen aktiv vorbeugen wollen, bevor sie zum Problem werden.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Dumbbell className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Ambitionierte Sportler</h3>
                            <p className="text-sm text-muted-foreground">die ihre Leistung optimieren und das Verletzungsrisiko durch gezielte Analysen minimieren wollen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <HeartPulse className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Gesundheitsbewusste Menschen</h3>
                            <p className="text-sm text-muted-foreground">jeden Alters, die in ihre körperliche Zukunft investieren und lange fit und aktiv bleiben möchten.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. OUTCOME / ERGEBNISSE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Ihre Investition in sich selbst</h2>
                     <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
                         {outcomes.map((outcome) => (
                             <div key={outcome.text} className="flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-3">
                                    <outcome.icon className="w-7 h-7 text-primary"/>
                                </div>
                                <p className="font-semibold">{outcome.text}</p>
                             </div>
                         ))}
                     </div>
                </div>
            </section>

            {/* 7. TESTIMONIALS */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Erfahrungen unserer Klienten</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                             <Card key={index} className="bg-white rounded-xl p-6 shadow-lg border-none">
                                <CardContent className="p-0">
                                    <div className="flex items-center gap-1 text-yellow-500 mb-4">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current"/>)}
                                    </div>
                                    <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-primary">
                                            {testimonial.name.charAt(0)}
                                        </div>
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

            {/* 8. FAQ */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Häufig gestellte Fragen</h2>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-2xl shadow-md border-none">
                                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                                        <span className="font-semibold text-lg">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0 text-muted-foreground text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

             {/* 9. ABSCHLUSS-CTA */}
             <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 md:py-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Handeln, bevor der Schmerz kommt.</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Nehmen Sie Ihre Gesundheit selbst in die Hand. Buchen Sie jetzt Ihren individuellen Gesundheits-Check-up und legen Sie den Grundstein für eine fitte Zukunft.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20Prävention/Coaching">
                            Jetzt Check-up buchen <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
