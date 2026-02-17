import Image from 'next/image';
import MenuPreviewTabs from '@/components/menu-preview-tabs';

const whatsappUrl = 'https://wa.me/971500000000';
const callUrl = 'tel:+971500000000';
const mapsUrl =
  'https://maps.google.com/?q=Al+Quoz+Industrial+Area+4,+Dubai';

const signaturePlates = [
  {
    title: 'Brisket Plate',
    description: '12-hour smoked brisket, bark-heavy slices, pickles, fries.',
    image: '/food/brisket-plate.jpg'
  },
  {
    title: 'Beef Ribs Stack',
    description: 'Juicy short ribs with pepper crust and ember glaze.',
    image: '/food/beef-ribs-stack.jpg'
  },
  {
    title: 'Smoked Chicken Quarter',
    description: 'Wood-fired chicken, citrus rub, buttery finish.',
    image: '/food/smoked-chicken-quarter.jpg'
  },
  {
    title: 'Pulled Beef Sando',
    description: 'Soft bun, smoky pulled beef, jalapeno slaw.',
    image: '/food/pulled-beef-sando.jpg'
  },
  {
    title: 'Burnt Ends Box',
    description: 'Sticky caramelized burnt ends, pickles, toasted bread.',
    image: '/food/burnt-ends-box.jpg'
  },
  {
    title: 'Sausage + Wings Combo',
    description: 'Snappy sausage links and hot smoked wings.',
    image: '/food/sausage-wings-combo.jpg'
  }
];

const galleryImages = [
  '/food/brisket-plate.jpg',
  '/food/beef-ribs-stack.jpg',
  '/food/smoked-chicken-quarter.jpg',
  '/food/pulled-beef-sando.jpg',
  '/food/burnt-ends-box.jpg',
  '/food/sausage-wings-combo.jpg',
  '/food/hero.png',
  '/food/beef-ribs-stack.jpg'
];

