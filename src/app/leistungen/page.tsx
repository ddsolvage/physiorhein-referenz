import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { placeholderImages } from "@/lib/placeholder-images";
import { ChevronDown } from "lucide-react";

const services = [
  {
    title: "Allgemeine & spezielle Krankengymnastik",
    teaser: "Funktionelle Übungen zur Verbesserung von Beweglichkeit, Kraft und Koordination.",
    details: "Wir analysieren Ihre Bewegungsmuster und erstellen einen individuellen Plan, der genau auf Ihren Alltag abgestimmt ist. Egal ob nach Verletzungen oder bei chronischen Fehlhaltungen.",
    coverage: ["Kassenleistung", "Privatleistung"],
  },
  {
    title: "Manuelle Therapie",
    teaser: "Gezielte, schonende Handgriffe zur Verbesserung der Gelenkbeweglichkeit.",
    details: "Die Manuelle Therapie (MT) ist eine spezialisierte Form der Physiotherapie, bei der Therapeuten Funktionsstörungen des Bewegungsapparates untersuchen und behandeln. Durch gezielte Mobilisation von Gelenken und Techniken zur Muskelentspannung können Blockaden gelöst und Schmerzen effektiv gelindert werden.",
    coverage: ["Kassenleistung", "Privatleistung"],
  },
  {
    title: "Osteopathie",
    teaser: "Sanfte ganzheitliche Behandlung von Bewegungsapparat, Organen und Nervensystem.",
    details: "Die Osteopathie betrachtet den Körper als Einheit. Störungen in einem Bereich können Beschwerden an anderer Stelle verursachen. Mit sanften, manuellen Techniken spüren wir diese Zusammenhänge auf und behandeln nicht nur Symptome, sondern auch deren Ursachen, um die Selbstheilungskräfte des Körpers zu aktivieren. Viele Krankenkassen erstatten einen Teil der Kosten.",
    coverage: ["Privatleistung / Selbstzahler"],
  },
  {
    title: "Sportphysiotherapie",
    teaser: "Return-to-Sport-Konzepte, Belastungssteuerung und Leistungsdiagnostik.",
    details: "Ob Amateur- oder Leistungssportler, wir begleiten Sie nach Verletzungen oder Operationen zurück zu Ihrer vollen Leistungsfähigkeit. Unsere Sportphysiotherapie umfasst sportartspezifisches Training, Taping, manuelle Techniken und eine individuelle Belastungssteuerung, um erneuten Verletzungen vorzubeugen.",
    coverage: ["Kassenleistung", "Privatleistung"],
  },
  {
    title: "CMD-Behandlung (Kiefer)",
    teaser: "Behandlung bei Knirschen, Pressen, Kopfschmerzen oder Ohrgeräuschen.",
    details: "Craniomandibuläre Dysfunktion (CMD) beschreibt eine Fehlregulation des Kiefergelenks, die vielfältige Symptome wie Kopf-, Nacken- und Rückenschmerzen, Schwindel oder Tinnitus auslösen kann. In enger Zusammenarbeit mit Ihrem Zahnarzt oder Kieferorthopäden behandeln wir die beteiligten Muskeln und Gelenke, um das System wieder ins Gleichgewicht zu bringen.",
    coverage: ["Kassenleistung", "Privatleistung"],
  },
  {
    title: "Prävention & Gesundheitscoaching",
    teaser: "Programme zur Vorbeugung von Beschwerden und zur Förderung eines gesunden Lebensstils.",
    details: "Investieren Sie in Ihre Zukunft. Wir bieten maßgeschneiderte Präventionsprogramme, Haltungsanalysen, Ergonomieberatung am Arbeitsplatz und individuelles Coaching, um Schmerzen vorzubeugen, bevor sie entstehen.",
    coverage: ["Privatleistung / Selbstzahler"],
  },
];

export default function LeistungenPage() {
  const heroImage = placeholderImages.find((p) => p.id === "services-hero");

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
              Unsere Leistungen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Klar erklärt, verständlich strukturiert. Wir glauben, dass gute Physiotherapie verständlich sein muss. Deshalb erklären wir Ihnen jede Leistung in Klartext – inklusive typischer Beschwerden, Ziele und möglicher Methoden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border-none data-[state=open]:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="p-6 text-left hover:no-underline group">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl font-semibold text-foreground group-data-[state=open]:text-primary mb-1">{service.title}</h3>
                      <p className="text-muted-foreground text-base">{service.teaser}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="mb-4">{service.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.coverage.map((tag) => (
                        <Badge key={tag} variant={tag.includes("Kassenleistung") ? "outline" : "secondary"} className="border-gray-300">
                          {tag.replace(" / Selbstzahler", "")}
                        </Badge>
                      ))}
                    </div>
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
