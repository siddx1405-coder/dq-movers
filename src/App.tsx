import { useState, type ReactNode } from "react";

const mobileNumber = "33370219";
const businessWhatsApp = "77857240";
const photoUrl = (photo: number) => `${import.meta.env.BASE_URL}dq-movers/photo-${photo}.jpg`;
const whatsappUrl =
  "https://wa.me/97477857240?text=Hello%20DQ%20Movers%20Packers%2C%20I%20would%20like%20a%20moving%20quote.";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Family+Park%2C+Muntaza%2C+Doha%2C+Qatar";

type IconName =
  | "arrow"
  | "box"
  | "check"
  | "clock"
  | "close"
  | "location"
  | "mail"
  | "menu"
  | "phone"
  | "shield"
  | "sparkle"
  | "truck"
  | "whatsapp";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const icons: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="m4 7 8 4 8-4v10l-8 4-8-4V7Zm8 4v10" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2-2-4Z" />
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkle: <path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z" />,
    truck: (
      <>
        <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
        <path d="M8 7.8c.4 4.1 3.8 7.3 8 7.7M8 7.8l2 3-1 1m7 3.7-3-1.8-1 1" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {icons[name]}
    </svg>
  );
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`logo ${inverse ? "logo-inverse" : ""}`} href="#top" aria-label="DQ Movers Packers home">
      <span className="logo-mark"><span>DQ</span></span>
      <span className="logo-type">
        <strong>DQ MOVERS</strong>
        <small>PACKERS • DOHA</small>
      </span>
    </a>
  );
}

function BrandedPhoto({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`branded-photo ${className}`}>
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      <figcaption className="photo-stamp">
        <span className="stamp-dq">DQ</span>
        <span>Movers Packers</span>
        <strong>{mobileNumber}</strong>
      </figcaption>
    </figure>
  );
}

const services = [
  {
    icon: "box" as const,
    number: "01",
    title: "Expert packing",
    text: "Careful wrapping and sturdy packing for furniture, kitchenware, clothes and fragile items.",
  },
  {
    icon: "truck" as const,
    number: "02",
    title: "Home moving",
    text: "Reliable door-to-door moves across Doha with a capable team and the right-size vehicle.",
  },
  {
    icon: "shield" as const,
    number: "03",
    title: "Furniture protection",
    text: "Professional handling, protective wrap, secure loading and careful placement at your new address.",
  },
];

