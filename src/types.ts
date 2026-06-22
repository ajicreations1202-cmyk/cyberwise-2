/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Tool {
  name: string;
  category: string;
}

export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  duration: string;
  topics: string[];
  tools: Tool[];
  highlights: string[];
}

export interface CareerRole {
  title: string;
  description: string;
  roles: string[];
  demandLevel: 'High' | 'Very High' | 'Trending';
  growth: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: { [key: string]: number }; // Maps program ID to suitability point
  }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  message: string;
}
