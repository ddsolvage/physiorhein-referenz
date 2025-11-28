'use client';

import { useFormState, useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createExercisePlan, State } from '@/app/actions';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Plan wird erstellt...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Trainingsplan erstellen
        </>
      )}
    </Button>
  );
}

export default function TrainingsplanErstellenPage() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createExercisePlan, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== 'Erfolgreich!') {
      toast({
        variant: 'destructive',
        title: 'Fehler',
        description: state.message,
      });
    }
    if (state.message === 'Erfolgreich!') {
        toast({
            title: 'Plan erstellt!',
            description: 'Ihr persönlicher Trainingsplan ist fertig.',
        });
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Ihr individueller KI-Trainingsplan
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Basierend auf Ihren Angaben erstellt unsere KI einen personalisierten Übungsplan, um Ihre Ziele zu erreichen.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Card className="shadow-lg rounded-2xl sticky top-24">
              <CardHeader>
                <CardTitle>Plan erstellen</CardTitle>
                <CardDescription>
                  Füllen Sie die Felder aus, um Ihren Plan zu generieren. Je genauer Ihre Angaben, desto besser das Ergebnis.
                </CardDescription>
              </CardHeader>
              <form ref={formRef} action={dispatch}>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="condition">Ihre Beschwerden</Label>
                    <Input id="condition" name="condition" placeholder="z.B. Schmerzen im unteren Rücken" required />
                    {state.errors?.condition && <p className="text-sm font-medium text-destructive">{state.errors.condition[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="desiredOutcomes">Ihre Ziele</Label>
                    <Input id="desiredOutcomes" name="desiredOutcomes" placeholder="z.B. schmerzfrei sitzen, mehr Beweglichkeit" required />
                     {state.errors?.desiredOutcomes && <p className="text-sm font-medium text-destructive">{state.errors.desiredOutcomes[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="currentFitnessLevel">Aktuelles Fitnesslevel</Label>
                    <Select name="currentFitnessLevel" defaultValue="beginner" required>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Anfänger</SelectItem>
                        <SelectItem value="intermediate">Fortgeschritten</SelectItem>
                        <SelectItem value="advanced">Experte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeCommitment">Zeit pro Woche</Label>
                    <Input id="timeCommitment" name="timeCommitment" placeholder="z.B. 3x 30 Minuten" required />
                     {state.errors?.timeCommitment && <p className="text-sm font-medium text-destructive">{state.errors.timeCommitment[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="equipmentAvailable">Verfügbare Ausrüstung</Label>
                    <Textarea id="equipmentAvailable" name="equipmentAvailable" placeholder="z.B. Hanteln, Theraband, Matte, nichts" required />
                    {state.errors?.equipmentAvailable && <p className="text-sm font-medium text-destructive">{state.errors.equipmentAvailable[0]}</p>}
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </form>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-2xl min-h-[500px]">
              <CardHeader>
                <CardTitle>Ihr persönlicher Plan</CardTitle>
                <CardDescription>
                  Hier wird Ihr von der KI generierter Trainingsplan angezeigt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {state.data ? (
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown>{state.data.replace(/<voice[^>]*>|<\/voice>/g, '')}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-16">
                    <p>Ihr Plan wartet darauf, erstellt zu werden.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
