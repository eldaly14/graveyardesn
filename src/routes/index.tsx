import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Plane,
  Calendar,
  MicOff,
  PenLine,
  Database,
  MapPin,
  Skull,
} from "lucide-react";
import esnStar from "@/assets/esn-star.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Digital Graveyard — ESN Poland" },
      {
        name: "description",
        content:
          "A humorous but respectful catalogue of deprecated, replaced, or migrated IT projects from ESN Poland.",
      },
      { property: "og:title", content: "The Digital Graveyard — ESN Poland" },
      {
        property: "og:description",
        content:
          "Unlike in life, our dead can come back to life. A catalogue of ESN Poland's retired IT projects.",
      },
    ],
  }),
  component: Index,
});

type Color = "cyan" | "magenta" | "green" | "orange";

const colorMap: Record<Color, string> = {
  cyan: "#00aeef",
  magenta: "#ec008c",
  green: "#7ac143",
  orange: "#f47b20",
};

type Tomb = {
  title: string;
  color: Color;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  badge: string;
  desc: string;
};

const tombs: Tomb[] = [
  {
    title: "jobs.esn.pl",
    color: "cyan",
    Icon: Briefcase,
    badge: "Killed ~2020",
    desc: "A portal meant to connect international students with local careers. It ghosted us around 2020, but the idea remains highly requested.",
  },
  {
    title: "moodle.esn.pl",
    color: "magenta",
    Icon: GraduationCap,
    badge: "Shelved Proposal",
    desc: "The dream of a centralized e-learning hub for the network to eradicate \"IT Illiteracy\". Shelved before it could truly live, but its spirit lingers in our workshops.",
  },
  {
    title: "ESN WIKI 1.0",
    color: "green",
    Icon: BookOpen,
    badge: "Migrated",
    desc: "The ancient scroll of ESN knowledge. There was no fatal crash here—we simply packed up its vast library of network history and moved it to a shiny new wiki ecosystem.",
  },
  {
    title: "visitpoland.esn.pl",
    color: "orange",
    Icon: Plane,
    badge: "Taken by Gov",
    desc: "A digital tour guide intended for incoming Erasmus students to navigate the country. The domain didn't simply expire—it was actually acquired by the Polish government.",
  },
  {
    title: "events.esn.pl",
    color: "cyan",
    Icon: Calendar,
    badge: "Replaced",
    desc: "The master calendar that tried to unite 25+ sections. Ultimately buried by decentralized social media until the new UE Poznań ecosystem was born.",
  },
  {
    title: "speakers.esn.pl",
    color: "magenta",
    Icon: MicOff,
    badge: "Inactive",
    desc: "A visionary directory for ESN alumni and guest lecturers to connect with the network. Today, silence is all that remains.",
  },
  {
    title: "blogerasmus.pl",
    color: "green",
    Icon: PenLine,
    badge: "Archived",
    desc: "Once a bustling, vibrant diary of exchange stories and memories. Now resting quietly in the deep archives of our web history.",
  },
  {
    title: "CraftCMS Discover Europe",
    color: "orange",
    Icon: Database,
    badge: "Killed 2026",
    desc: "The heavy, over-engineered predecessor to our modern WordPress setup. Replaced to allow for Tinder-style voting and scale. May it rest in peace.",
  },
  {
    title: "Static ESNcard Maps",
    color: "cyan",
    Icon: MapPin,
    badge: "Killed 2026",
    desc: "A manual, static GitHub Pages map of discounts that drove maintainers crazy. Reincarnated dynamically on the new server.",
  },
];

function Index() {
  return (
    <div className="graveyard-bg relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 md:pt-24">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <img
            src={esnStar}
            alt="ESN Poland"
            className="mb-8 h-16 w-16 opacity-90"
          />
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            THE DIGITAL GRAVEYARD
          </h1>

          <div className="glass-box mt-10 flex max-w-2xl items-center gap-4 rounded-2xl px-6 py-4">
            <Skull
              className="float-skull shrink-0 text-white"
              size={32}
            />
            <p className="text-left text-base text-white/90 md:text-lg">
              Unlike in life, our dead can come back to life.
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-balance text-sm leading-relaxed text-white/60 md:text-base">
            A respectful (and slightly tongue-in-cheek) catalogue of the
            deprecated, replaced, and migrated digital projects of ESN Poland.
            Some were killed by time, some were taken by governments, others
            simply moved on to a better place. Here, they are remembered.
          </p>
        </header>

        {/* Grid */}
        <section className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tombs.map((t) => (
            <article
              key={t.title}
              className="tombstone"
              style={
                {
                  ["--accent-color" as string]: colorMap[t.color],
                } as React.CSSProperties
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div className="icon-wrap">
                  <t.Icon size={28} />
                </div>
                <span className="status-pill">{t.badge}</span>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white">{t.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t.desc}
              </p>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center font-mono-tech text-xs text-white/40">
          <p>Curated by the 2025/2026 IT Team</p>
          <p className="mt-2 text-white/30">&lt;/system_halt&gt;</p>
        </footer>
      </div>
    </div>
  );
}
