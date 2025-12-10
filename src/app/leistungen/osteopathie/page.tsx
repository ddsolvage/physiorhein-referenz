
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, BrainCircuit, Activity, User, Briefcase, UserCheck, Shield, Star, Award, PersonStanding, Search } from "lucide-react";
import Link from 'next/link';

const testimonials = [
    {
        quote: "Ich hatte jahrelang Verdauungsprobleme und Rückenschmerzen. Niemand fand einen Zusammenhang. Die Osteopathie hat beides als Einheit betrachtet und mir nachhaltig geholfen.",
        name: "Clara M.",
        role: "Projektmanagerin, 45",
    },
    {
        quote: "Nach der Schwangerschaft fühlte sich mein Körper 'verschoben' an. Die sanften osteopathischen Behandlungen haben mir geholfen, wieder in mein Gleichgewicht zu finden. Eine absolute Empfehlung.",
        name: "Lena H.",
        role: "Junge Mutter, 32",
    }
];

const faqs = [
    {
        question: "Was ist der Hauptunterschied zwischen Osteopathie und Physiotherapie?",
        answer: "Während die Physiotherapie sich oft auf eine bestimmte schmerzhafte Struktur konzentriert, betrachtet die Osteopathie den Körper als Ganzes. Sie sucht nach der Ursache von Beschwerden, die auch in ganz anderen Körperregionen liegen kann (z.B. können Nackenschmerzen von einem Organproblem herrühren). Osteopathen nutzen ausschließlich ihre Hände für Diagnose und Therapie."
    },
    {
        question: "Ist Osteopathie esoterisch?",
        answer: "Nein, überhaupt nicht. Osteopathie basiert auf fundierten Kenntnissen der Anatomie, Physiologie und Biomechanik. Es geht um das Verständnis von funktionellen Zusammenhängen im Körper – wissenschaftlich und nachvollziehbar."
    },
    {
        question: "Erstattet meine Krankenkasse die Behandlung?",
        answer: "Viele gesetzliche Krankenkassen erstatten einen Teil der Kosten für osteopathische Behandlungen. Die Höhe der Erstattung ist von Kasse zu Kasse unterschiedlich. Am besten, Sie informieren sich vorab direkt bei Ihrer Krankenkasse. Private Kassen übernehmen die Kosten in der Regel vollständig."
    },
    {
        question: "Für welche Beschwerden ist Osteopathie besonders geeignet?",
        answer: "Osteopathie ist besonders wirksam bei chronischen oder immer wiederkehrenden Beschwerden, bei denen bisher keine klare Ursache gefunden wurde. Sie eignet sich auch hervorragend zur Behandlung von Säuglingen und Kindern sowie zur Begleitung in der Schwangerschaft."
    },
    {
        question: "Wie viele Sitzungen sind nötig?",
        answer: "Oft sind bereits nach 2-4 Behandlungen deutliche Veränderungen spürbar. Da die Osteopathie die Selbstheilungskräfte anregt, gibt man dem Körper zwischen den Sitzungen Zeit zu reagieren. Die Behandlungsabstände sind daher oft größer als in der Physiotherapie."
    }
];

const typicalIssues = [
    "Chronische Schmerzen am Bewegungsapparat (Rücken, Nacken, Gelenke)",
    "Funktionelle Verdauungsbeschwerden (z.B. Reizdarm)",
    "Kopfschmerzen, Migräne und Schwindel",
    "Nach Schwangerschaft und Geburt zur Rückbildung",
    "Säuglingsasymmetrien, Schreikinder, Stillprobleme",
    "Stressbedingte und psychosomatische Beschwerden"
];

const outcomes = [
    { icon: CheckCircle, text: "Linderung chronischer Schmerzen" },
    { icon: Activity, text: "Verbesserte Organfunktion" },
    { icon: Shield, text: "Stärkung der Selbstheilungskräfte" },
    { icon: BrainCircuit, text: "Regulierung des Nervensystems" },
    { icon: PersonStanding, text: "Besseres Körpergefühl & Wohlbefinden" },
    { icon: Award, text: "Auflösung von tiefen Verspannungen" }
];


