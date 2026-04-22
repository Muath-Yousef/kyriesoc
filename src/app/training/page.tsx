"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, ChevronRight, Share2, Download } from "lucide-react";

type Chapter = 1 | 2 | 3;

const CHAPTERS = [
  {
    title: "Understanding Cyber Threats",
    content: "What is a cyberattack? Any attempt to expose, alter, disable, destroy, steal or gain unauthorized access to or make unauthorized use of an asset.",
    points: [
      "Phishing: Fraudulent emails appearing to be from reputable sources.",
      "Ransomware: Malware that encrypts your files and demands payment.",
      "Social Engineering: Manipulating people into giving up confidential info.",
    ],
    questions: [
      {
        id: "q1_1",
        text: "1. What is phishing?",
        options: [
          { value: "wrong1", label: "A fishing technique" },
          { value: "correct", label: "A fraudulent attempt to steal credentials via fake emails" },
          { value: "wrong2", label: "A type of malware" },
        ],
      },
      {
        id: "q1_2",
        text: "2. If you receive an urgent email asking for your password, you should:",
        options: [
          { value: "wrong1", label: "Reply with your password" },
          { value: "correct", label: "Never share passwords — report to IT" },
          { value: "wrong2", label: "Click the link and verify" },
        ],
      },
      {
        id: "q1_3",
        text: "3. Ransomware is:",
        options: [
          { value: "wrong1", label: "An antivirus tool" },
          { value: "correct", label: "Malware that encrypts your files and demands payment" },
        ],
      },
    ],
  },
  {
    title: "Safe Online Behavior",
    content: "Your daily habits are the strongest defense.",
    points: [
      "Passwords: Use long passphrases. Never reuse them.",
      "Links: Always hover before clicking to check the destination.",
      "Public WiFi: Never access sensitive company accounts over airport or cafe WiFi without a VPN.",
    ],
    questions: [
      {
        id: "q2_1",
        text: "1. A strong password should:",
        options: [
          { value: "wrong1", label: "Be your name + birth year" },
          { value: "correct", label: "Be at least 12 characters with mixed types" },
        ],
      },
      {
        id: "q2_2",
        text: "2. Before clicking a link in an email, you should:",
        options: [
          { value: "wrong1", label: "Click immediately if it looks official" },
          { value: "correct", label: "Hover over it to check the actual URL" },
        ],
      },
      {
        id: "q2_3",
        text: "3. On public WiFi, you should:",
        options: [
          { value: "wrong1", label: "Access all accounts normally" },
          { value: "correct", label: "Avoid accessing sensitive accounts without VPN" },
        ],
      },
    ],
  },
  {
    title: "Incident Response",
    content: "Time is critical during a security incident. Rapid reporting minimizes damage.",
    points: [
      "Do: Disconnect your device from the network immediately if you suspect malware.",
      "Do: Report it to the IT/Security team immediately.",
      "Don't: Try to fix it yourself or keep working.",
    ],
    questions: [
      {
        id: "q3_1",
        text: "1. If you accidentally click a suspicious link, you should:",
        options: [
          { value: "wrong1", label: "Ignore it" },
          { value: "correct", label: "Immediately disconnect from network and notify IT" },
        ],
      },
      {
        id: "q3_2",
        text: "2. During a security incident, you should NOT:",
        options: [
          { value: "wrong1", label: "Contact your IT team" },
          { value: "correct", label: "Continue working normally to avoid panic" },
        ],
      },
      {
        id: "q3_3",
        text: "3. The first person to contact during a cyberattack is:",
        options: [
          { value: "wrong1", label: "The CEO" },
          { value: "correct", label: "Your IT/Security team immediately" },
        ],
      },
    ],
  },
];

