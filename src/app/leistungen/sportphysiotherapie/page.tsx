
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Dumbbell, Shield, Star, Award, Zap, BarChart } from "lucide-react";
import Link from 'next/link';

const testimonials = [
    {
        quote: "Nach meinem Kreuzbandriss dachte ich, die Saison sei gelaufen. Das Team von PhysioRhein hat mich mit einem klaren Plan und sportartspezifischem Training schneller zurück aufs Feld gebracht, als ich es für möglich gehalten hätte.",
        name: "Lukas F.",
        role: "Amateur-Fußballer, 26",
    },
    {
        quote: "Als Läuferin hatte ich ständig mit Überlastungsbeschwerden zu kämpfen. Hier wurde nicht nur das Symptom behandelt, sondern meine Lauftechnik analysiert und mein Trainingsplan optimiert. Seitdem laufe ich schmerzfrei und schneller.",
        name: "Anja K.",
        role: "Marathonläuferin, 39",
    }
];

const faqs = [
    {
        question: "Ist Sportphysiotherapie nur für Profisportler?",
        answer: "Nein, absolut nicht. Unsere Sportphysiotherapie richtet sich an jeden, der gerne aktiv ist – vom ambitionierten Hobbysportler über den Wochenend-Krieger bis zum Fitnessstudio-Gänger. Jeder, der sich schmerzfrei bewegen und seine Leistung verbessern will, ist bei uns richtig."
    },
    {
        question: "Was ist der Unterschied zur 'normalen' Physiotherapie?",
        answer: "Die Sportphysiotherapie geht einen Schritt weiter. Sie beinhaltet nicht nur die Behandlung der Verletzung, sondern auch eine Analyse der sportartspezifischen Belastung, eine Leistungsdiagnostik und einen gezielten Plan zur Wiederaufnahme des Sports ('Return to Sport'), um erneute Verletzungen zu vermeiden."
    },
    {
        question: "Ich bin nicht verletzt, möchte aber meine Leistung steigern. Ist das auch etwas für mich?",
        answer: "Ja, definitiv. Ein großer Teil der Sportphysiotherapie ist die Prävention und Leistungsoptimierung. Durch Bewegungsanalysen, Kraft- und Mobilitätstests können wir Schwachstellen aufdecken, bevor sie zu Verletzungen führen, und Ihr Training auf ein neues Level heben."
    },
    {
        question: "Arbeiten Sie mit Geräten?",
        answer: "Ja, wir nutzen moderne, wissenschaftsbasierte Geräte für Diagnostik und Training. Dazu gehören Kraftmessplatten, Tools zur Bewegungsanalyse und Equipment für medizinisches Aufbautraining. Der Fokus liegt aber immer auf funktionellen Übungen, die Sie auch zu Hause umsetzen können."
    },
    {
        question: "Wie schnell kann ich nach einer Verletzung wieder mit dem Sport anfangen?",
        answer: "Das ist die entscheidende Frage. Unser 'Return to Sport'-Protokoll basiert auf klaren, objektiven Kriterien. Sie erhalten von uns erst dann grünes Licht, wenn Sie die spezifischen Tests für Ihre Sportart sicher und schmerzfrei bestehen. Keine pauschalen Zeitangaben, sondern datengestützte Entscheidungen."
    }
];

const typicalIssues = [
    "Muskelverletzungen (Faserrisse, Zerrungen)",
    "Bänderrisse (z.B. Kreuzband, Sprunggelenk)",
    "Sehnenreizungen (Achillessehne, Patellasehne, Tennisellenbogen)",
    "Überlastungssyndrome (z.B. Läuferknie, Schienbeinkantensyndrom)",
    "Rehabilitation nach sportchirurgischen Eingriffen",
    "Leistungsdiagnostik und Präventions-Screenings"
];

const outcomes = [
    { icon: Zap, text: "Schnellere & sicherere Rückkehr zum Sport" },
    { icon: Activity, text: "Steigerung der sportlichen Leistungsfähigkeit" },
    { icon: Shield, text: "Minimiertes Risiko für erneute Verletzungen" },
    { icon: Dumbbell, text: "Optimierte Bewegungsmuster & Technik" },
    { icon: BarChart, text: "Klares Verständnis der eigenen Belastbarkeit" },
    { icon: Award, text: "Erhöhte athletische Robustheit" }
];


export default function SportphysiotherapiePage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">High-Performance-Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Sportphysiotherapie</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Schneller, stärker und sicherer zurück zur vollen Leistung. Für Athleten auf jedem Level.
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
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Die frustrierende Zwangspause durch eine Verletzung.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Die Angst, nach der Verletzung nie wieder das alte Niveau zu erreichen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Standard-Reha, die Ihre sportartspezifischen Anforderungen nicht berücksichtigt.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Unsicherheit, wann der richtige Zeitpunkt für die Rückkehr ins Training ist.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir kombinieren passive Therapie zur Schmerzlinderung mit aktivem, sportnahem Training.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir führen datengestützte 'Return to Sport'-Tests durch, um Ihre Belastbarkeit objektiv zu messen.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir analysieren Ihre Bewegungstechnik und optimieren sie, um die Ursache der Verletzung zu beheben.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Sie erhalten einen klaren, stufenweisen Plan von der Reha bis zurück zur vollen Wettkampfleistung.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vom Verletzten zum Performer in 3 Phasen</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Unser Return-to-Sport-Prozess.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <BrainCircuit className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Akutphase & Analyse</h3>
                            <p className="text-muted-foreground">Schmerz- und Schwellungsmanagement, Wiederherstellung der Basisfunktionen und eine detaillierte Analyse des Verletzungsmechanismus und Ihrer sportlichen Ziele.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Dumbbell className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Aufbau & Belastung</h3>
                            <p className="text-muted-foreground">Gezielter Kraft- und Stabilitätsaufbau. Wir steigern schrittweise die Belastung und integrieren erste sportartspezifische Bewegungsmuster.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Activity className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Return to Sport</h3>
                            <p className="text-muted-foreground">Objektive Testbatterien entscheiden, wann Sie bereit für die Rückkehr sind. Wir simulieren Wettkampfbelastungen und geben Ihnen das Vertrauen in Ihren Körper zurück.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Typische Sportverletzungen, die wir behandeln</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Für jeden, der Performance liebt</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <Dumbbell className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Ambitionierte Amateure</h3>
                            <p className="text-sm text-muted-foreground">die ihre Ziele ernst nehmen und nach einer Verletzung stärker zurückkommen wollen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <User className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Alltagsathleten</h3>
                            <p className="text-sm text-muted-foreground">die am Wochenende laufen, biken oder im Team spielen und fit bleiben wollen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Zap className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Leistungsorientierte Sportler</h3>
                            <p className="text-sm text-muted-foreground">die Verletzungen vorbeugen und ihre Leistung durch gezielte Optimierung maximieren wollen.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. OUTCOME / ERGEBNISSE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Ihr Performance-Upgrade</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Was Athleten sagen</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Bereit für Ihr Comeback?</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Warten Sie nicht länger. Starten Sie jetzt Ihre professionelle Reha und kommen Sie stärker zurück als zuvor.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20Sportphysiotherapie">
                            Comeback starten <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
