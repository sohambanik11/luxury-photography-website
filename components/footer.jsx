import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl text-primary mb-4">LUXE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturing timeless moments with elegance and artistry.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/portfolio?filter=wedding"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?filter=events"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Event Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?filter=portrait"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio?filter=commercial"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Commercial Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="/gear" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@luxephoto.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@luxephoto.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Luxe Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