const gallery = [
  { file: 1, alt: "DQ Movers trucks outside a Doha villa", shape: "gallery-wide" },
  { file: 2, alt: "Mover professionally packing cartons", shape: "gallery-tall" },
  { file: 3, alt: "Bubble wrapped kitchen items packed in a box", shape: "" },
  { file: 4, alt: "Furniture wrapped securely for a move", shape: "gallery-wide" },
  { file: 5, alt: "Protected furniture prepared for transportation", shape: "" },
  { file: 6, alt: "Moving truck loaded with household belongings", shape: "gallery-tall" },
  { file: 7, alt: "Clothes hangers organized in moving boxes", shape: "gallery-tall" },
  { file: 8, alt: "DQ moving truck securely loaded", shape: "gallery-wide" },
  { file: 9, alt: "Packed household furniture on a moving truck", shape: "gallery-tall" },
  { file: 10, alt: "Kitchen packing service in progress", shape: "" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-mobile-cta" href={whatsappUrl}>Get a free quote</a>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:+974${mobileNumber}`}>
              <Icon name="phone" size={18} />
              <span>{mobileNumber}</span>
            </a>
            <a className="button button-dark header-quote" href={whatsappUrl} target="_blank" rel="noreferrer">
              Free quote <Icon name="arrow" size={18} />
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><span /> Available across Doha today</div>
            <p className="eyebrow">MOVE EASY. MOVE WITH DQ.</p>
            <h1>Your move,<br /><em>handled right.</em></h1>
            <p className="hero-lead">
              Fast, careful and affordable movers and packers in Doha.
              Professional service from only <strong>QR 99</strong>.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href={whatsappUrl} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={20} /> WhatsApp us
              </a>
              <a className="text-link" href="#work">See our work <Icon name="arrow" size={18} /></a>
            </div>
            <div className="hero-trust">
              <div><strong>QR 99</strong><span>Starting price</span></div>
              <div><strong>All Doha</strong><span>Door-to-door</span></div>
              <div><strong>7 days</strong><span>Flexible booking</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <BrandedPhoto
              src={photoUrl(1)}
              alt="DQ Movers trucks ready for a villa move in Doha"
              eager
            />
            <div className="hero-float">
              <span className="float-icon"><Icon name="shield" /></span>
              <span><strong>Careful handling</strong><small>Your belongings, protected</small></span>
            </div>
            <div className="hero-outline">DQ</div>
          </div>
        </div>
      </section>

      <section className="intro section-shell">
        <div className="intro-art">
          <div className="intro-logo"><span>DQ</span><small>MOVERS PACKERS</small></div>
          <BrandedPhoto
            src={photoUrl(2)}
            alt="DQ team member packing moving boxes"
          />
          <div className="mini-note"><Icon name="sparkle" /><span>Clean packing.<br />Confident moving.</span></div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow eyebrow-dark">WHO WE ARE</p>
          <h2>Doha’s dependable<br />moving team.</h2>
          <p className="body-copy">
            Moving should feel like a fresh start, not a headache. Our experienced
            team takes care of the heavy lifting, careful packing and secure
            transport—so you can settle in sooner.
          </p>
          <div className="check-grid">
            <span><i><Icon name="check" size={15} /></i> Trained moving team</span>
            <span><i><Icon name="check" size={15} /></i> Quality packing materials</span>
            <span><i><Icon name="check" size={15} /></i> Clear, affordable pricing</span>
            <span><i><Icon name="check" size={15} /></i> Service anywhere in Doha</span>
          </div>
          <a className="button button-dark" href={`tel:+974${mobileNumber}`}>
            <Icon name="phone" size={18} /> Call {mobileNumber}
          </a>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Everything you need<br />for a smooth move.</h2>
            </div>
            <p>From the first box to the final placement, we bring care, speed and practical experience to every move.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="service-icon"><Icon name={service.icon} size={28} /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">Ask about this service <Icon name="arrow" size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow eyebrow-dark">REAL MOVES. REAL CARE.</p>
            <h2>See us in action.</h2>
          </div>
          <p>Every photo comes from our moving and packing work. What you see is the care your belongings receive.</p>
        </div>
        <div className="gallery">
          {gallery.slice(2).map((photo) => (
            <BrandedPhoto
              key={photo.file}
              src={photoUrl(photo.file)}
              alt={photo.alt}
              className={photo.shape}
            />
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-shell process-grid">
          <div className="process-copy">
            <p className="eyebrow">SIMPLE FROM START TO FINISH</p>
            <h2>Ready when<br />you are.</h2>
            <p>Tell us what you need and where you’re going. We’ll arrange the team, packing and transport.</p>
            <a className="button button-lime" href={whatsappUrl} target="_blank" rel="noreferrer">
              Book on WhatsApp <Icon name="arrow" size={18} />
            </a>
          </div>
          <ol className="steps">
            <li><span>01</span><div><h3>Message us</h3><p>Share your location, moving date and a few details.</p></div></li>
            <li><span>02</span><div><h3>Get your quote</h3><p>Receive clear pricing with services starting from QR 99.</p></div></li>
            <li><span>03</span><div><h3>We move you</h3><p>Our crew arrives, packs, loads and delivers with care.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-card">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-dark">LET’S GET YOU MOVING</p>
            <h2>A better move<br />starts here.</h2>
            <p>Send us a message now for a quick quote anywhere in Doha.</p>
            <div className="contact-actions">
              <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={20} /> WhatsApp {businessWhatsApp}
              </a>
              <a className="button button-outline" href={`tel:+974${mobileNumber}`}>
                <Icon name="phone" size={18} /> Call {mobileNumber}
              </a>
            </div>
          </div>
          <div className="contact-details">
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <span><Icon name="location" /></span>
              <div><small>OUR LOCATION</small><strong>Muntaza, near Family Park<br />Doha, Qatar</strong></div>
            </a>
            <a href="mailto:tutul.medda@gmail.com">
              <span><Icon name="mail" /></span>
              <div><small>EMAIL US</small><strong>tutul.medda@gmail.com</strong></div>
            </a>
            <div>
              <span><Icon name="clock" /></span>
              <div><small>AVAILABILITY</small><strong>7 days a week<br />Across Doha</strong></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <Logo inverse />
            <p>Careful packing. Safe transport.<br />A smoother move across Doha.</p>
          </div>
          <div className="footer-links">
            <div><small>NAVIGATE</small><a href="#services">Services</a><a href="#work">Our work</a><a href="#process">How it works</a></div>
            <div><small>CONTACT</small><a href={`tel:+974${mobileNumber}`}>+974 {mobileNumber}</a><a href={whatsappUrl}>WhatsApp {businessWhatsApp}</a><a href="mailto:tutul.medda@gmail.com">Email us</a></div>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {new Date().getFullYear()} DQ Movers Packers. All rights reserved.</span>
          <span>Muntaza • Doha • Qatar</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={27} />
        <span>Quick quote</span>
      </a>
    </main>
  );
}

export default App;
