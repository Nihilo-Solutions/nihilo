import type { Metadata } from 'next';
import IntakeForm from './IntakeForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Talk to a Principal | Nihilo Solutions',
  },
  description: "Tell us what you're working on. We'll tell you if we can help.",
  alternates: {
    canonical: 'https://nihilosolutions.com/intake',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntakePage() {
  return <IntakeForm />;
}
