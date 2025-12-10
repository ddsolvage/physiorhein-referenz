
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Briefcase, Shield, Star, Award, MessageCircle, LinkIcon } from "lucide-react";
import Link from 'next/link';

const testimonials = [
    {
        quote: "Ich bin mit chronischen Kopf- und Nackenschmerzen zur CMD-Behandlung gekommen. Nach ein paar Sitzungen und gezielten Übungen für den Kiefer war der Schmerz weg. Unglaublich, dass die Ursache dort lag!",
        name: "Sandra P.",
        role: "Lehrerin, 48",
    },
    {
        quote: "Das nächtliche Knirschen hat meine Zähne und meinen Schlaf ruiniert. Die Zusammenarbeit von Zahnarzt und PhysioRhein war perfekt. Die manuelle Therapie am Kiefer hat die Spannung sofort gelöst.",
        name: "David L.",
        role: "IT-Consultant, 36",
    }
];

const faqs = [
    {
        question: "Was bedeutet CMD eigentlich?",
        answer: "CMD steht für Craniomandibuläre Dysfunktion. Das ist ein Überbegriff für eine Fehlfunktion im Zusammenspiel von Kiefergelenken, Kaumuskulatur und Zähnen. Weil der Kiefer über Muskeln und Nerven eng mit der Halswirbelsäule verbunden ist, kann eine Störung hier vielfältige Symptome im ganzen Körper auslösen."
    },
    {
        question: "Muss ich zuerst zum Zahnarzt?",
        answer: "Das ist der Idealfall. Oft kommen Patienten mit einer Verordnung vom Zahnarzt oder Kieferorthopäden, der eine CMD diagnostiziert hat. Wir arbeiten eng mit Ihrer zahnärztlichen Praxis zusammen. Sie können aber auch zur Erstabklärung direkt zu uns kommen, wenn Sie einen Verdacht haben."
    },
    {
        question: "Ich trage eine Knirscherschiene. Ist eine Behandlung trotzdem sinnvoll?",
        answer: "Ja, absolut. Eine Schiene schützt primär Ihre Zähne, bekämpft aber nicht die Ursache der Verspannung. Die CMD-Therapie setzt genau dort an: Wir behandeln die überlastete Kaumuskulatur und korrigieren Haltungsfehler, um die Anspannung im System nachhaltig zu reduzieren."
    },
    {
        question: "Werden die Muskeln im Mund behandelt?",
        answer: "Ja, falls erforderlich, werden mit Handschuhen auch sanft die Muskeln im Mundraum (intraoral) behandelt. Dies ist oft eine sehr effektive Methode, um tiefsitzende Verspannungen der Kaumuskulatur zu lösen."
    },
    {
        question: "Welche Rolle spielt Stress bei CMD?",
        answer: "Eine sehr große. Stress führt oft zu unbewusstem Zähneknirschen oder -pressen, besonders nachts. Neben der manuellen Behandlung geben wir Ihnen daher auch Techniken und Übungen zur Entspannung und Stressregulation an die Hand."
    }
];

const typicalIssues = [
    "Kiefergelenkschmerzen und -knacken",
    "Zähneknirschen (Bruxismus) und -pressen",
    "Kopfschmerzen, Migräne und Gesichtsschmerzen",
    "Nacken-, Schulter- und Rückenschmerzen",
    "Tinnitus (Ohrgeräusche) und Schwindel",
    "Schwierigkeiten bei der Mundöffnung"
];

const outcomes = [
    { icon: CheckCircle, text: "Weniger Kiefer- & Gesichtsschmerzen" },
    { icon: MessageCircle, text: "Reduziertes Knirschen & Pressen" },
    { icon: Activity, text: "Linderung von Kopf- & Nackenschmerzen" },
    { icon: Shield, text: "Entspannung der Kaumuskulatur" },
    { icon: BrainCircuit, text: "Verbesserte Kieferbeweglichkeit" },
    { icon: Award, text: "Weniger stressbedingte Symptome" }
];


export default function CMDPage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">Spezialisierte Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">CMD- & Kiefer-Therapie</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Weniger Druck, weniger Kopfschmerz, bessere Funktion. Die Lösung für ein oft übersehenes Problem.
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
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ständige Kopf- oder Nackenschmerzen, deren Ursache unklar ist.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ein knackender, schmerzender Kiefer beim Gähnen oder Kauen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ihr Zahnarzt hat Ihnen gesagt, dass Sie nachts mit den Zähnen knirschen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Ohrgeräusche (Tinnitus) oder Schwindel, für die es keine Erklärung gibt.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir sehen den Zusammenhang zwischen Kiefer, Halswirbelsäule und Körperhaltung.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Durch gezielte manuelle Techniken entspannen wir Ihre überlastete Kaumuskulatur.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir korrigieren Dysfunktionen im Kiefergelenk und an der Wirbelsäule.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Sie erlernen Eigenübungen und Entspannungstechniken für nachhaltige Besserung.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ihr Weg zu einem entspannten Kiefer</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Unser systematischer Ansatz für Ihre CMD-Behandlung.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <BrainCircuit className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Detaillierter Befund</h3>
                            <p className="text-muted-foreground">Wir analysieren die Funktion Ihres Kiefers, die Statik Ihrer Halswirbelsäule und Ihre Haltung, um alle beteiligten Faktoren zu identifizieren.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <Activity className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Manuelle Entspannung</h3>
                            <p className="text-muted-foreground">Mit speziellen Techniken behandeln wir die Kaumuskulatur (von außen und innen), die Kiefergelenke und blockierte Segmente der Halswirbelsäule.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <User className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Aktive Selbsthilfe</h3>
                            <p className="text-muted-foreground">Sie lernen einfache, aber effektive Übungen zur Entspannung des Kiefers und zur Verbesserung Ihrer Haltung, um den Teufelskreis aus Spannung und Schmerz zu durchbrechen.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Typische Symptome einer CMD</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Für wen ist die CMD-Therapie geeignet?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <User className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Zähneknirscher & -presser</h3>
                            <p className="text-sm text-muted-foreground">Die unter den Folgen von Stress und Anspannung im Kieferbereich leiden.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <Briefcase className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Menschen mit unklaren Kopfschmerzen</h3>
                            <p className="text-sm text-muted-foreground">Bei denen Nackenverspannungen eine wesentliche Rolle spielen.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <LinkIcon className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">Patienten in zahnärztlicher Behandlung</h3>
                            <p className="text-sm text-muted-foreground">Als begleitende Maßnahme bei Schienen-Therapie oder kieferorthopädischen Eingriffen.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. OUTCOME / ERGEBNISSE */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Was Sie erreichen können</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Erfahrungen unserer Patienten</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Durchbrechen Sie den Kreislauf.</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Ein verspannter Kiefer kann Ihr ganzes Wohlbefinden beeinträchtigen. Lassen Sie uns die Ursache finden und für nachhaltige Entspannung sorgen.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20CMD-Therapie">
                            Jetzt Erstgespräch vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
