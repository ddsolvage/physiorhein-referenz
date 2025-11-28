import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, Phone, HeartPulse } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center gap-2">
      <HeartPulse className="h-6 w-6 text-primary" />
      <span className="text-lg font-bold">PhysioRhein</span>
    </div>
  );

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Moderne Physiotherapie &amp; Osteopathie in Wiesbaden. Evidenzbasiert, menschlich, individuell.
            </p>
            <div className="flex items-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2: Praxis */}
          <div>
            <h4 className="font-semibold mb-4">Praxis</h4>
            <ul className="space-y-3">
              <li><Link href="/ueber-uns" className="text-muted-foreground hover:text-primary transition-colors text-sm">Über uns</Link></li>
              <li><Link href="/leistungen" className="text-muted-foreground hover:text-primary transition-colors text-sm">Leistungen</Link></li>
              <li><Link href="/patienteninfos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Patienteninfos</Link></li>
              <li><Link href="/jobs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Jobs / Karriere</Link></li>
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li><Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors text-sm">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors text-sm">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Rheinstraße 74, 65185 Wiesbaden</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a href="tel:+49123456789" className="text-muted-foreground hover:text-primary">+49 (0)123 456789</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a href="mailto:hallo@physiorhein.de" className="text-muted-foreground hover:text-primary">hallo@physiorhein.de</a>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PhysioRhein. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
