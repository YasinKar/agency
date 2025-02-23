import { getSettings } from '@/actions/content.actions';
import { getService } from '@/actions/service.actions';
import ServiceShowcase from '@/components/ServiceShowcase';
import { Settings } from '@/types/content.types';
import { Service } from '@/types/service.types';
import Link from 'next/link'
import { notFound } from 'next/navigation';

export async function generateMetadata({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const service = await getService(slug) as Service;
  const settings = await getSettings() as Settings;

  return {
    title: `${settings.site_name} | ${service.title}`,
  }
}

export default async function ServicesPage({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  if (!slug) notFound()

  const service = await getService(slug) as Service

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center text-text-primary">
        <h1 className="text-4xl font-bold mb-4 text-secondary">Service Not Found</h1>
        <p className="text-lg">The requested service does not exist.</p>
        <Link href="/" className="mt-8 inline-block text-secondary hover:text-special transition-colors">
          Home
        </Link>
      </div>
    )
  }

  return (
    <ServiceShowcase service={service} />
  )
}