const reviews = [
  {
    quote:
      'The brisket is unreal. Smoky, juicy, and worth planning your weekend around.',
    source: 'Foodie DXB'
  },
  {
    quote:
      'A proper street-smokehouse vibe with serious BBQ technique. Big flavor, no shortcuts.',
    source: 'Dubai Bites Weekly'
  },
  {
    quote: 'Best pickup spot in Al Quoz for weekend BBQ drops. Fast service too.',
    source: 'Local Eats Journal'
  }
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10.9a16 16 0 0 0 5.1 5.1l2.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12a8.9 8.9 0 0 1-1.3 4.7A9 9 0 1 1 12 3a8.9 8.9 0 0 1 7.7 4.3A8.9 8.9 0 0 1 21 12Z" />
      <path d="m8.6 12.5 2.6 2.5 4.2-4.1" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-charcoal text-cream">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="rounded-lg border border-black/25 bg-cream/95 px-2 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
              <Image src="/brand/logo.png" alt="Big T BBQ logo" width={112} height={46} className="h-7 w-auto object-contain sm:h-8 md:h-9" />
            </span>
          </a>

          <nav className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.08em] md:flex md:gap-5 lg:gap-6 lg:text-sm">
            <a href="#menu" className="hover:text-heat">Menu</a>
            <a href="#location" className="hover:text-heat">Location</a>
            <a href="#gallery" className="hover:text-heat">Gallery</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative isolate min-h-[92svh] overflow-hidden pt-16 sm:min-h-[92vh] sm:pt-20">
        <Image
          src="/food/hero.png"
          alt="Smoked brisket hero shot"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/70 to-charcoal" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/65 via-black/15 to-transparent md:w-4/5" />
        <div className="smoke-haze absolute inset-0" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-10 sm:pt-12 md:px-6 md:pt-20">
          <div className="w-fit -rotate-2 border border-charcoal/60 bg-heat px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-charcoal shadow-tape">
            Weekend Only
          </div>

          <div className="max-w-2xl space-y-5">
            <div className="inline-flex w-fit rounded-xl border border-black/20 bg-cream/92 px-3 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.45)]">
              <Image src="/brand/logo.png" alt="Big T BBQ" width={495} height={205} className="h-12 w-auto object-contain md:h-14" />
            </div>
            <p className="font-heading text-[clamp(2.2rem,12.5vw,4.4rem)] uppercase leading-[0.9] tracking-[0.03em] drop-shadow-[0_4px_14px_rgba(0,0,0,0.68)] sm:tracking-wide md:text-8xl">
              Texas BBQ. Al Quoz.
            </p>
            <p className="max-w-xl text-base text-cream/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-lg">
              100% wood-smoked. From scratch. Weekend drops.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#menu-preview"
                className="w-full rounded-full bg-heat px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-charcoal transition hover:bg-cream sm:w-auto"
              >
                View Menu
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-cream/50 bg-black/30 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide transition hover:border-heat hover:text-heat sm:w-auto"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="w-fit rounded-full border border-cream/30 bg-charcoal/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cream">
            100% Wood Smoked
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 right-4 rotate-[-6deg] text-xs font-semibold uppercase tracking-[0.2em] text-heat/75 md:right-8">
          Smoke Drop
        </div>
      </section>

      <section id="menu" className="section-shell">
        <div className="torn-title">Signature Plates</div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signaturePlates.map((plate) => (
            <article key={plate.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25">
              <div className="relative aspect-square overflow-hidden">
                <Image src={plate.image} alt={plate.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="font-heading text-2xl uppercase tracking-wide sm:text-3xl">{plate.title}</h3>
                <p className="text-sm text-cream/80">{plate.description}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-heat/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-heat transition hover:bg-heat hover:text-charcoal"
                >
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-wood/50 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="font-heading text-4xl uppercase leading-[0.92] tracking-wide sm:text-5xl">Why Big T</h2>
            <p className="mt-3 max-w-md text-cream/85">
              Small-batch Texas BBQ made for weekend cravings. Smoke, bark, and bold flavor without shortcuts.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-cream/90 md:text-base">
            <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">100% wood smoked, low and slow.</li>
            <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">From scratch rubs, sauces, and sides.</li>
            <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">Weekend drops only: Fri/Sat/Sun.</li>
            <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">Pickup in Al Quoz Industrial Area 4.</li>
          </ul>
        </div>
      </section>

      <section id="menu-preview" className="section-shell">
        <div className="torn-title">Menu Preview</div>
        <div className="mt-6">
          <MenuPreviewTabs />
        </div>
      </section>

      <section id="location" className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6">
            <h2 className="font-heading text-4xl uppercase tracking-wide sm:text-5xl">Hours + Location</h2>
            <p className="mt-4 text-lg font-semibold text-heat">Fri/Sat/Sun 12-10 PM</p>
            <p className="mt-2 text-cream/85">Al Quoz Industrial Area 4, Dubai</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full bg-heat px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-charcoal transition hover:bg-cream sm:w-auto"
              >
                Get Directions
              </a>
              <a
                href={callUrl}
                className="w-full rounded-full border border-cream/40 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide transition hover:border-heat hover:text-heat sm:w-auto"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <iframe
              title="Big T BBQ location map"
              src="https://maps.google.com/maps?q=Al%20Quoz%20Industrial%20Area%204%2C%20Dubai&output=embed"
              className="h-[300px] w-full sm:h-[400px] lg:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell">
        <div className="torn-title">Gallery</div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div key={`${src}-${index}`} className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
              <Image src={src} alt={`Gallery item ${index + 1}`} fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-28 md:pb-14">
        <div className="torn-title">Reviews & Press</div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.source} className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-cream/90">"{review.quote}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-heat">{review.source}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/40 px-4 pb-24 pt-8 md:pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 text-center text-sm text-cream/80 sm:text-left md:grid-cols-3 md:px-2">
          <p className="font-semibold">Big T BBQ</p>
          <p>Al Quoz Industrial Area 4, Dubai</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-heat">
              Instagram
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-heat">
              WhatsApp
            </a>
            <span>Fri/Sat/Sun 12-10 PM</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-charcoal/95 px-2 py-2 backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-2 text-[11px] font-semibold uppercase tracking-wide text-cream">
          <a href={callUrl} className="mobile-bar-link">
            <PhoneIcon />
            <span>Call</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mobile-bar-link">
            <ChatIcon />
            <span>WhatsApp</span>
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="mobile-bar-link">
            <MapIcon />
            <span>Maps</span>
          </a>
          <a href="#menu-preview" className="mobile-bar-link">
            <MenuIcon />
            <span>Menu</span>
          </a>
        </div>
      </div>
    </main>
  );
}
