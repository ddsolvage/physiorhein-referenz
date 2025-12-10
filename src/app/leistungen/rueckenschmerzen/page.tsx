
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Briefcase, Dumbbell, Shield, Star, Award } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
    {
        quote: "Nach einer gefühlten Ewigkeit mit Rückenschmerzen habe ich hier endlich verstanden, wo das Problem liegt. Die Kombination aus manueller Therapie und gezielten Übungen war ein Game-Changer.",
        name: "Markus B.",
        role: "Softwareentwickler, 42",
        avatar: "https://picsum.photos/seed/ruecken1/100/100"
    },
    {
        quote: "Ich dachte, der Schmerz nach dem Bandscheibenvorfall würde nie weggehen. Das Team von PhysioRhein hat mir die Angst genommen und mich schrittweise zurück in die Bewegung gebracht. Danke!",
        name: "Julia S.",
        role: "Marketing Managerin, 35",
        avatar: "https://picsum.photos/seed/ruecken2/100/100"
    }
];

const faqs = [
    {
        question: "Wie viele Behandlungen brauche ich, bis ich eine Besserung spüre?",
        answer: "Das ist individuell, aber viele Patienten spüren bereits nach den ersten 1-3 Terminen eine Linderung. Unser Ziel ist es, Ihnen so schnell wie möglich Werkzeuge zur Selbsthilfe zu geben, damit Sie nicht dauerhaft von uns abhängig sind."
    },
    {
        question: "Ich habe einen akuten Hexenschuss, kann ich direkt kommen?",
        answer: "Ja, bei akuten Schmerzen versuchen wir immer, Ihnen schnellstmöglich einen Termin anzubieten. Rufen Sie uns am besten direkt an. Eine schnelle und gezielte Intervention kann den Heilungsprozess erheblich verkürzen."
    },
    {
        question: "Hilft die Therapie auch bei chronischen, seit Jahren bestehenden Schmerzen?",
        answer: "Absolut. Gerade bei chronischen Schmerzen ist unser Ansatz, der über das reine Symptom hinausschaut, besonders wirksam. Wir analysieren Bewegungsmuster, Alltagsbelastungen und erarbeiten mit Ihnen eine langfristige Strategie."
    },
    {
        question: "Muss ich zu Hause Übungen machen?",
        answer: "Ja, und das ist ein zentraler Teil unseres Erfolgs. Therapie findet nicht nur in der Praxis statt. Sie erhalten von uns ein klares, einfaches und hochwirksames Programm für zu Hause – oft digital per App unterstützt –, um den Therapieerfolg zu sichern."
    },
    {
        question: "Was ist, wenn ein Arzt eine Operation empfohlen hat?",
        answer: "Eine Zweitmeinung ist immer sinnvoll. In vielen Fällen kann eine gezielte konservative Physiotherapie eine Operation überflüssig machen oder den Körper optimal darauf vorbereiten. Wir arbeiten eng mit Ärzten zusammen und beraten Sie ehrlich und transparent."
    }
];

const typicalIssues = [
    "Akute und chronische Rückenschmerzen (LWS, BWS, HWS)",
    "Bandscheibenvorfall und -protrusion",
    "Ischias-Schmerzen und Ausstrahlungen ins Bein",
    "Blockaden im Iliosakralgelenk (ISG-Syndrom)",
    "Muskuläre Verspannungen und Dysbalancen",
    "Verschleißerscheinungen (Arthrose) der Wirbelsäule"
];

const outcomes = [
    { icon: CheckCircle, text: "Signifikante Schmerzreduktion" },
    { icon: Activity, text: "Verbesserte Beweglichkeit im Alltag" },
    { icon: Shield, text: "Mehr Sicherheit und Vertrauen in den eigenen Körper" },
    { icon: BrainCircuit, text: "Verständnis für die Ursachen Ihrer Schmerzen" },
    { icon: Dumbbell, text: "Gezielte Kräftigung der Rumpfmuskulatur" },
    { icon: Award, text: "Strategien zur Vorbeugung zukünftiger Episoden" }
];


export default function RueckenschmerzenPage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">Spezialisierte Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Rückenschmerz-Therapie</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                       Für mehr Beweglichkeit, weniger Schmerzen und einen Alltag ohne Einschränkungen.
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
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ein ständiger, ziehender Schmerz im unteren Rücken.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Angst vor bestimmten Bewegungen wie Heben oder Bücken.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Kurzfristige Besserung durch Massagen, aber der Schmerz kommt immer wieder.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ratlosigkeit, weil Ihnen niemand die genaue Ursache erklären kann.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir finden die *wirkliche* Ursache durch eine detaillierte Funktionsanalyse.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir geben Ihnen aktive Übungen, die Sie stark und unabhängig machen.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir kombinieren manuelle Techniken zur schnellen Linderung mit nachhaltigem Training.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Sie verstehen Ihren Körper und wissen, wie Sie sich selbst helfen können.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Der Behandlungsablauf im Detail</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Struktur und Transparenz für Ihren Erfolg.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <BrainCircuit className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Analyse & Plan</h3>
                            <p className="text-muted-foreground">Wir untersuchen Ihre Statik, Beweglichkeit und Kraft. Auf Basis der Ergebnisse erstellen wir einen transparenten Behandlungsplan und definieren gemeinsame Ziele.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Activity className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Gezielte Behandlung</h3>
                            <p className="text-muted-foreground">Wir setzen eine Kombination aus Manueller Therapie zur Schmerzlinderung und aktiven, medizinischen Trainingsübungen zur Kräftigung und Stabilisierung ein.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <User className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Transfer in den Alltag</h3>
                            <p className="text-muted-foreground">Wir erarbeiten mit Ihnen Strategien und individuelle Übungen (oft per App), damit Sie den Erfolg in Ihren Alltag integrieren und langfristig schmerzfrei bleiben.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Typische Beschwerden, die wir behandeln</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Für wen ist diese Behandlung geeignet?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <Briefcase className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Menschen mit Bürojob</h3>
                            <p className="text-sm text-muted-foreground">Die viel sitzen und unter Verspannungen oder Schmerzen durch Fehlhaltung leiden.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Dumbbell className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Aktive Menschen & Sportler</h3>
                            <p className="text-sm text-muted-foreground">Die durch Überlastung oder einseitige Belastung Schmerzen entwickelt haben.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <User className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Menschen mit chron. Schmerzen</h3>
                            <p className="text-sm text-muted-foreground">Die schon vieles probiert haben und eine nachhaltige, aktive Lösung suchen.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. OUTCOME / ERGEBNISSE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Was Sie erwarten können</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Das sagen unsere Patienten</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Beenden Sie Ihre Rückenschmerzen.</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Ein Leben ohne ständige Schmerzen ist möglich. Machen Sie den ersten Schritt und vereinbaren Sie einen Termin für eine fundierte Analyse.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20Rückenschmerz-Therapie">
                            Beschwerden jetzt angehen <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
