import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Cpu, ShieldCheck, FlaskConical, Cable, Brain, Bot, Printer, Cloud, Lock, GraduationCap, NotebookPen, ArrowRight, Sparkles, GitBranch, Gauge, Building2 } from "lucide-react";

/**
 * World-Class Hands-on STEM Lab – VTU (Pre-Final & Final Year)
 * Single-file React component, TailwindCSS styling.
 * Drop into your app's route and render <VTUStemLabCoursePage />
 */

const stat = (label, value, sub) => (
  <div className="p-4 bg-white/60 dark:bg-zinc-900/60 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-zinc-600 dark:text-zinc-400 text-sm">{label}</div>
    {sub && <div className="mt-1 text-xs text-zinc-500">{sub}</div>}
  </div>
);

const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-900/40">
        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    </div>
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-5 md:p-6">
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
    <Sparkles className="w-3.5 h-3.5" /> {children}
  </span>
);

const ModuleItem = ({ index, title, points }) => (
  <details className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 open:bg-white open:dark:bg-zinc-900 transition-all">
    <summary className="cursor-pointer list-none p-4 md:p-5 flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-semibold">{index}</div>
      <div>
        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h4>
        <p className="text-xs text-zinc-500">4 sessions · each ends with a tested build & metric</p>
      </div>
      <ArrowRight className="ml-auto group-open:rotate-90 transition-transform" />
    </summary>
    <div className="px-5 pb-5 -mt-2">
      <ul className="grid sm:grid-cols-2 gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </details>
);

