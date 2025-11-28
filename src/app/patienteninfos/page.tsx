import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Info } from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images";

const checklistItems = [
    "Ärztliche Verordnung (falls vorhanden)",
    "Befunde, MRT-/Röntgenberichte",
    "Bequeme Kleidung",
    "Liste Ihrer wichtigsten Fragen"
];

const faqs = [
    {
        question: "Brauche ich für Physiotherapie eine ärztliche Verordnung?",
        answer: "Für kassenärztliche Leistungen ja. Für Selbstzahler-Leistungen, Prävention oder Coaching ist keine Verordnung nötig."
    },
    {
        question: "Wie lange dauert ein Termin?",
        answer: "Wir planen für den Ersttermin ca. 60 Minuten ein, Folgetermine dauern in der Regel 45 Minuten."
    },
    {
        question: "Wie kurzfristig kann ich Termine absagen?",
        answer: "Termine können bis 24 Stunden vorher kostenfrei storniert werden. Danach behalten wir uns vor, eine Ausfallgebühr zu berechnen, da wir die Zeit exklusiv für Sie reservieren."
    },
    {
        question: "Wo kann ich parken?",
        answer: "In der Rheinstraße und den umliegenden Straßen gibt es öffentliche Parkplätze (teilweise mit Parkschein). Planen Sie bitte etwas Zeit für die Parkplatzsuche ein. Alternativ sind wir in wenigen Minuten zu Fuß vom Hauptbahnhof erreichbar."
    }
];

export default function PatienteninfosPage() {
    const heroImage = placeholderImages.find((p) => p.id === "patient-info-hero");
  
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
                            Gut zu wissen: Infos für Ihren Besuch
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                            Alles, was Sie für Ihren ersten Termin bei PhysioRhein wissen müssen – kompakt und übersichtlich.
                        </p>
                    </div>
                </div>
            </section>

            <section id="checklist" className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Was Sie zum ersten Termin mitbringen sollten</h2>
                        <p className="text-muted-foreground mb-8">Um Ihre Behandlung so effektiv wie möglich zu gestalten, bringen Sie bitte folgende Unterlagen mit.</p>
                        <ul className="space-y-4">
                            {checklistItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-foreground text-background p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <Info className="w-6 h-6 text-primary flex-shrink-0" />
                            <h3 className="text-2xl font-bold">Kassen- &amp; Privatleistungen</h3>
                        </div>
                        <div className="space-y-4 text-background/80">
                        <p>Wir behandeln gesetzlich Versicherte, Privatpatient:innen und Selbstzahler.</p>
                        <p>Je nach Krankenkasse und Verordnung können bei gesetzlich Versicherten gesetzliche Zuzahlungen anfallen. Wir informieren Sie hierüber transparent vor Behandlungsbeginn.</p>
                        <p>Osteopathische Behandlungen sind in der Regel Privatleistungen. Viele gesetzliche Krankenkassen erstatten jedoch einen Teil der Kosten. Bitte erkundigen Sie sich vorab bei Ihrer Kasse.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Häufige Fragen (FAQ)</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-md border-none data-[state=open]:shadow-xl transition-shadow">
                                    <AccordionTrigger className="p-6 text-left hover:no-underline group">
                                         <span className="flex-1 pr-4 text-lg font-semibold text-foreground group-data-[state=open]:text-primary">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0 text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}
