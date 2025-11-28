'use server';

import { generatePersonalizedExerciseProgram, PersonalizedExerciseProgramInput } from '@/ai/flows/personalized-exercise-program';
import { z } from 'zod';

const FormSchema = z.object({
  condition: z.string().min(3, { message: "Bitte geben Sie Ihre Beschwerden an." }),
  desiredOutcomes: z.string().min(3, { message: "Bitte beschreiben Sie Ihre Ziele." }),
  currentFitnessLevel: z.string(),
  timeCommitment: z.string().min(3, { message: "Bitte geben Sie an, wie viel Zeit Sie haben." }),
  equipmentAvailable: z.string().min(3, { message: "Bitte geben Sie Ihre verfügbare Ausrüstung an." }),
});

export type State = {
  errors?: {
    condition?: string[];
    desiredOutcomes?: string[];
    currentFitnessLevel?: string[];
    timeCommitment?: string[];
    equipmentAvailable?: string[];
  };
  message?: string | null;
  data?: string | null;
};

export async function createExercisePlan(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    condition: formData.get('condition'),
    desiredOutcomes: formData.get('desiredOutcomes'),
    currentFitnessLevel: formData.get('currentFitnessLevel'),
    timeCommitment: formData.get('timeCommitment'),
    equipmentAvailable: formData.get('equipmentAvailable'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Fehlende oder ungültige Felder. Konnte Trainingsplan nicht erstellen.',
      data: null,
    };
  }
  
  const input: PersonalizedExerciseProgramInput = validatedFields.data;

  try {
    const result = await generatePersonalizedExerciseProgram(input);
    return {
        ...prevState,
        message: 'Erfolgreich!',
        data: result.exerciseProgram
    };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      message: 'Fehler bei der Erstellung des Plans. Bitte versuchen Sie es später erneut.',
      data: null,
    };
  }
}
