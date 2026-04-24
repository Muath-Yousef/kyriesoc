"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight, Share2, Download, AlertTriangle, CheckCircle2, XCircle, Clock, BookOpen, ShieldAlert } from "lucide-react";

/* ─────────────────────────────────────────────────
   FULL 6-PHASE SECURITY AWARENESS TRAINING PROGRAM
   Equivalent to ~6 hours of professional training
   ───────────────────────────────────────────────── */

interface QuizQuestion {
  id: string;
  text: string;
  scenario?: string;
  options: { value: string; label: string }[];
}

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
    realWorldExample?: string;
  }[];
  questions: QuizQuestion[];
}

const PHASES: Phase[] = [
  {
    id: 1,
    title: "Understanding the Threat Landscape",
    subtitle: "Know Your Enemy",
    duration: "~45 min",
    icon: "🎯",
    intro: "Before you can defend against cyber attacks, you must understand who the attackers are, what motivates them, and how they operate. This phase transforms your perspective from passive user to security-aware professional.",
    sections: [
      {
        title: "The Anatomy of a Cyberattack",
        content: "A cyberattack is any deliberate attempt to expose, alter, disable, destroy, steal, or gain unauthorized access to an asset. Modern attacks follow a structured kill-chain: reconnaissance → weaponization → delivery → exploitation → installation → command & control → actions on objectives.",
        keyPoints: [
          "Attackers spend an average of 277 days inside a network before detection.",
          "95% of cybersecurity breaches are caused by human error (IBM).",
          "The average cost of a data breach in the Middle East is $8.07M (2023).",
          "Nation-state actors, hacktivists, and organized crime groups each have different motivations and capabilities.",
        ],
        realWorldExample: "In 2023, the MOVEit vulnerability (CVE-2023-34362) was exploited by the CL0P ransomware group, affecting over 2,500 organizations worldwide. The initial vector was a simple SQL injection in a file transfer tool.",
      },
      {
        title: "Phishing — The #1 Attack Vector",
        content: "Phishing accounts for 91% of all successful cyberattacks. It has evolved far beyond poorly written emails — modern phishing uses AI-generated content, cloned websites, and social engineering that can fool even security professionals.",
        keyPoints: [
          "Spear phishing targets specific individuals using personal information from LinkedIn, social media, and data breaches.",
          "Business Email Compromise (BEC) attacks cost organizations $2.7 billion annually.",
          "Vishing (voice phishing) and smishing (SMS phishing) bypass email security filters entirely.",
          "QR code phishing ('quishing') is rising — malicious QR codes in physical spaces or emails.",
        ],
        realWorldExample: "A Fortune 500 company lost $47M when an attacker impersonated the CEO via email, requesting an 'urgent wire transfer' to a supplier. The email came from a lookalike domain (company-inc.com instead of companyinc.com).",
      },
      {
        title: "Ransomware & Destructive Malware",
        content: "Ransomware encrypts your organization's files and demands payment for the decryption key. Modern ransomware groups operate as businesses — with customer support, affiliate programs, and negotiators.",
        keyPoints: [
          "Double extortion: attackers steal data BEFORE encrypting, threatening to publish it publicly.",
          "Ransomware-as-a-Service (RaaS) allows non-technical criminals to launch sophisticated attacks.",
          "Average ransom demand in 2024 exceeded $1.5M. Paying does NOT guarantee data recovery (only 65% get full data back).",
          "Backups must be air-gapped — ransomware specifically targets connected backup systems.",
        ],
      },
      {
        title: "Insider Threats",
        content: "Not all threats come from outside. Disgruntled employees, careless contractors, and compromised accounts from within your organization are among the most dangerous and hardest to detect threats.",
        keyPoints: [
          "Insider threats account for 34% of all data breaches.",
          "Average time to identify an insider threat: 85 days.",
          "Types: malicious insiders, negligent insiders, and compromised insiders (stolen credentials).",
          "Least-privilege access and behavior monitoring are the primary controls.",
        ],
      },
    ],
    questions: [
      {
        id: "p1_1",
        text: "How long do attackers typically remain undetected inside a network?",
        options: [
          { value: "wrong1", label: "24 hours" },
          { value: "wrong2", label: "2 weeks" },
          { value: "correct", label: "277 days on average" },
          { value: "wrong3", label: "1 year" },
        ],
      },
      {
        id: "p1_2",
        text: "What percentage of cybersecurity breaches are caused by human error?",
        options: [
          { value: "wrong1", label: "50%" },
          { value: "correct", label: "95%" },
          { value: "wrong2", label: "30%" },
        ],
      },
      {
        id: "p1_3",
        scenario: "You receive an email from your CEO asking you to urgently purchase $500 in gift cards and send the codes. The email address looks correct at first glance.",
        text: "What is the BEST course of action?",
        options: [
          { value: "wrong1", label: "Purchase the gift cards — it's from the CEO" },
          { value: "wrong2", label: "Reply to the email asking for confirmation" },
          { value: "correct", label: "Verify through a separate communication channel (call the CEO directly) and report to IT security" },
        ],
      },
      {
        id: "p1_4",
        text: "What is 'double extortion' in ransomware attacks?",
        options: [
          { value: "wrong1", label: "Encrypting files twice" },
          { value: "correct", label: "Stealing data AND encrypting it — threatening to publish if you don't pay" },
          { value: "wrong2", label: "Attacking two companies simultaneously" },
        ],
      },
      {
        id: "p1_5",
        text: "Which of these is NOT a type of insider threat?",
        options: [
          { value: "wrong1", label: "A negligent employee who leaves their laptop unlocked" },
          { value: "wrong2", label: "A disgruntled employee stealing data before quitting" },
          { value: "correct", label: "An external hacker who has never had access to your network" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Password Security & Authentication",
    subtitle: "Your First Line of Defense",
    duration: "~50 min",
    icon: "🔐",
    intro: "Weak passwords remain the #1 vulnerability exploited by attackers. This phase teaches you how modern password attacks work and how to build unbreakable authentication habits that protect both your personal and corporate accounts.",
    sections: [
      {
        title: "How Passwords Get Compromised",
        content: "Modern attackers don't 'guess' passwords — they use automated tools that can test billions of combinations per second, exploit leaked databases, and leverage AI to predict likely passwords based on your personal information.",
        keyPoints: [
          "Credential stuffing: attackers use passwords leaked from one service to try logging into others. 65% of people reuse passwords.",
          "Brute-force: A 6-character password can be cracked in under 1 second. A 12-character one takes 3 years.",
          "Dictionary attacks: tools like hashcat and john test every word in every language, plus common substitutions (p@$$w0rd).",
          "Password spraying: trying common passwords (Company2024!, Welcome1) across many accounts to avoid lockout.",
        ],
        realWorldExample: "The 2024 23andMe breach exposed 6.9 million users' genetic data. The method? Simple credential stuffing from previously leaked passwords — no sophisticated hacking required.",
      },
      {
        title: "Building Uncrackable Passwords",
        content: "The era of complex 8-character passwords is over. Length beats complexity. A passphrase like 'correct-horse-battery-staple' is both more memorable AND exponentially harder to crack than 'P@$$w0rd!'.",
        keyPoints: [
          "Minimum 14 characters. Use passphrases: 3-5 random words separated by special characters.",
          "NEVER reuse passwords. Every account gets its own unique passphrase.",
          "Use a password manager (Bitwarden, 1Password, KeePass) — you only need to remember ONE master password.",
          "Check haveibeenpwned.com to see if your email/passwords have been leaked in any known breach.",
        ],
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        content: "A password alone is not enough. MFA adds a second layer that makes account compromise exponentially harder — even if your password is stolen.",
        keyPoints: [
          "Something you know (password) + something you have (phone/key) + something you are (biometric).",
          "Hardware security keys (YubiKey, Titan) are the gold standard — phishing-resistant.",
          "Authenticator apps (Google Authenticator, Authy) are good. SMS codes are the weakest MFA.",
          "Enable MFA on EVERY account that supports it — email, banking, cloud services, social media.",
        ],
        realWorldExample: "Uber was breached in 2022 because an employee accepted an MFA push notification they didn't initiate. This is called 'MFA fatigue' — the attacker spams you with requests until you accidentally approve one.",
      },
    ],
    questions: [
      {
        id: "p2_1",
        text: "What percentage of people reuse passwords across multiple services?",
        options: [
          { value: "wrong1", label: "25%" },
          { value: "correct", label: "65%" },
          { value: "wrong2", label: "10%" },
        ],
      },
      {
        id: "p2_2",
        text: "Which password is STRONGEST?",
        options: [
          { value: "wrong1", label: "P@$$w0rd2024!" },
          { value: "correct", label: "silver-mountain-river-clock-42" },
          { value: "wrong2", label: "Company2024" },
        ],
      },
      {
        id: "p2_3",
        text: "What is the MOST secure form of MFA?",
        options: [
          { value: "wrong1", label: "SMS text message codes" },
          { value: "wrong2", label: "Email verification codes" },
          { value: "correct", label: "Hardware security keys (e.g., YubiKey)" },
        ],
      },
      {
        id: "p2_4",
        scenario: "You receive multiple MFA push notifications on your phone that you did NOT initiate.",
        text: "What should you do?",
        options: [
          { value: "wrong1", label: "Approve one to make them stop" },
          { value: "correct", label: "DENY all requests, change your password immediately, and alert IT security" },
          { value: "wrong2", label: "Ignore them — they'll stop eventually" },
        ],
      },
      {
        id: "p2_5",
        text: "What is 'credential stuffing'?",
        options: [
          { value: "correct", label: "Using passwords leaked from one service to try logging into other services" },
          { value: "wrong1", label: "Creating a large number of fake accounts" },
          { value: "wrong2", label: "Storing credentials in a spreadsheet" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Safe Digital Habits",
    subtitle: "Security Is a Daily Practice",
    duration: "~55 min",
    icon: "🛡️",
    intro: "Security is not a product you install — it's a set of habits you practice every day. This phase trains you on safe browsing, email handling, social media behavior, and physical security practices that prevent the majority of attacks.",
    sections: [
      {
        title: "Email Safety Protocol",
        content: "Email is the primary attack delivery mechanism. Every email you receive should be treated with healthy skepticism — especially if it creates a sense of urgency, fear, or excitement.",
        keyPoints: [
          "ALWAYS verify the sender's full email address — not just the display name. attackers use lookalike domains.",
          "NEVER click links in emails. Instead, navigate manually to the website by typing the URL.",
          "Hover over links to preview the actual destination URL before clicking anything.",
          "Be extremely cautious with attachments — especially .exe, .zip, .docm, .xlsm, and .pdf files from unknown senders.",
          "If an email creates urgency ('Your account will be locked in 24 hours!'), it's almost certainly phishing.",
        ],
      },
      {
        title: "Web Browsing Security",
        content: "Your browser is a gateway to both productivity and danger. Understanding how to browse safely prevents drive-by downloads, credential theft, and privacy violations.",
        keyPoints: [
          "HTTPS is mandatory — never enter credentials on HTTP sites. Look for the padlock icon.",
          "Use an ad-blocker (uBlock Origin) — malvertising injects malware through legitimate ad networks.",
          "Keep your browser updated — browsers are the most frequently exploited software on your computer.",
          "Never download software from unofficial sources. Use official websites and verified app stores only.",
          "Be wary of browser extensions — they can read ALL your browsing data including passwords and banking info.",
        ],
      },
      {
        title: "Public WiFi & Remote Work",
        content: "Working remotely or from public spaces introduces unique security challenges. Public WiFi networks are hunting grounds for attackers who intercept your data in real-time.",
        keyPoints: [
          "NEVER access corporate systems, banking, or email over public WiFi without a VPN.",
          "Attackers create 'evil twin' WiFi networks with names like 'Free Airport WiFi' or 'Starbucks-Guest'.",
          "Use your phone's mobile hotspot instead of public WiFi when possible.",
          "Enable full-disk encryption on your laptop (BitLocker for Windows, FileVault for Mac).",
          "Use privacy screens on your laptop in public places to prevent shoulder surfing.",
        ],
        realWorldExample: "A European diplomat's laptop was compromised while using hotel WiFi at an OSCE conference. The attacker set up a rogue access point mimicking the hotel's network and intercepted all unencrypted traffic.",
      },
      {
        title: "Social Media & OSINT Awareness",
        content: "Everything you post online is intelligence for an attacker. Attackers use Open Source Intelligence (OSINT) to build detailed profiles of targets before launching personalized attacks.",
        keyPoints: [
          "Attackers use LinkedIn to identify your role, report chain, and technology stack at work.",
          "Vacation posts signal that you're away — perfect timing for a physical or social engineering attack.",
          "Work badge photos, office layout pictures, and team photos reveal security infrastructure details.",
          "Security questions ('What city were you born in?') are easily answered using social media data.",
          "Review your privacy settings on ALL platforms. Set profiles to private. Remove unnecessary personal details.",
        ],
      },
      {
        title: "Physical Security",
        content: "Digital security means nothing if someone can physically access your devices, documents, or workspace. Physical security is the foundation everything else is built on.",
        keyPoints: [
          "Lock your screen EVERY TIME you leave your desk — even for 30 seconds (Win+L or Cmd+Ctrl+Q).",
          "Never leave devices unattended in public spaces — coffee shops, airports, conference rooms.",
          "Shred sensitive documents. A dumpster-dived org chart is a goldmine for social engineers.",
          "Tailgating: never hold the door open for someone you don't recognize. Politely ask them to badge in.",
          "USB baiting: NEVER plug in USB drives or cables you find. They can instantly compromise your system.",
        ],
        realWorldExample: "During a penetration test, a security firm dropped 20 USB drives labeled 'Salary Information Q4' in a company parking lot. 15 of them were plugged into work computers within 24 hours — each one contained a tracking payload.",
      },
    ],
    questions: [
      {
        id: "p3_1",
        scenario: "You receive an email that says 'Your Microsoft 365 account will be disabled in 24 hours. Click here to verify your identity.' The email looks legitimate.",
        text: "What is your FIRST action?",
        options: [
          { value: "wrong1", label: "Click the link and log in to prevent account lockout" },
          { value: "correct", label: "Do NOT click the link. Navigate to office.com manually and check your account status. Report the email to IT." },
          { value: "wrong2", label: "Forward the email to colleagues to warn them" },
        ],
      },
      {
        id: "p3_2",
        text: "You find a USB drive labeled 'Project Budget 2026' in the parking lot. What do you do?",
        options: [
          { value: "wrong1", label: "Plug it in to find who it belongs to" },
          { value: "wrong2", label: "Give it to a colleague to check" },
          { value: "correct", label: "Give it directly to the IT Security team — NEVER plug it into any device" },
        ],
      },
      {
        id: "p3_3",
        text: "Which of these is the SAFEST behavior on public WiFi?",
        options: [
          { value: "wrong1", label: "Only checking email, not banking" },
          { value: "wrong2", label: "Using the hotel's 'secure' network" },
          { value: "correct", label: "Using your phone's mobile hotspot or a corporate VPN" },
        ],
      },
      {
        id: "p3_4",
        text: "Why should you NOT post pictures of your work badge on social media?",
        options: [
          { value: "correct", label: "It reveals company name, floor access, badge format, and can be cloned for physical intrusion" },
          { value: "wrong1", label: "It's against social media rules" },
          { value: "wrong2", label: "There's no real risk" },
        ],
      },
      {
        id: "p3_5",
        text: "You're leaving your desk for a 2-minute coffee refill. What must you do?",
        options: [
          { value: "wrong1", label: "Nothing — you'll be right back" },
          { value: "correct", label: "Lock your screen immediately (Win+L / Cmd+Ctrl+Q)" },
          { value: "wrong2", label: "Close your email only" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Data Protection & Compliance",
    subtitle: "Your Legal Obligations",
    duration: "~60 min",
    icon: "📋",
    intro: "Handling data incorrectly doesn't just put the company at risk — it can result in personal legal liability for employees. This phase covers data classification, handling procedures, and the regulatory frameworks (NCA ECC, PDPL, ISO 27001) that govern cybersecurity in the Middle East.",
    sections: [
      {
        title: "Data Classification Standards",
        content: "Not all data is equal. Understanding how to classify and handle different types of data is the foundation of information security. Mishandling classified data is a terminable offense in most organizations.",
        keyPoints: [
          "PUBLIC: Annual reports, marketing materials — can be shared freely.",
          "INTERNAL: Company policies, internal memos — share within the organization only.",
          "CONFIDENTIAL: Customer PII, financial records, contracts — restricted to authorized personnel.",
          "SECRET/TOP-SECRET: Trade secrets, M&A plans, security audit results — need-to-know basis with encryption.",
          "When in doubt, treat data as CONFIDENTIAL until you verify its classification.",
        ],
      },
      {
        title: "Personal Data Protection Law (PDPL)",
        content: "Saudi Arabia's PDPL (effective since September 2023) establishes strict rules for collecting, processing, and storing personal data. Non-compliance carries fines up to SAR 5,000,000.",
        keyPoints: [
          "Personal data can only be collected with explicit consent and for a stated purpose.",
          "Data subjects have the right to access, correct, and delete their personal data.",
          "Cross-border data transfers require authorization from the competent authority.",
          "Data breaches must be reported to the SDAIA (Saudi Data & AI Authority) within 72 hours.",
          "Employees who negligently cause a data breach may face personal disciplinary and legal consequences.",
        ],
      },
      {
        title: "NCA ECC 2.0 Framework",
        content: "The National Cybersecurity Authority's Essential Cybersecurity Controls establish the minimum security requirements for all government and critical infrastructure organizations in Saudi Arabia.",
        keyPoints: [
          "ECC covers 5 domains: Governance, Defense, Resilience, Third-party, and ICS/OT Security.",
          "All employees must complete security awareness training annually (Control 2-3-1).",
          "Incident response plans must be tested quarterly (Control 3-1-4).",
          "Third-party vendors must be assessed for security compliance before onboarding.",
          "Non-compliance can result in regulatory action, fines, and loss of government contracts.",
        ],
      },
      {
        title: "Handling Sensitive Information",
        content: "The way you store, transmit, and dispose of information directly impacts the organization's security posture and legal compliance.",
        keyPoints: [
          "NEVER send sensitive data via unencrypted email. Use encrypted channels or secure file-sharing platforms.",
          "NEVER store passwords, customer data, or API keys in spreadsheets, sticky notes, or shared drives.",
          "Use company-approved cloud storage only (not personal Dropbox, Google Drive, or WeTransfer).",
          "When disposing of hardware, ensure drives are securely wiped — deletion does NOT erase data.",
          "Screenshot/printing restrictions apply to confidential documents — check your company's data handling policy.",
        ],
      },
    ],
    questions: [
      {
        id: "p4_1",
        text: "A colleague asks you to email customer financial records to their personal Gmail so they can 'work from home'. What do you do?",
        options: [
          { value: "wrong1", label: "Send it — they're a trusted colleague" },
          { value: "correct", label: "Refuse. Sensitive data must only be transmitted through company-approved encrypted channels." },
          { value: "wrong2", label: "Password-protect the file and send it" },
        ],
      },
      {
        id: "p4_2",
        text: "Under PDPL, how quickly must a data breach be reported?",
        options: [
          { value: "wrong1", label: "7 days" },
          { value: "correct", label: "72 hours" },
          { value: "wrong2", label: "30 days" },
        ],
      },
      {
        id: "p4_3",
        text: "You find a spreadsheet on a shared drive containing customer names, national IDs, and phone numbers without any access controls. What is this?",
        options: [
          { value: "wrong1", label: "Normal internal documentation" },
          { value: "correct", label: "A data protection violation — CONFIDENTIAL PII must have access controls and encryption" },
          { value: "wrong2", label: "Public information" },
        ],
      },
      {
        id: "p4_4",
        text: "Which NCA ECC control requires annual security awareness training for all employees?",
        options: [
          { value: "wrong1", label: "Control 1-1-1" },
          { value: "correct", label: "Control 2-3-1" },
          { value: "wrong2", label: "Control 5-2-1" },
        ],
      },
      {
        id: "p4_5",
        scenario: "You're assigned to a new project and need access to client financial reports. Your manager says 'just use my login credentials for now.'",
        text: "How should you respond?",
        options: [
          { value: "wrong1", label: "Use the credentials — the manager is in charge" },
          { value: "correct", label: "Decline and request your own access through proper IT provisioning channels" },
          { value: "wrong2", label: "Use them temporarily and change later" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Incident Response & Escalation",
    subtitle: "When Something Goes Wrong",
    duration: "~50 min",
    icon: "🚨",
    intro: "The speed and quality of your response to a security incident can mean the difference between a minor event and a catastrophic breach. This phase trains you on exactly what to do — and what NOT to do — when you suspect a security incident.",
    sections: [
      {
        title: "Recognizing an Incident",
        content: "Many employees fail to report security incidents because they don't recognize them or are afraid of getting in trouble. Every minute of delay gives attackers more time to expand their access.",
        keyPoints: [
          "Unexpected pop-ups, slow performance, or programs launching on their own may indicate malware.",
          "Files that are renamed, encrypted, or missing could be ransomware activity.",
          "Login failures to accounts you haven't changed passwords for indicate possible compromise.",
          "Colleagues reporting the same suspicious email means a company-wide phishing campaign is underway.",
          "NEVER assume 'it's probably nothing.' Report first, investigate later.",
        ],
      },
      {
        title: "The Golden Hour Response",
        content: "The first 60 minutes after discovering an incident are the most critical. Your actions during this period determine the scope of damage and the success of recovery.",
        keyPoints: [
          "STEP 1: DISCONNECT — Unplug your Ethernet cable and disable WiFi. Do NOT shut down the computer (preserves evidence).",
          "STEP 2: REPORT — Call your IT Security team immediately. Don't email — phone call ensures fastest response.",
          "STEP 3: DOCUMENT — Write down exactly what happened: what you clicked, what you saw, timestamps.",
          "STEP 4: ISOLATE — Alert nearby colleagues to disconnect if the threat may spread (e.g., worm/ransomware).",
          "STEP 5: WAIT — Do NOT attempt to 'fix' the problem yourself. Let incident responders handle it.",
        ],
      },
      {
        title: "What NOT to Do",
        content: "Well-intentioned but incorrect responses to security incidents regularly make situations exponentially worse. Knowing what to avoid is as important as knowing what to do.",
        keyPoints: [
          "Do NOT shut down or restart your computer — this destroys forensic evidence in RAM.",
          "Do NOT try to 'clean up' the malware yourself — you may alert the attacker or destroy evidence.",
          "Do NOT notify external parties (press, partners, customers) — only authorized personnel make that call.",
          "Do NOT delete suspicious emails from your inbox — IT needs them for investigation.",
          "Do NOT blame yourself or stay quiet — early reporting saves the company, silence harms it.",
        ],
        realWorldExample: "An employee at a major bank noticed unusual network behavior but didn't report it for 3 days because they 'didn't want to cause unnecessary alarm.' By the time IT was notified, 2.4 million customer records had been exfiltrated.",
      },
      {
        title: "Escalation Matrix",
        content: "Every organization should have a clear escalation path. You should know this by memory — when an incident occurs, there's no time to look it up.",
        keyPoints: [
          "Level 1 (Immediate): Suspicious email, unauthorized login attempt → Report to IT helpdesk",
          "Level 2 (Urgent): Confirmed malware, data exfiltration suspected → IT Security team lead",
          "Level 3 (Critical): Ransomware, active breach, data loss confirmed → CISO + Executive leadership",
          "Level 4 (Catastrophic): Business-critical systems compromised → External IR team + Legal + Regulatory notification",
          "If you can't reach IT Security, go UP the chain — never go silent.",
        ],
      },
    ],
    questions: [
      {
        id: "p5_1",
        scenario: "You accidentally clicked a link in a suspicious email and see a brief loading screen before your browser goes back to normal.",
        text: "What is the correct FIRST action?",
        options: [
          { value: "wrong1", label: "Run antivirus and continue working" },
          { value: "wrong2", label: "Close the browser and delete the email" },
          { value: "correct", label: "Disconnect from the network immediately (unplug Ethernet, disable WiFi) and call IT Security" },
        ],
      },
      {
        id: "p5_2",
        text: "Why should you NOT shut down your computer during an active security incident?",
        options: [
          { value: "wrong1", label: "It might corrupt your files" },
          { value: "correct", label: "It destroys forensic evidence in RAM that incident responders need to analyze" },
          { value: "wrong2", label: "The computer needs to stay on for updates" },
        ],
      },
      {
        id: "p5_3",
        text: "You notice that several of your files have been renamed with a '.encrypted' extension and a ransom note appears. What do you do FIRST?",
        options: [
          { value: "wrong1", label: "Pay the ransom to recover your files" },
          { value: "correct", label: "Disconnect from the network immediately to prevent spreading, then call IT Security" },
          { value: "wrong2", label: "Tell a colleague and try to remove the ransomware" },
        ],
      },
      {
        id: "p5_4",
        text: "An employee delays reporting a suspicious login notification for 3 days. What is the likely impact?",
        options: [
          { value: "correct", label: "The attacker has 3 additional days to move laterally, escalate privileges, and exfiltrate data" },
          { value: "wrong1", label: "Minimal — login alerts are usually false positives" },
          { value: "wrong2", label: "The system auto-resolves it within 24 hours" },
        ],
      },
      {
        id: "p5_5",
        text: "A journalist contacts you about a rumored data breach at your company. What do you do?",
        options: [
          { value: "wrong1", label: "Deny everything" },
          { value: "wrong2", label: "Confirm the breach to maintain transparency" },
          { value: "correct", label: "Politely decline to comment and immediately redirect them to the communications/PR department" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Advanced Scenarios & Security Culture",
    subtitle: "Exceeding the Standard",
    duration: "~60 min",
    icon: "⚡",
    intro: "This final phase challenges you with advanced, real-world scenarios that test whether you've internalized security as a mindset — not just memorized rules. Leaders who complete this phase don't just follow security standards. They exceed them.",
    sections: [
      {
        title: "Security as a Culture, Not a Checklist",
        content: "Organizations with strong security cultures — where every employee actively contributes to defense — suffer 52% fewer breaches. Security isn't IT's job. It's everyone's job.",
        keyPoints: [
          "Champion security in your team — normalize asking 'Is this secure?' in every decision.",
          "Report near-misses, not just incidents. A suspicious email you caught is valuable intelligence.",
          "Participate in phishing simulations seriously — they're training, not tricks.",
          "Suggest improvements — if you see a process that could be more secure, speak up.",
          "Mentor new employees on security expectations from day one.",
        ],
      },
      {
        title: "Social Engineering Defense Mastery",
        content: "Advanced social engineering bypasses technology entirely. It targets human psychology — authority, urgency, trust, and fear. The only defense is awareness and skepticism.",
        keyPoints: [
          "Pretexting: an attacker builds a fabricated scenario ('I'm from IT, we need your password to fix a critical issue').",
          "Authority exploitation: impersonating executives, law enforcement, or regulatory bodies.",
          "Quid pro quo: 'I'll fix your slow computer if you let me remote in.'",
          "Always verify identity through independent channels. 'Let me call you back on the company directory number.'",
          "There is no scenario where IT will EVER ask for your password. Period.",
        ],
      },
      {
        title: "Supply Chain & Third-Party Risks",
        content: "Your organization's security is only as strong as its weakest vendor. 62% of breaches involve third-party access, and attackers increasingly target suppliers to reach their real targets.",
        keyPoints: [
          "The SolarWinds attack (2020) compromised 18,000 organizations through a single software update from a trusted vendor.",
          "Evaluate vendor security before granting access — do they have SOC 2, ISO 27001, or equivalent certifications?",
          "Never share credentials with vendors — use dedicated accounts with minimal permissions.",
          "Monitor third-party access continuously — revoke access when no longer needed.",
          "Your personal devices that connect to work networks are also part of the supply chain risk.",
        ],
      },
      {
        title: "Continuous Improvement Mindset",
        content: "Cybersecurity is a never-ending race. Threats evolve daily. The best security professionals are perpetual learners who stay ahead of the curve.",
        keyPoints: [
          "Stay informed: follow CERT advisories, security news (Krebs on Security, The Register, BleepingComputer).",
          "Complete training refreshers at least quarterly — not just annually.",
          "Practice incident response through tabletop exercises and red team simulations.",
          "Build your personal security posture: password manager, MFA, encrypted backups, VPN.",
          "Remember: the goal is not perfection — it's continuous improvement and rapid response.",
        ],
      },
    ],
    questions: [
      {
        id: "p6_1",
        scenario: "A person in a delivery uniform approaches the secure entrance and says 'Can you hold the door? I have packages for the CEO.' They don't have a badge.",
        text: "What should you do?",
        options: [
          { value: "wrong1", label: "Hold the door — they have packages" },
          { value: "correct", label: "Politely ask them to wait while you notify reception to escort them in. Do NOT hold the door." },
          { value: "wrong2", label: "Let them in but follow them" },
        ],
      },
      {
        id: "p6_2",
        scenario: "You receive a phone call from someone claiming to be from IT support: 'We've detected malware on your computer. I need your password to run a remote cleanup.'",
        text: "What is the correct response?",
        options: [
          { value: "wrong1", label: "Give your password — they're from IT" },
          { value: "correct", label: "Refuse. Hang up and call the IT helpdesk directly using the company directory number to verify" },
          { value: "wrong2", label: "Give a fake password to test if they're legitimate" },
        ],
      },
      {
        id: "p6_3",
        text: "What was the primary lesson from the SolarWinds supply chain attack?",
        options: [
          { value: "wrong1", label: "Don't use software from small companies" },
          { value: "correct", label: "Even trusted vendors can be compromised — continuous monitoring and zero-trust principles are essential" },
          { value: "wrong2", label: "Open-source software is inherently insecure" },
        ],
      },
      {
        id: "p6_4",
        text: "Which behavior BEST represents a strong security culture?",
        options: [
          { value: "wrong1", label: "Following security rules only when managers are watching" },
          { value: "wrong2", label: "Assuming IT handles all security so you don't need to worry" },
          { value: "correct", label: "Proactively reporting near-misses, mentoring colleagues, and questioning insecure processes" },
        ],
      },
      {
        id: "p6_5",
        scenario: "A new vendor requests VPN access to your corporate network to 'test integration.' Your manager approves verbally.",
        text: "What is the correct procedure?",
        options: [
          { value: "wrong1", label: "Set up VPN access immediately since the manager approved" },
          { value: "correct", label: "Request formal approval through IT Security, ensure the vendor has security certifications, and create a limited-access account with monitoring" },
          { value: "wrong2", label: "Share your own VPN credentials temporarily" },
        ],
      },
    ],
  },
];

const PHASE_COUNT = PHASES.length;

export default function TrainingPortal() {
  const [loaded, setLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentPhase, setCurrentPhase] = useState<number | "cert">(0);
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [errorMsg, setErrorMsg] = useState("");
  const [showContent, setShowContent] = useState(true);
  const [certData, setCertData] = useState({ id: "", date: "" });
  const [answers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const auth = localStorage.getItem("soc_auth");
    const name = localStorage.getItem("soc_auth_name");
    const email = localStorage.getItem("soc_auth_email");
    const savedPhase = localStorage.getItem("training_phase");
    const completed = localStorage.getItem("training_completed");

    if (auth === "true") {
      setIsLoggedIn(true);
      setUserName(name ?? "");
      setUserEmail(email ?? "");
    }

    if (completed === "true") {
      setCurrentPhase("cert");
      setCertData({
        id: localStorage.getItem("cert_id") ?? "CERT-" + Math.floor(100000 + Math.random() * 900000),
        date: localStorage.getItem("cert_date") ?? new Date().toLocaleDateString(),
      });
    } else if (savedPhase) {
      setCurrentPhase(parseInt(savedPhase));
    }

    setLoaded(true);
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const saved = localStorage.getItem("soc_user");
    if (!saved) {
      window.location.href = "/portal/login";
      return;
    }
    const user = JSON.parse(saved);
    if (user.email === loginEmail && user.password === loginPassword) {
      localStorage.setItem("soc_auth", "true");
      localStorage.setItem("soc_auth_email", user.email);
      localStorage.setItem("soc_auth_name", user.name);
      setIsLoggedIn(true);
      setUserName(user.name);
      setUserEmail(user.email);
    } else {
      alert("Invalid credentials. Please try again or register first.");
    }
  }

  function handleStart() {
    if (!userName.trim()) {
      const n = prompt("Enter your full name for the certificate:");
      if (!n?.trim()) return;
      setUserName(n);
      localStorage.setItem("soc_auth_name", n);
    }
    localStorage.setItem("training_phase", "1");
    setCurrentPhase(1);
  }

  function handleOptionSelect(qId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function submitQuiz(phaseId: number) {
    const phase = PHASES[phaseId - 1];
    const newAttempts = { ...attempts, [phaseId]: (attempts[phaseId] ?? 0) + 1 };
    setAttempts(newAttempts);
    const passed = phase.questions.every((q) => answers[q.id] === "correct");

    if (passed) {
      setErrorMsg("");
      setAnswers({});
      setShowContent(true);
      if (phaseId < PHASE_COUNT) {
        localStorage.setItem("training_phase", String(phaseId + 1));
        setCurrentPhase(phaseId + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const certId = "CERT-" + Math.floor(100000 + Math.random() * 900000);
        const certDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        localStorage.setItem("training_completed", "true");
        localStorage.setItem("cert_id", certId);
        localStorage.setItem("cert_date", certDate);
        setCertData({ id: certId, date: certDate });
        setCurrentPhase("cert");
      }
    } else {
      if ((newAttempts[phaseId] ?? 0) >= 3) {
        setErrorMsg("Correct answers are now highlighted. Review the material carefully and select them to proceed.");
      } else {
        setErrorMsg(`Incorrect answers detected. Review the material and try again. (Attempt ${newAttempts[phaseId]}/${3})`);
      }
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }

  if (!loaded) return <div className="min-h-screen" />;

  // ── LOGIN GATE ──
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-5 text-2xl">🛡️</div>
            <h1 className="text-3xl font-extrabold tracking-tight">Security Awareness Training</h1>
            <p className="text-neutral-500 mt-2 text-sm">Sign in to access your training modules. Need an account? <a href="/portal/login" className="text-teal-400 hover:underline">Register here →</a></p>
          </div>
          <div className="border border-white/8 bg-white/[0.02] rounded-none p-8 angular-cut bg-noise glass-dark">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Email</label>
                <input type="email" required placeholder="your@email.com" value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Password</label>
                <input type="password" required placeholder="••••••••" value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal-500/60 transition-colors text-white placeholder-neutral-600" />
              </div>
              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-3.5 rounded-none transition-all text-sm angular-cut">
                Sign In & Access Training
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── COURSE ──
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-xs text-teal-400 uppercase tracking-[0.3em] mb-3">SOC Root Academy</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Cybersecurity Awareness <span className="text-teal-400">Training</span>
          </h1>
          <p className="text-neutral-500 text-sm">{PHASE_COUNT} phases · ~6 hours · 100% pass required · Verifiable certificate</p>
          {userName && (
            <p className="text-xs text-neutral-600 mt-2">Enrolled as: <span className="text-white">{userName}</span> · {userEmail}</p>
          )}
        </div>

        {/* Phase Progress */}
        {currentPhase !== 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2">
              {PHASES.map((p, idx) => {
                const isActive = currentPhase === p.id;
                const isDone = (typeof currentPhase === "number" && p.id < currentPhase) || currentPhase === "cert";
                return (
                  <div key={p.id} className="flex items-center gap-1 flex-shrink-0">
                    <div className={`flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full text-[10px] font-mono transition-all ${
                      isActive ? "bg-teal-500 text-black font-bold" :
                      isDone ? "bg-teal-500/20 text-teal-400 border border-teal-500/30" :
                      "bg-white/5 text-neutral-600 border border-white/5"
                    }`}>
                      <span>{isDone && !isActive ? "✓" : p.id}</span>
                      <span className="hidden lg:inline">{p.subtitle}</span>
                    </div>
                    {idx < PHASES.length - 1 && <div className={`w-2 lg:w-6 h-px flex-shrink-0 ${isDone ? "bg-teal-500/40" : "bg-white/5"}`} />}
                  </div>
                );
              })}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-2 lg:w-6 h-px bg-white/5" />
                <div className={`px-3 py-1.5 rounded-full text-[10px] font-mono ${
                  currentPhase === "cert" ? "bg-teal-500 text-black font-bold" : "bg-white/5 text-neutral-600 border border-white/5"
                }`}>
                  🎖
                </div>
              </div>
            </div>
            {typeof currentPhase === "number" && (
              <div className="mt-4 bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${((currentPhase - 1) / PHASE_COUNT) * 100}%` }} />
              </div>
            )}
          </div>
        )}

        {/* ── INTRO ── */}
        {currentPhase === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="border border-white/8 bg-white/[0.02] p-8 rounded-none angular-cut bg-noise glass-dark">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-teal-500" /> Welcome to the Program
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                This is a comprehensive {PHASE_COUNT}-phase security awareness program equivalent to approximately 6 hours of professional training. 
                It covers everything from threat identification to incident response and compliance.
                You must score 100% on every quiz to advance. A verifiable certificate will be issued upon completion.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {PHASES.map((p) => (
                  <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-black/20">
                    <span className="text-lg">{p.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-white">{p.title}</p>
                      <p className="text-[10px] text-neutral-600 flex items-center gap-1"><Clock className="w-3 h-3" /> {p.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 mb-6">
                <AlertTriangle className="w-5 h-5 text-teal-400 shrink-0" />
                <p className="text-sm text-neutral-400">
                  <strong className="text-white">Important:</strong> This training is mandatory for NCA ECC compliance (Control 2-3-1). 
                  Your certificate is verifiable by employers and regulatory bodies.
                </p>
              </div>
              <button onClick={handleStart}
                className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-4 rounded-none transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-2 text-sm uppercase tracking-wider angular-cut">
                Begin Phase 1 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ── PHASE CONTENT ── */}
        {typeof currentPhase === "number" && currentPhase > 0 && (() => {
          const phase = PHASES[currentPhase - 1];
          return (
            <motion.div key={currentPhase} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">

              {/* Phase header */}
              <div className="border border-teal-500/20 bg-teal-500/5 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{phase.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-teal-400 uppercase tracking-widest">Phase {phase.id} of {PHASE_COUNT} · {phase.duration}</p>
                    <h2 className="text-2xl font-extrabold text-white">{phase.title}</h2>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{phase.intro}</p>
              </div>

              {/* Toggle content/quiz */}
              <div className="flex gap-2">
                <button onClick={() => setShowContent(true)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${showContent ? "bg-teal-500 text-black font-bold" : "bg-white/5 text-neutral-500 hover:bg-white/10"}`}>
                  📖 Study Material
                </button>
                <button onClick={() => setShowContent(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${!showContent ? "bg-teal-500 text-black font-bold" : "bg-white/5 text-neutral-500 hover:bg-white/10"}`}>
                  📝 Take Quiz ({phase.questions.length} questions)
                </button>
              </div>

              <AnimatePresence mode="wait">
                {showContent ? (
                  <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                    {phase.sections.map((sec, si) => (
                      <div key={si} className="border border-white/8 bg-white/[0.02] p-6 rounded-none angular-cut bg-noise glass-dark">
                        <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 text-[10px] font-mono">{si + 1}</span>
                          {sec.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{sec.content}</p>
                        <ul className="space-y-2.5 mb-4">
                          {sec.keyPoints.map((kp, ki) => (
                            <li key={ki} className="flex gap-2.5 text-sm text-neutral-400">
                              <span className="text-teal-500 shrink-0 mt-0.5">▸</span>
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                        {sec.realWorldExample && (
                          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                            <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                              <ShieldAlert className="w-3 h-3" /> Real-World Case
                            </p>
                            <p className="text-sm text-neutral-400 leading-relaxed">{sec.realWorldExample}</p>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="text-center pt-4">
                      <button onClick={() => setShowContent(false)}
                        className="bg-teal-500 hover:bg-teal-400 text-black font-bold px-8 py-3.5 rounded-none transition-all text-sm angular-cut">
                        I&apos;ve studied the material — Take the Quiz →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="border border-teal-500/20 bg-teal-500/5 p-6 rounded-2xl">
                      <h3 className="text-lg font-bold text-teal-400 mb-2">Phase {phase.id} Assessment</h3>
                      <p className="text-xs text-neutral-500 mb-6">Answer all {phase.questions.length} questions correctly. You must score 100% to advance.</p>

                      <div className="space-y-8 mb-8">
                        {phase.questions.map((q, qi) => (
                          <div key={q.id} className="border-b border-white/5 pb-7 last:border-0 last:pb-0">
                            {q.scenario && (
                              <div className="p-3 rounded-lg bg-white/5 border border-white/5 mb-3">
                                <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-1">Scenario</p>
                                <p className="text-sm text-neutral-300 italic">{q.scenario}</p>
                              </div>
                            )}
                            <p className="mb-3 font-medium text-sm text-white">{qi + 1}. {q.text}</p>
                            <div className="space-y-2">
                              {q.options.map((opt) => {
                                const attCount = attempts[currentPhase] ?? 0;
                                const isSelected = answers[q.id] === opt.value;
                                const showCorrect = attCount >= 3 && opt.value === "correct";
                                return (
                                  <label key={opt.value} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all text-sm ${
                                    showCorrect ? "border-teal-500 bg-teal-500/10" :
                                    isSelected && opt.value === "correct" ? "border-teal-500 bg-teal-500/5" :
                                    isSelected ? "border-red-500 bg-red-500/5" :
                                    "border-white/8 bg-black/30 hover:border-white/20"
                                  }`}>
                                    <input type="radio" name={q.id} value={opt.value}
                                      checked={isSelected}
                                      onChange={() => handleOptionSelect(q.id, opt.value)}
                                      className="accent-teal-500 shrink-0" />
                                    <span className="text-neutral-300">{opt.label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      {errorMsg && (
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-5">
                          <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-red-400">{errorMsg}</p>
                        </div>
                      )}

                      <button onClick={() => submitQuiz(currentPhase)}
                        className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-4 rounded-none transition-all text-sm uppercase tracking-wider angular-cut">
                        Submit Phase {phase.id} Assessment
                      </button>
                    </div>
                    <div className="text-center mt-4">
                      <button onClick={() => setShowContent(true)} className="text-xs text-neutral-600 hover:text-teal-400 transition-colors">
                        ← Back to study material
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })()}

        {/* ── CERTIFICATE ── */}
        {currentPhase === "cert" && (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
            <div className="border-2 border-dashed border-teal-500/30 bg-teal-500/5 rounded-2xl p-12 text-center relative overflow-hidden">
              <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-teal-500/5 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                </div>
                <p className="font-mono text-teal-400 tracking-[0.3em] text-xs mb-1">SOC ROOT ACADEMY</p>
                <h2 className="text-3xl font-extrabold mb-8">Certificate of Completion</h2>
                <p className="text-neutral-500 mb-1 text-sm">This certifies that</p>
                <p className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-2 capitalize">{userName}</p>
                <p className="text-neutral-600 text-xs mb-8 font-mono">{userEmail}</p>
                <p className="text-neutral-400 max-w-md mx-auto mb-10 text-sm leading-relaxed">
                  has successfully completed all <strong className="text-white">{PHASE_COUNT} phases</strong> of the Cybersecurity Awareness Training program, 
                  demonstrating competency in threat identification, password security, safe digital habits, data protection & compliance, incident response, and advanced security culture.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  <span className="text-[10px] font-mono text-neutral-500 border border-white/8 bg-black/30 px-3 py-1 rounded-md">NCA ECC 2-3-1 Aligned</span>
                  <span className="text-[10px] font-mono text-neutral-500 border border-white/8 bg-black/30 px-3 py-1 rounded-md">ISO 27001 Awareness</span>
                  <span className="text-[10px] font-mono text-neutral-500 border border-white/8 bg-black/30 px-3 py-1 rounded-md">PDPL Compliant</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-neutral-600 px-8">
                  <p>Issued: {certData.date}</p>
                  <p>ID: {certData.id}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => window.print()} className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold px-6 py-3 rounded-none transition-all text-sm angular-cut">
                <Download className="w-4 h-4" /> Download Certificate
              </button>
              <button onClick={() => alert("Certificate verification link copied!")} className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white px-6 py-3 rounded-xl transition-all text-sm">
                <Share2 className="w-4 h-4" /> Share to LinkedIn
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
