'use server';

/**
 * @fileOverview Generates and refines company story and mission statements using generative AI.
 *
 * - generateCompanyContent - A function that generates company content.
 * - GenerateCompanyContentInput - The input type for the generateCompanyContent function.
 * - GenerateCompanyContentOutput - The return type for the generateCompanyContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCompanyContentInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  companyVision: z.string().describe('The vision of the company.'),
  contentRequest: z.string().describe('The specific content to generate (e.g., company story, mission statement).'),
  tone: z.string().default('bold and ambitious').describe('The desired tone of the content.'),
});
export type GenerateCompanyContentInput = z.infer<typeof GenerateCompanyContentInputSchema>;

const GenerateCompanyContentOutputSchema = z.object({
  content: z.string().describe('The generated company content.'),
});
export type GenerateCompanyContentOutput = z.infer<typeof GenerateCompanyContentOutputSchema>;

export async function generateCompanyContent(input: GenerateCompanyContentInput): Promise<GenerateCompanyContentOutput> {
  return generateCompanyContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCompanyContentPrompt',
  input: {schema: GenerateCompanyContentInputSchema},
  output: {schema: GenerateCompanyContentOutputSchema},
  prompt: `You are a marketing expert specializing in crafting compelling content for technology companies.

  Based on the provided company name, vision, content request, and tone, generate high-quality content.

  Company Name: {{{companyName}}}
  Company Vision: {{{companyVision}}}
  Content Request: {{{contentRequest}}}
  Tone: {{{tone}}}

  Generated Content:`, // Ensure the response is assigned to the 'content' field of the output schema
});

const generateCompanyContentFlow = ai.defineFlow(
  {
    name: 'generateCompanyContentFlow',
    inputSchema: GenerateCompanyContentInputSchema,
    outputSchema: GenerateCompanyContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
