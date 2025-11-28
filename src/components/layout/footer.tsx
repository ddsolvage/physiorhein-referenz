import Link from 'next/link';
import { HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HeartPulse className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">PhysioRhein</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Moderne Physiotherapie & Osteopathie in Wiesbaden.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/leistungen" className="text-muted-foreground hover:text-primary transition-colors">Leistungen</Link></li>
              <li><Link href="/ueber-uns" className="text-muted-foreground hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link href="/patienteninfos" className="text-muted-foreground hover:text-primary transition-colors">Patienteninfos</Link></li>
              <li><Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhysioRhein. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
