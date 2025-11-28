'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized exercise programs based on user input.
 *
 * It includes:
 * - `generatePersonalizedExerciseProgram` - An async function that takes user input and returns a personalized exercise program.
 * - `PersonalizedExerciseProgramInput` - The input type for the generatePersonalizedExerciseProgram function.
 * - `PersonalizedExerciseProgramOutput` - The return type for the generatePersonalizedExerciseProgram function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const PersonalizedExerciseProgramInputSchema = z.object({
  condition: z.string().describe('The patient’s specific condition (e.g., back pain, knee injury).'),
  desiredOutcomes: z
    .string()
    .describe(
      'The patient’s desired outcomes from the exercise program (e.g., increased mobility, reduced pain).'
    ),
  currentFitnessLevel: z
    .string()
    .describe(
      'The patient’s current fitness level (e.g., beginner, intermediate, advanced).'
    ),
  timeCommitment: z
    .string()
    .describe(
      'The patient’s time commitment to the exercise program (e.g., 30 minutes a day, 3 times a week).'
    ),
  equipmentAvailable: z
    .string()
    .describe(
      'The equipment available to the patient (e.g., dumbbells, resistance bands, no equipment).'
    ),
});

export type PersonalizedExerciseProgramInput = z.infer<
  typeof PersonalizedExerciseProgramInputSchema
>;

const PersonalizedExerciseProgramOutputSchema = z.object({
  exerciseProgram: z
    .string()
    .describe(
      'A detailed personalized exercise program including specific exercises, sets, reps, and instructions, including how to convert the exercises to speech using TTS.'
    ),
});

export type PersonalizedExerciseProgramOutput = z.infer<
  typeof PersonalizedExerciseProgramOutputSchema
>;

export async function generatePersonalizedExerciseProgram(
  input: PersonalizedExerciseProgramInput
): Promise<PersonalizedExerciseProgramOutput> {
  return personalizedExerciseProgramFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedExerciseProgramPrompt',
  input: {schema: PersonalizedExerciseProgramInputSchema},
  output: {schema: PersonalizedExerciseProgramOutputSchema},
  prompt: `You are an expert physiotherapist who designs personalized exercise programs for patients.

Based on the patient's condition, desired outcomes, current fitness level, time commitment, and available equipment, create a detailed exercise program.

Condition: {{{condition}}}
Desired Outcomes: {{{desiredOutcomes}}}
Current Fitness Level: {{{currentFitnessLevel}}}
Time Commitment: {{{timeCommitment}}}
Equipment Available: {{{equipmentAvailable}}}

The exercise program should include specific exercises, sets, reps, and instructions, and be tailored to the patient's individual needs.

Here is an example program:

"""
Warm-up (5 minutes):

Light cardio, such as jogging in place or jumping jacks.
Dynamic stretching, such as arm circles, leg swings, and torso twists.
Workout (20 minutes):

Exercise 1: Squats

Sets: 3
Reps: 10-12
Instructions: Stand with your feet shoulder-width apart. Lower your body as if you were sitting in a chair. Keep your back straight and your knees behind your toes. Return to the starting position.
Exercise 2: Push-ups

Sets: 3
Reps: As many as possible
Instructions: Place your hands shoulder-width apart on the floor. Lower your body until your chest touches the floor. Push back up to the starting position.
Exercise 3: Lunges

Sets: 3
Reps: 10-12 per leg
Instructions: Stand with your feet together. Step forward with one leg and lower your body until both knees are bent at 90 degrees. Keep your back straight and your front knee behind your toes. Return to the starting position and repeat with the other leg.
Cool-down (5 minutes):

Static stretching, such as holding each stretch for 30 seconds.
"""

It should be marked up for TTS in the following fashion:
"""
<voice name=\"speaker1\">This is the introduction.</voice>
<voice name=\"speaker2\">This is the conclusion.</voice>
"""
`, // Updated prompt to request TTS markup
})

const personalizedExerciseProgramFlow = ai.defineFlow(
  {
    name: 'personalizedExerciseProgramFlow',
    inputSchema: PersonalizedExerciseProgramInputSchema,
    outputSchema: PersonalizedExerciseProgramOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
