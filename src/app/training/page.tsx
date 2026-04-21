"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, ChevronRight, Share2, Download } from "lucide-react";

export default function TrainingPortal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [currentChapter, setCurrentChapter] = useState<number | "cert">(0);
  const [attempts, setAttempts] = useState({ 1: 0, 2: 0, 3: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [certData, setCertData] = useState({ id: "", date: "" });
  
  // Quiz State
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedName = localStorage.getItem("employeeName");
    const completed = localStorage.getItem("courseCompleted");
    const savedChapter = localStorage.getItem("currentChapter");

    if (savedName) setEmployeeName(savedName);
    
    if (completed === "true") {
      setCurrentChapter("cert");
      setCertData({
        id: "CERT-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString()
      });
    } else if (savedChapter) {
      setCurrentChapter(parseInt(savedChapter));
    }
    
    setIsLoaded(true);
  }, []);

  const handleStart = () => {
    if (!employeeName.trim()) {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("employeeName", employeeName);
    localStorage.setItem("currentChapter", "1");
    setCurrentChapter(1);
  };

  const handleOptionSelect = (qId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const submitQuiz = (chapter: 1 | 2 | 3, totalQs: number) => {
    let passed = true;
    const newAttempts = { ...attempts, [chapter]: attempts[chapter] + 1 };
    setAttempts(newAttempts);
    
    for (let i = 1; i <= totalQs; i++) {
      const qId = `q${chapter}_${i}`;
      if (answers[qId] !== "correct") {
        passed = false;
      }
    }

    if (passed) {
      setErrorMsg("");
      setAnswers({});
      if (chapter < 3) {
        localStorage.setItem("currentChapter", (chapter + 1).toString());
        setCurrentChapter(chapter + 1);
      } else {
        localStorage.setItem("courseCompleted", "true");
        setCurrentChapter("cert");
        setCertData({
          id: "CERT-" + Math.floor(100000 + Math.random() * 900000),
          date: new Date().toLocaleDateString()
        });
      }
    } else {
      if (newAttempts[chapter] >= 2) {
        setErrorMsg("Correct answers have been highlighted in green. Please select them to proceed.");
      } else {
        setErrorMsg("You must answer all correctly. Please review and try again.");
      }
    }
  };

  if (!isLoaded) return <div className="min-h-screen"></div>;

  const chapters = [
    {
      title: "Understanding Cyber Threats",
      content: "What is a cyberattack? Any attempt to expose, alter, disable, destroy, steal or gain unauthorized access to or make unauthorized use of an asset.",
      points: [
        "Phishing: Fraudulent emails appearing to be from reputable sources.",
        "Ransomware: Malware that encrypts your files and demands payment.",
        "Social Engineering: Manipulating people into giving up confidential info."
      ],
      questions: [
        { id: "q1_1", text: "1. What is phishing?", options: [
          { value: "wrong1", label: "A fishing technique" },
          { value: "correct", label: "A fraudulent attempt to steal credentials via fake emails" },
          { value: "wrong2", label: "A type of malware" }
        ]},
        { id: "q1_2", text: "2. If you receive an urgent email asking for your password, you should:", options: [
          { value: "wrong1", label: "Reply with your password" },
          { value: "correct", label: "Never share passwords — report to IT" },
          { value: "wrong2", label: "Click the link and verify" }
        ]},
        { id: "q1_3", text: "3. Ransomware is:", options: [
          { value: "wrong1", label: "An antivirus tool" },
          { value: "correct", label: "Malware that encrypts your files and demands payment" },
        ]}
      ]
    },
    {
      title: "Safe Online Behavior",
      content: "Your daily habits are the strongest defense.",
      points: [
        "Passwords: Use long passphrases. Never reuse them.",
        "Links: Always hover before clicking to check the destination.",
        "Public WiFi: Never access sensitive company accounts over airport or cafe WiFi without a VPN."
      ],
      questions: [
        { id: "q2_1", text: "1. A strong password should:", options: [
          { value: "wrong1", label: "Be your name + birth year" },
          { value: "correct", label: "Be at least 12 characters with mixed types" },
        ]},
        { id: "q2_2", text: "2. Before clicking a link in an email, you should:", options: [
          { value: "wrong1", label: "Click immediately if it looks official" },
          { value: "correct", label: "Hover over it to check the actual URL" },
        ]},
        { id: "q2_3", text: "3. On public WiFi, you should:", options: [
          { value: "wrong1", label: "Access all accounts normally" },
          { value: "correct", label: "Avoid accessing sensitive accounts without VPN" },
        ]}
      ]
    },
    {
      title: "Incident Response",
      content: "Time is critical during a security incident. Rapid reporting minimizes damage.",
      points: [
        "Do: Disconnect your device from the network immediately if you suspect malware.",
        "Do: Report it to the IT/Security team immediately.",
        "Don't: Try to fix it yourself or keep working."
      ],
      questions: [
        { id: "q3_1", text: "1. If you accidentally click a suspicious link, you should:", options: [
          { value: "wrong1", label: "Ignore it" },
          { value: "correct", label: "Immediately disconnect from network and notify IT" },
        ]},
        { id: "q3_2", text: "2. During a security incident, you should NOT:", options: [
          { value: "wrong1", label: "Contact your IT team" },
          { value: "correct", label: "Continue working normally to avoid panic" },
        ]},
        { id: "q3_3", text: "3. The first person to contact during a cyberattack is:", options: [
          { value: "wrong1", label: "The CEO" },
          { value: "correct", label: "Your IT/Security team immediately" },
        ]}
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Security Awareness <span className="text-[#00f0ff]">Training</span></h1>
        <p className="text-gray-400">Powered by SOC Root Security Engine</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        {currentChapter !== 0 && (
          <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6 overflow-x-auto">
            {["Threats", "Behavior", "Incident", "Certificate"].map((step, idx) => {
              const num = idx + 1;
              const isActive = currentChapter === num || (currentChapter === "cert" && step === "Certificate");
              const isPast = (typeof currentChapter === "number" && num < currentChapter) || currentChapter === "cert";
              
              return (
                <div key={idx} className="flex items-center gap-2 px-4 whitespace-nowrap">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${isActive ? 'bg-[#00f0ff] text-black' : isPast ? 'bg-emerald-400 text-black' : 'bg-white/10 text-gray-500'}`}>
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : num}
                  </span>
                  <span className={`text-sm font-medium ${isActive ? 'text-[#00f0ff]' : isPast ? 'text-emerald-400' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Course Intro */}
        {currentChapter === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Course</h2>
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              This 3-part course covers essential cybersecurity practices for employees. You must score 100% on each quiz to proceed. A certificate will be issued upon completion.
            </p>
            <div className="max-w-sm flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Enter your full name for the certificate..."
                className="bg-black/50 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-[#00f0ff] transition-colors"
                value={employeeName}
                onChange={e => setEmployeeName(e.target.value)}
              />
              <button 
                onClick={handleStart}
                className="bg-[#00f0ff] text-black font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Start Training <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Chapters */}
        {typeof currentChapter === "number" && currentChapter > 0 && (
          <motion.div 
            key={currentChapter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Chapter {currentChapter}: {chapters[currentChapter-1].title}</h2>
              <p className="text-gray-300 mb-6">{chapters[currentChapter-1].content}</p>
              <ul className="space-y-3 pl-6 border-l-2 border-[#00f0ff]/30 text-gray-400">
                {chapters[currentChapter-1].points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#00f0ff]/5 border border-[#00f0ff]/20">
              <h3 className="text-xl font-bold mb-6 text-[#00f0ff]">Quiz {currentChapter}</h3>
              <div className="space-y-8 mb-8">
                {chapters[currentChapter-1].questions.map((q) => {
                  return (
                    <div key={q.id}>
                      <p className="mb-4 font-medium">{q.text}</p>
                      <div className="space-y-3">
                        {q.options.map(opt => {
                          let borderColor = "border-white/10";
                          let bgColor = "bg-black/40";
                          
                          // Reveal logic after 2 attempts
                          if (attempts[currentChapter as 1 | 2 | 3] >= 2 && opt.value === "correct") {
                            borderColor = "border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]";
                            bgColor = "bg-emerald-500/10";
                          } else if (answers[q.id] === opt.value) {
                            if (opt.value === "correct") {
                              borderColor = "border-emerald-500";
                            } else {
                              borderColor = "border-red-500";
                            }
                          } else if (answers[q.id] === opt.value) {
                            borderColor = "border-[#00f0ff]";
                          }

                          return (
                            <label key={opt.value} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer hover:border-[#00f0ff]/50 transition-colors ${borderColor} ${bgColor}`}>
                              <input 
                                type="radio" 
                                name={q.id} 
                                value={opt.value}
                                checked={answers[q.id] === opt.value}
                                onChange={() => handleOptionSelect(q.id, opt.value)}
                                className="accent-[#00f0ff]"
                              />
                              <span className="text-sm">{opt.label}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>

              {errorMsg && <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-3 rounded">{errorMsg}</p>}
              
              <button 
                onClick={() => submitQuiz(currentChapter as 1 | 2 | 3, chapters[currentChapter-1].questions.length)}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-lg transition-colors border border-white/5"
              >
                Submit Quiz {currentChapter}
              </button>
            </div>
          </motion.div>
        )}

        {/* Certificate */}
        {currentChapter === "cert" && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="p-12 border-2 border-dashed border-amber-400/50 bg-amber-400/5 rounded-2xl mb-8 relative overflow-hidden">
              <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-amber-400/5 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-mono text-2xl text-amber-400 tracking-[0.2em] mb-4">SOC ROOT</h3>
                <h2 className="text-3xl font-bold mb-8">Certificate of Completion</h2>
                <p className="text-gray-400 mb-2">This certifies that</p>
                <p className="text-4xl font-bold text-[#00f0ff] mb-8 capitalize">{employeeName}</p>
                <p className="text-gray-300 max-w-sm mx-auto mb-10">has successfully completed all modules of the Cybersecurity Awareness Training.</p>
                <div className="flex justify-between items-center text-xs font-mono text-gray-500 px-8">
                  <p>Issue Date: {certData.date}</p>
                  <p>ID: {certData.id}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center flex-wrap gap-4">
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button onClick={() => alert('Certificate link copied to clipboard!')} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors">
                <Share2 className="w-4 h-4" /> Share to LinkedIn
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function CheckCircle2(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  )
}