export default function VTUStemLabCoursePage() {
  const modules = [
    {
      title: "Lab Foundations & Rapid Prototyping",
      points: [
        "Safety, instruments (DMM/PSU/ESD), breadboard bring-up",
        "Arduino/ESP32 I/O, PWM, debouncing",
        "Serial + KiCad intro (tiny LED limiter PCB – virtual fab ok)",
        "Parametric CAD; 3D-print a sensor mount",
      ],
    },
    {
      title: "Sensors, Actuators & Control",
      points: [
        "DC motors + L298N + tachometer speed control",
        "Servos & steppers; 2-axis pan–tilt",
        "PID basics; beam balancer (IMU + servo)",
        "Instrumentation & logging; I²C/SPI calibration",
      ],
    },
    {
      title: "IoT & Cloud",
      points: [
        "ESP32 networking: Wi‑Fi, MQTT/REST",
        "Edge→Cloud pipelines (JSON, topics, QoS)",
        "Low-power design: sleep, watchdog, duty-cycle sim",
        "Device security primer: secrets, OTA, measured boot checklist",
      ],
    },
    {
      title: "Mobile Robotics",
      points: [
        "2WD chassis build & kinematics; calibrated driving",
        "PID line following with lap-time metric",
        "Mapping with ultrasonic/IR + finite state machine",
        "Mech add‑ons: 3D-printed sensor brackets, ground clearance",
      ],
    },
    {
      title: "Computer Vision Foundations",
      points: [
        "OpenCV image basics; thresholding, shapes/colour",
        "Edges, homography; fiducial docking",
        "Data collection & labeling SOP (100-image dataset)",
        "Tiny classifiers (MobileNet/TFLite) on Raspberry Pi",
      ],
    },
    {
      title: "ML/AI for Engineers",
      points: [
        "ML pipeline (split/fit/validate): predict motor RPM",
        "TinyML on MCU (quantization) – gesture on ESP32",
        "Jetson bring‑up: containers, CUDA, cameras – YOLO baseline",
        "Edge optimization: INT8/batching; 2× speed with profiling",
      ],
    },
    {
      title: "Edge + Cloud + DevOps",
      points: [
        "FastAPI microservice: device → API → dashboard",
        "CI/CD for firmware & models with GitHub Actions",
        "Telemetry at scale (InfluxDB/Grafana) – live lab dashboard",
        "OTA & fleet management – staged rollout",
      ],
    },
    {
      title: "3D Printing & DfAM",
      points: [
        "DfAM: tolerances, wall/infill strategy – motor mount",
        "Materials & strength: PLA/PETG/TPU A/B deflection test",
        "Reverse‑engineering sprint: recreate & improve a coupler",
        "Mech–elec integration: printed enclosure w/ standoffs",
      ],
    },
    {
      title: "Cybersecurity & Digital Forensics",
      points: [
        "Network fundamentals & traffic – capture MQTT with Wireshark",
        "Threat modeling for robots/IoT – STRIDE & mitigations",
        "Hardening & secure update – signed firmware demo",
        "DFIR basics – reconstruct incident timeline from logs",
      ],
    },
    {
      title: "Capstone & Showcase",
      points: [
        "Pick one: autonomous shelf inspector (CV)",
        "Bio‑med IoT: vital‑signs node + cloud alerting",
        "Industrial: predictive motor health (vibration)",
        "Deliver: 3‑min video, repo, BOM, 1‑page tech brief; Expo & Viva",
      ],
    },
  ];

  const outcomes = [
    "40+ session artifacts with measurable metrics (FPS, accuracy, lap-time, deflection, MTBF)",
    "GitHub portfolio + short demo videos for placements",
    "Cross-disciplinary collaboration (Mech/EEE/EC/CS/IT/Bio‑Med)",
    "Confidence with industry tools: Arduino/ESP32, Raspberry Pi 5, Jetson Orin Nano, OpenCV, FastAPI, Grafana",
  ];

  const quickLinks = [
    { href: "#description", label: "Description" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#prereq", label: "Pre‑requisites" },
    { href: "#delivery", label: "Delivery Details" },
    { href: "#cert", label: "Certification" },
    { href: "#fee", label: "Fee" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.10),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <Pill>World‑Class Hands‑on Program</Pill>
              <h1 className="mt-3 text-2xl md:text-4xl font-extrabold leading-tight">
                🌐 World‑Class Hands‑on STEM Lab for VTU Pre‑Final & Final Year Engineers
              </h1>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl">
                The <strong>Hands‑on STEM Lab Program (60 Hours)</strong> transforms VTU students into job‑ready innovators across
                <em> Robotics, IoT, Edge AI, Computer Vision, 3D Printing, Cloud/DevOps, and Cybersecurity</em> through 40 practical sessions.
                Work in pairs, ship a project every session, and end with a capstone showcase & viva.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href="#fee" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow">
                  Enrol Now <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#curriculum" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-white/60 dark:hover:bg-zinc-800/60 transition">
                  View Curriculum
                </a>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4" />
                  Industry‑aligned • Portfolio‑first
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-3 gap-3">
              {stat("Total Duration", "60h", "40 × 1.5h sessions")}
              {stat("Batch Size", "40", "Pair‑work: 20 teams")}
              {stat("Capstone", "Expo+Viva", "Industry‑style demo")}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-10">
          <Section id="description" icon={NotebookPen} title="Course Description">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Learners work in pairs to design, prototype, and demo a project <strong>every session</strong>, building a
                mini‑portfolio (GitHub repos + 2–3 minute demo videos). The course culminates in a
                <strong> Capstone Project Showcase & Viva</strong> for faculty and industry partners.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/60 dark:border-emerald-800">
                  <GitBranch className="w-5 h-5" />
                  <p className="mt-2 text-sm font-medium">Build Weekly</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Working prototype every class</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800">
                  <Gauge className="w-5 h-5" />
                  <p className="mt-2 text-sm font-medium">Measure & Improve</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Each build has a metric</p>
                </div>
                <div className="p-4 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200/60 dark:border-fuchsia-800">
                  <Building2 className="w-5 h-5" />
                  <p className="mt-2 text-sm font-medium">Career Ready</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Portfolio for placements</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "Robotics", Icon: Bot },
                  { label: "IoT", Icon: Cable },
                  { label: "Edge AI", Icon: Brain },
                  { label: "Computer Vision", Icon: Cpu },
                  { label: "3D Printing", Icon: Printer },
                  { label: "Cloud/DevOps", Icon: Cloud },
                  { label: "Cybersecurity", Icon: Lock },
                ].map(({ label, Icon }, i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                    <Icon className="w-3.5 h-3.5" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          <Section id="curriculum" icon={FlaskConical} title="Curriculum (60 Hours / 40 Sessions)">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">10 modules · 4 sessions each · every session ends with a tested project, a performance metric, and a code commit.</p>
            <div className="space-y-3">
              {modules.map((m, idx) => (
                <ModuleItem key={idx} index={idx + 1} title={`Module ${idx + 1} — ${m.title}`} points={m.points} />
              ))}
            </div>
          </Section>

          <Section id="eligibility" icon={Users} title="Eligibility">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold mb-2">Who can join?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Pre‑final (3rd year) and final year VTU engineering students</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />All branches: Mechanical, Electrical, Electronics, CS/IT, Bio‑Medical, Civil</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold mb-2">Ideal for</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Students preparing for placements, higher studies, or start‑ups</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Builders who love hands‑on, cross‑disciplinary collaboration</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="prereq" icon={Cpu} title="Pre‑requisites">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Basic programming (Python or C preferred)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Core engineering fundamentals (circuits, mechanics, math)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />No prior robotics/AI needed — we start from basics</li>
            </ul>
          </Section>

          <Section id="delivery" icon={Clock} title="Course Delivery Details">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h4 className="font-semibold mb-2">Schedule & Format</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Duration: 60 hours (40 sessions × 1.5 hours)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Mode: In‑person, hands‑on lab</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Batch size: 40 learners (pair‑work: 20 teams)</li>
                </ul>

                <h4 className="font-semibold mt-4 mb-2">Teaching Pattern (per session)</h4>
                <div className="text-sm rounded-xl border border-zinc-200 dark:border-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-800">
                  {[
                    { label: "Why it matters + safety", time: "10 min" },
                    { label: "Hands‑on build & test", time: "60 min" },
                    { label: "Demo & reflect (metric + lesson)", time: "10 min" },
                    { label: "Checkpoint quiz / GitHub commit / photo log", time: "10 min" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2">
                      <span>{row.label}</span>
                      <span className="text-xs text-zinc-500">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Lab Setup</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Each pair: microcontrollers, sensors, small tool kit</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Shared: Raspberry Pi 5, Jetson Orin Nano, 3D printers, oscilloscope, fabrication tools</li>
                </ul>

                <h4 className="font-semibold mt-4 mb-2">Assessment</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Per session (10 pts): build (4), code (2), measurement (2), verbal (2)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />Capstone (40 pts): framing (8), rigor (12), demo (10), docs (10)</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="cert" icon={GraduationCap} title="Certification / Diploma">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />Certificate of Completion in Hands‑on STEM Lab</li>
              <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />Co‑branded with Industry Partners</li>
              <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />Special Distinction: “Excellence in Applied Engineering Innovation”</li>
              <li className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />Capstone showcase to faculty & recruiters</li>
            </ul>
          </Section>

          <Section id="fee" icon={WalletIcon} title="Fee & Inclusions">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200/60 dark:border-indigo-800">
                  <div className="text-sm uppercase tracking-wide text-indigo-700 dark:text-indigo-300 font-semibold">Program Fee (per student)</div>
                  <div className="mt-1 text-3xl font-extrabold">₹XX,XXX</div>
                  <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Final fee will align with VTU policy & hardware sharing plan.</p>
                </div>
                <h4 className="font-semibold mt-4 mb-2">What’s included</h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Lab hardware & software access",
                    "Consumables: 3D filament, sensors, components",
                    "GitHub repos & project showcase platform",
                    "Cloud dashboards (Grafana/InfluxDB)",
                    "Certification costs",
                  ].map((v, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />{v}</li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold">Outcomes</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  {outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600" />{o}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow">Apply Now<ArrowRight className="w-4 h-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700">Request a Quote</a>
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 h-fit space-y-6">
          <nav className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
            <h4 className="font-semibold mb-2">Quick Navigation</h4>
            <ul className="space-y-1 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block px-3 py-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
            <h4 className="font-semibold mb-1 flex items-center gap-2"><Users className="w-4 h-4" /> Batch Details</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center justify-between"><span>Seats</span><span className="font-medium">40</span></li>
              <li className="flex items-center justify-between"><span>Teams</span><span className="font-medium">20 pairs</span></li>
              <li className="flex items-center justify-between"><span>Session</span><span className="font-medium">1.5 hours</span></li>
              <li className="flex items-center justify-between"><span>Total</span><span className="font-medium">60 hours</span></li>
            </ul>
            <a href="#apply" className="mt-3 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">Reserve Seat</a>
          </div>
        </aside>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Have questions about institute pricing or custom cohorts?</p>
            <p className="text-sm font-medium">Write to <a className="underline" href="mailto:admissions@yourdomain.in">admissions@yourdomain.in</a></p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700">Contact Sales</a>
            <a href="#fee" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small wallet icon to avoid extra import bloat
function WalletIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2h-3a3 3 0 1 0 0 6h3v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 11h-3a2 2 0 1 0 0 4h3v-4Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