export default function TrainingPortal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [employeeName, setEmployeeName] = useState("");
  const [currentChapter, setCurrentChapter] = useState<number | "cert">(0);
  const [attempts, setAttempts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [certData, setCertData] = useState({ id: "", date: "" });
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const auth = localStorage.getItem("training_auth");
    const savedName = localStorage.getItem("employeeName");
    const completed = localStorage.getItem("courseCompleted");
    const savedChapter = localStorage.getItem("currentChapter");

    if (auth === "true") setIsLoggedIn(true);
    if (savedName) setEmployeeName(savedName);

    if (completed === "true") {
      setCurrentChapter("cert");
      setCertData({
        id: "CERT-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString(),
      });
    } else if (savedChapter) {
      setCurrentChapter(parseInt(savedChapter));
    }

    setIsLoaded(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Simple gate — any company-looking email + any password grants training access
    const domain = loginEmail.split("@")[1] ?? "";
    const blocked = new Set(["gmail.com","yahoo.com","hotmail.com","outlook.com","protonmail.com"]);
    if (!domain || blocked.has(domain)) {
      alert("Please use your company email to access training.");
      return;
    }
    localStorage.setItem("training_auth", "true");
    setIsLoggedIn(true);
  }

  function handleStart() {
    if (!employeeName.trim()) { alert("Please enter your name"); return; }
    localStorage.setItem("employeeName", employeeName);
    localStorage.setItem("currentChapter", "1");
    setCurrentChapter(1);
  }

  function handleOptionSelect(qId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function submitQuiz(chapter: Chapter) {
    const chap = CHAPTERS[chapter - 1];
    const newAttempts = { ...attempts, [chapter]: (attempts[chapter] ?? 0) + 1 };
    setAttempts(newAttempts);
    const passed = chap.questions.every((q) => answers[q.id] === "correct");

    if (passed) {
      setErrorMsg("");
      setAnswers({});
      if (chapter < 3) {
        localStorage.setItem("currentChapter", String(chapter + 1));
        setCurrentChapter(chapter + 1);
      } else {
        localStorage.setItem("courseCompleted", "true");
        const cert = { id: "CERT-" + Math.floor(100000 + Math.random() * 900000), date: new Date().toLocaleDateString() };
        setCertData(cert);
        setCurrentChapter("cert");
      }
    } else {
      if ((newAttempts[chapter] ?? 0) >= 2) {
        setErrorMsg("Correct answers are now highlighted in green. Select them to proceed.");
      } else {
        setErrorMsg("Answer all questions correctly to continue. Review and try again.");
      }
    }
  }

  if (!isLoaded) return <div className="min-h-screen" />;

  // ── Login Gate ──
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Security Training Portal</h1>
            <p className="text-neutral-500 mt-2 text-sm">Sign in with your company email to access training modules.</p>
          </div>

          <div className="border border-white/8 bg-white/[0.02] rounded-2xl p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Company Email</label>
                <input type="email" required placeholder="you@company.com" value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Password</label>
                <input type="password" required placeholder="••••••••••" value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all text-sm mt-2">
                Access Training
              </button>
            </form>
            <p className="text-center text-xs text-neutral-600 mt-5">
              Don&apos;t have an account? <a href="/portal/login" className="text-emerald-500 hover:underline">Register via Portal →</a>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Course ──
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em] mb-4">Powered by SOC Root</p>
          <h1 className="text-4xl font-extrabold tracking-tight">Security Awareness <span className="text-emerald-400">Training</span></h1>
          <p className="text-neutral-500 mt-3 text-sm">3-module course · 100% pass required · Verifiable certificate upon completion</p>
        </div>

        {/* Progress */}
        {currentChapter !== 0 && (
          <div className="flex items-center justify-center gap-3 mb-12">
            {["Threats", "Behavior", "Incident Response", "Certificate"].map((label, idx) => {
              const num = idx + 1;
              const isCert = label === "Certificate";
              const isActive = currentChapter === num || (currentChapter === "cert" && isCert);
              const isPast = (typeof currentChapter === "number" && num < currentChapter) || currentChapter === "cert";
              return (
                <div key={label} className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive ? "bg-emerald-500 text-black font-bold" :
                    isPast ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" :
                    "bg-white/5 text-neutral-600 border border-white/5"
                  }`}>
                    <span>{isPast && !isActive ? "✓" : num}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                  {idx < 3 && <div className={`w-6 h-px ${isPast ? "bg-emerald-500/40" : "bg-white/5"}`} />}
                </div>
              );
            })}
          </div>
        )}

        {/* Intro */}
        {currentChapter === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Course</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              This 3-part course covers essential cybersecurity practices for employees. You must score 100% on each quiz to proceed. A verifiable certificate will be issued upon completion.
            </p>
            <div className="flex flex-col gap-4 max-w-sm">
              <input type="text" placeholder="Enter your full name for the certificate..."
                className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500/60 transition-colors text-white placeholder-neutral-600"
                value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
              <button onClick={handleStart} className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                Start Training <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Chapter content */}
        {typeof currentChapter === "number" && currentChapter > 0 && (
          <motion.div key={currentChapter} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="border border-white/8 bg-white/[0.02] p-8 rounded-2xl">
              <p className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest mb-3">Chapter {currentChapter} of 3</p>
              <h2 className="text-2xl font-bold mb-4">{CHAPTERS[currentChapter - 1].title}</h2>
              <p className="text-neutral-400 mb-5 leading-relaxed">{CHAPTERS[currentChapter - 1].content}</p>
              <ul className="space-y-3 pl-4 border-l-2 border-emerald-500/30">
                {CHAPTERS[currentChapter - 1].points.map((pt, i) => (
                  <li key={i} className="text-neutral-400 text-sm leading-relaxed">{pt}</li>
                ))}
              </ul>
            </div>

            <div className="border border-emerald-500/20 bg-emerald-500/5 p-8 rounded-2xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-6">Quiz {currentChapter}</h3>
              <div className="space-y-7 mb-8">
                {CHAPTERS[currentChapter - 1].questions.map((q) => (
                  <div key={q.id}>
                    <p className="mb-3 font-medium text-sm">{q.text}</p>
                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const attCount = attempts[currentChapter as Chapter] ?? 0;
                        const isSelected = answers[q.id] === opt.value;
                        const showCorrect = attCount >= 2 && opt.value === "correct";
                        return (
                          <label key={opt.value} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            showCorrect ? "border-emerald-500 bg-emerald-500/10" :
                            isSelected && opt.value === "correct" ? "border-emerald-500 bg-emerald-500/5" :
                            isSelected ? "border-red-500 bg-red-500/5" :
                            "border-white/8 bg-black/30 hover:border-white/20"
                          }`}>
                            <input type="radio" name={q.id} value={opt.value}
                              checked={isSelected}
                              onChange={() => handleOptionSelect(q.id, opt.value)}
                              className="accent-emerald-500" />
                            <span className="text-sm text-neutral-300">{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {errorMsg && <p className="text-red-400 text-sm mb-4 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg">{errorMsg}</p>}
              <button onClick={() => submitQuiz(currentChapter as Chapter)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-all text-sm">
                Submit Quiz {currentChapter}
              </button>
            </div>
          </motion.div>
        )}

        {/* Certificate */}
        {currentChapter === "cert" && (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="border-2 border-dashed border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-12 text-center relative overflow-hidden mb-8">
              <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-emerald-500/5 pointer-events-none" />
              <div className="relative z-10">
                <p className="font-mono text-emerald-500 tracking-[0.3em] text-sm mb-3">SOC ROOT</p>
                <h2 className="text-3xl font-extrabold mb-8">Certificate of Completion</h2>
                <p className="text-neutral-500 mb-2 text-sm">This certifies that</p>
                <p className="text-5xl font-extrabold text-emerald-400 mb-8 capitalize">{employeeName}</p>
                <p className="text-neutral-400 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
                  has successfully completed all modules of the Cybersecurity Awareness Training program.
                </p>
                <div className="flex justify-between text-xs font-mono text-neutral-600 px-8">
                  <p>Issued: {certData.date}</p>
                  <p>ID: {certData.id}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-xl transition-all text-sm">
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button onClick={() => alert("Certificate link copied!")} className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white px-6 py-3 rounded-xl transition-all text-sm">
                <Share2 className="w-4 h-4" /> Share to LinkedIn
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