export default function OsteopathiePage() {
    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <section className="bg-background py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-primary font-semibold mb-2">Ganzheitliche Behandlung</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Osteopathie</h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Die Ursache finden, statt nur das Symptom zu behandeln. Leben im Gleichgewicht.
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
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Immer wiederkehrende Schmerzen, für die niemand eine Ursache findet.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie spüren, dass verschiedene Beschwerden (z.B. Rücken & Verdauung) zusammenhängen.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Behandlungen helfen nur kurz, weil nur das Symptom bekämpft wird.</div></li>
                                <li className="flex gap-3"><span className="text-destructive mt-1">●</span><div>Sie fühlen sich insgesamt unwohl, gestresst und nicht in Ihrer Kraft.</div></li>
                            </ul>
                        </div>
                        <div className="p-8">
                             <h2 className="text-2xl font-bold mb-4 text-primary">Was wir anders machen</h2>
                            <ul className="space-y-3 text-foreground">
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir betrachten Ihren Körper als eine Einheit aus Bewegungsapparat, Organen und Nervensystem.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Mit geschulten Händen spüren wir Spannungen und Blockaden im gesamten Gewebe auf.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Durch sanfte, manuelle Impulse regen wir die Selbstheilungskräfte Ihres Körpers an.</div></li>
                                <li className="flex gap-3"><CheckCircle className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" /><div>Wir behandeln die Wurzel des Problems für nachhaltige Gesundheit und Wohlbefinden.</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. BEHANDLUNGSABLAUF */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Die 3 Säulen der osteopathischen Behandlung</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Ein strukturierter, ganzheitlicher Ansatz.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <Card className="p-8 border-none shadow-lg">
                            <Search className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">1. Globale Anamnese</h3>
                            <p className="text-muted-foreground">Wir sprechen ausführlich über Ihre gesamte Krankheitsgeschichte und Ihre aktuellen Beschwerden, um erste Zusammenhänge zu erkennen.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <PersonStanding className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">2. Manuelle Untersuchung</h3>
                            <p className="text-muted-foreground">Mit unseren Händen untersuchen wir die Spannung und Beweglichkeit von Geweben im ganzen Körper – von den Faszien über Muskeln und Gelenke bis zu den Organen.</p>
                        </Card>
                        <Card className="p-8 border-none shadow-lg">
                            <UserCheck className="w-12 h-12 mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">3. Sanfte Behandlung</h3>
                            <p className="text-muted-foreground">Gezielte, sanfte manuelle Techniken lösen die gefundenen Dysfunktionen und geben dem Körper den Impuls, sich selbst neu zu regulieren und zu heilen.</p>
                        </Card>
                    </div>
                </div>
            </section>

             {/* 4. TYPISCHE BESCHWERDEN */}
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Wann Osteopathie helfen kann</h2>
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
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Besonders geeignet für Menschen...</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 border-none shadow-md text-center">
                            <Briefcase className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...mit komplexen Beschwerden</h3>
                            <p className="text-sm text-muted-foreground">Die eine lange Anamnese haben und bei denen bisherige Therapien nicht angeschlagen haben.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <UserCheck className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...die einen ganzheitlichen Ansatz suchen</h3>
                            <p className="text-sm text-muted-foreground">Und verstehen wollen, wie ihr Körper als System zusammenhängt und funktioniert.</p>
                        </Card>
                        <Card className="p-6 border-none shadow-md text-center">
                             <User className="w-10 h-10 mx-auto text-primary mb-3"/>
                            <h3 className="font-bold text-lg">...in besonderen Lebensphasen</h3>
                            <p className="text-sm text-muted-foreground">Wie Schwangerschaft, nach der Geburt oder bei der Behandlung von Säuglingen und Kindern.</p>
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
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Finden Sie zurück in Ihr Gleichgewicht.</h2>
                    <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">Wenn Sie eine nachhaltige Lösung für Ihre Beschwerden suchen, die den ganzen Menschen betrachtet, ist Osteopathie der richtige Weg. Vereinbaren Sie jetzt Ihren Termin.</p>
                    <Button asChild size="lg" variant="secondary" className="text-lg">
                        <Link href="/kontakt?subject=Termin%20Osteopathie">
                            Jetzt Termin vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
