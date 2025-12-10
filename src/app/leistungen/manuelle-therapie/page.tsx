
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Briefcase, Dumbbell, Shield, Star, Award, PersonStanding, Bone } from "lucide-react";
import Link from 'next/link';

const testimonials = [
    {
        quote: "Meine Schulter war seit Monaten blockiert. Nach wenigen Sitzungen Manueller Therapie konnte ich meinen Arm wieder fast vollständig heben. Ein unglaubliches Gefühl der Freiheit!",
        name: "Sabine W.",
        role: "Hobby-Gärtnerin, 58",
    },
    {
        quote: "Ich hatte ständig Kopfschmerzen, die von der Halswirbelsäule kamen. Durch die gezielten und sanften Techniken wurde nicht nur die Blockade gelöst, sondern auch die Ursache bekämpft. Endlich wieder klar im Kopf.",
        name: "Thomas K.",
        role: "Grafikdesigner, 31",
    }
];

const faqs = [
    {
        question: "Ist Manuelle Therapie schmerzhaft?",
        answer: "Nein, im Gegenteil. Manuelle Therapie wird sehr gezielt und sanft ausgeführt. Unser Ziel ist es, Schmerzen zu lindern, nicht zu erzeugen. Es kann vorkommen, dass mobilisierte Bereiche danach etwas empfindlich sind, ähnlich wie bei einem Muskelkater, was aber ein Zeichen für die Aktivierung des Gewebes ist."
    },
    {
        question: "Was ist der Unterschied zur normalen Krankengymnastik?",
        answer: "Die Manuelle Therapie ist eine spezialisierte Weiterbildung innerhalb der Physiotherapie. Sie konzentriert sich auf die Diagnostik und Behandlung von Funktionsstörungen an Gelenken, Muskeln und Nerven. Krankengymnastik ist ein Überbegriff, der auch allgemeine Bewegungsübungen umfasst. Wir kombinieren oft beides für den maximalen Erfolg."
    },
    {
        question: "Wie oft muss ich zur Manuellen Therapie kommen?",
        answer: "Die Frequenz hängt von Ihrem Beschwerdebild ab. Bei akuten Blockaden können anfangs 1-2 Termine pro Woche sinnvoll sein. Bei chronischen Problemen oder zur Prävention können die Abstände größer sein. Wir erstellen einen individuellen Plan für Sie."
    },
    {
        question: "Behandelt Manuelle Therapie auch Nervenschmerzen?",
        answer: "Ja, absolut. Viele ausstrahlende Schmerzen (z.B. in Arm oder Bein) entstehen durch eine Reizung von Nervenwurzeln an der Wirbelsäule. Durch spezielle Mobilisationstechniken können wir den Druck vom Nerv nehmen und die Symptome lindern."
    },
    {
        question: "Übernimmt die Krankenkasse die Kosten?",
        answer: "Ja, Manuelle Therapie (MT) ist eine anerkannte Kassenleistung und kann von Ihrem Arzt auf einem Rezept für Physiotherapie verordnet werden. Wir behandeln sowohl Kassen- als auch Privatpatienten."
    }
];

const typicalIssues = [
    "Gelenkblockaden an Wirbelsäule und Extremitäten",
    "Nacken- und Kopfschmerzen cervikogenen Ursprungs",
    "Schulter-Impingement und Bewegungseinschränkungen",
    "Hüft- und Kniearthrose zur Schmerzlinderung",
    "Ausstrahlende Schmerzen in Arme oder Beine (radikuläre Symptome)",
    "Ellenbogenbeschwerden (z.B. Tennis- oder Golferellenbogen)"
];

const outcomes = [
    { icon: CheckCircle, text: "Gelöste Gelenkblockaden" },
    { icon: Activity, text: "Erhöhte Bewegungsfreiheit" },
    { icon: Shield, text: "Sofort spürbare Schmerzlinderung" },
    { icon: BrainCircuit, text: "Verbesserte Gelenkfunktion" },
    { icon: PersonStanding, text: "Bessere Körperhaltung und -wahrnehmung" },
    { icon: Award, text: "Reduzierung von ausstrahlenden Schmerzen" }
];


export default function ManuelleTherapiePage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">Spezialisierte Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Manuelle Therapie</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Blockaden gezielt lösen, Beweglichkeit zurückgewinnen und Schmerzen an der Wurzel packen.
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
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ein Gefühl, 'eingerostet' oder blockiert zu sein.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Bewegungen, die plötzlich einschießende Schmerzen verursachen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Schmerzmittel und Schonung helfen nur kurzfristig.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Die Diagnose lautet 'Verschleiß', aber Sie wollen eine aktive Lösung.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir nutzen unsere Hände als Präzisionswerkzeug, um die Ursache der Blockade zu finden.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Durch sanfte Mobilisation und Manipulation stellen wir die Gelenkfunktion wieder her.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir lindern nicht nur den Schmerz, sondern verbessern die Biomechanik nachhaltig.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Sie erhalten gezielte Übungen, um den Erfolg der manuellen Behandlung zu sichern.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Präzision in 3 Schritten</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Unser Prozess für Manuelle Therapie ist auf Effektivität und Nachhaltigkeit ausgelegt.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <BrainCircuit className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Funktionsbefund</h3>
                            <p className="text-muted-foreground">Wir testen gezielt Gelenke, Muskeln und Nerven, um die exakte Quelle Ihrer Beschwerden zu lokalisieren und Hypothesen zu bilden.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <PersonStanding className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Manuelle Techniken</h3>
                            <p className="text-muted-foreground">Durch spezifische Handgriffe (Traktion, Gleitmobilisation) lösen wir Blockaden, reduzieren Schmerz und verbessern die Beweglichkeit des betroffenen Gelenks.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Activity className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Aktive Stabilisierung</h3>
                            <p className="text-muted-foreground">Damit die wiedergewonnene Beweglichkeit bleibt, erhalten Sie gezielte Übungen, um die umliegende Muskulatur zu kräftigen und das Gelenk zu stabilisieren.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Typische Anwendungsgebiete</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Ideal für Menschen, die...</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <Bone className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...unter Gelenk-Blockaden leiden</h3>
                            <p className="text-sm text-muted-foreground">und eine schnelle, effektive Lösung für eingeschränkte Beweglichkeit suchen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Briefcase className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...chronische Verspannungen haben</h3>
                            <p className="text-sm text-muted-foreground">besonders im Nacken- und Schulterbereich, die zu Kopfschmerzen führen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Dumbbell className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...nach einer Verletzung</h3>
                            <p className="text-sm text-muted-foreground">die volle Gelenkfunktion wiederherstellen und den Heilungsprozess beschleunigen wollen.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. OUTCOME / ERGEBNISSE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Konkrete Ergebnisse der Manuellen Therapie</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Was Patienten erfahren</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Bereit, Blockaden zu lösen?</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Fühlen Sie sich wieder frei und beweglich. Vereinbaren Sie jetzt Ihren Termin für eine gezielte manuelle Therapie.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20Manuelle%20Therapie">
                            Jetzt Termin vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
