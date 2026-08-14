"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import DynamicBackground from "@/components/DynamicBackground";

const FOCUS_AREAS = [
  {
    title: "SOC engineering",
    desc: "Detection, case handling, evidence capture, and operator-centered incident workflows.",
  },
  {
    title: "Security automation",
    desc: "Dry-run-first orchestration with human approval, audit records, and rollback requirements.",
  },
  {
    title: "System architecture",
    desc: "Clear boundaries between public documentation, the control plane, runtime, and product surface.",
  },
  {
    title: "Responsible AI integration",
    desc: "AI-assisted analysis that records uncertainty and avoids sending raw client data to external providers.",
  },
];

const JOURNEY = [
  {
    label: "Origin",
    title: "Project Synapse",
    desc: "A cybersecurity graduation project exploring how practical SOC capabilities could be made more accessible to smaller organizations.",
  },
  {
    label: "Architecture",
    title: "From a single project to separated system boundaries",
    desc: "The work was split into a public architecture, a control plane, a SOC runtime, and a public website so each responsibility could mature independently.",
  },
  {
    label: "Current",
    title: "SOCRoot pre-production validation",
    desc: "The current focus is narrowing the system into testable, safe workflows with explicit evidence gates instead of expanding unverified capability claims.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Evidence before claims",
    desc: "A capability is described as verified only when tests, deployment evidence, limitations, and rollback behavior can be reviewed.",
  },
  {
    n: "02",
    title: "Human control for sensitive actions",
    desc: "High-impact remediation is never presented as unattended automation. Dry-run and explicit approval are the default.",
  },
  {
    n: "03",
    title: "Client data stays bounded",
    desc: "Raw client data is not published, reused as portfolio material, or sent to external AI providers without explicit authorization.",
  },
  {
    n: "04",
    title: "Architecture should reveal uncertainty",
    desc: "Pre-production status, incomplete integrations, assumptions, and safety constraints belong in the public engineering record.",
  },
];

const REPOSITORIES = [
  ["Public architecture", "project-synapse", "https://github.com/Muath-Yousef/project-synapse"],
  ["Control plane", "ide-agentic-engine", "https://github.com/Muath-Yousef/ide-agentic-engine"],
  ["SOC runtime", "Project-Synapse-SOC-Factory", "https://github.com/Muath-Yousef/Project-Synapse-SOC-Factory"],
  ["Engineering portfolio", "portfolio-site", "https://github.com/Muath-Yousef/portfolio-site"],
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      <DynamicBackground />
      <div className="container mx-auto px-6 relative z-10">
        <section className="max-w-4xl mx-auto text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-5"
          >
            About SOCRoot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-7"
          >
            An engineering initiative,
            <span className="text-teal-400"> documented in public.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto"
          >
            SOCRoot grew from Project Synapse, a cybersecurity graduation project by Mu&apos;ath Yousef. The work investigates practical, evidence-driven security operations for smaller organizations. It is currently in active engineering and pre-production validation.
          </motion.p>
        </section>

        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 max-w-6xl mx-auto mb-24">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="p-8 md:p-10 border border-white/8 bg-white/[0.02] angular-cut bg-noise glass-dark"
          >
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">The builder</span>
            <h2 className="text-3xl font-extrabold mt-4 mb-5">Mu&apos;ath Yousef</h2>
            <p className="text-neutral-400 leading-relaxed mb-5">
              Cybersecurity graduate from Tafila Technical University, focused on SOC engineering, security automation, architecture, and operational evidence.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-7">
              The public repositories show both implemented work and its limits. They deliberately avoid presenting planned modules, synthetic demonstrations, or incomplete integrations as customer outcomes or production guarantees.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/muath-ysf"
                className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 py-3 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Muath-Yousef"
                className="border border-white/10 hover:border-teal-500/30 px-6 py-3 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                GitHub profile
              </a>
            </div>
          </motion.article>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="p-8 border border-amber-500/20 bg-amber-500/[0.03]"
          >
            <span className="font-mono text-xs text-amber-300 uppercase tracking-widest">Maturity statement</span>
            <h2 className="text-2xl font-bold mt-4 mb-4">What this site does—and does not—claim</h2>
            <ul className="space-y-4 text-sm text-neutral-400 leading-relaxed">
              <li>• The architecture and code are substantial engineering work.</li>
              <li>• Some components are prototypes or partial integrations.</li>
              <li>• Demonstration data and scenarios are labeled as synthetic.</li>
              <li>• No public 24/7 service, SLA, autonomous remediation, customer count, or certification claim is made without evidence.</li>
              <li>• Formal production claims require tests, deployment records, monitoring, and rollback validation.</li>
            </ul>
          </motion.aside>
        </section>

        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Focus</p>
            <h2 className="text-4xl font-extrabold">Current engineering areas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {FOCUS_AREAS.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7 border border-white/8 bg-white/[0.02]"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Evolution</p>
            <h2 className="text-4xl font-extrabold">From Synapse to SOCRoot</h2>
          </div>
          <div className="space-y-5">
            {JOURNEY.map((item, index) => (
              <motion.article
                key={item.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid sm:grid-cols-[120px_1fr] gap-5 p-6 border border-white/5 bg-black/20"
              >
                <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">{item.label}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Principles</p>
            <h2 className="text-4xl font-extrabold">How the work is evaluated</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map((item, index) => (
              <motion.article
                key={item.n}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7 border border-white/8 bg-white/[0.02]"
              >
                <span className="font-mono text-2xl font-black text-teal-500/30">{item.n}</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-4">Repository map</p>
            <h2 className="text-4xl font-extrabold">Review the source by responsibility</h2>
          </div>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {REPOSITORIES.map(([role, name, href]) => (
              <a key={name} href={href} className="grid sm:grid-cols-[180px_1fr_auto] gap-4 py-5 items-center group">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{role}</span>
                <span className="font-semibold text-white group-hover:text-teal-400 transition-colors">{name}</span>
                <span className="text-teal-400">→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center border-t border-white/5 pt-16">
          <h2 className="text-3xl font-extrabold mb-5">Start with the architecture and scope</h2>
          <p className="text-neutral-500 mb-8">
            Collaboration begins with authorization, bounded goals, and evidence requirements—not a promise of unattended production capability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/Muath-Yousef/project-synapse" className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-7 py-3 transition-colors">
              Review Project Synapse
            </a>
            <Link href="/contact" className="border border-white/10 hover:border-teal-500/30 px-7 py-3 text-neutral-300 transition-colors">
              Contact Mu&apos;ath
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
