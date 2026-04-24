import { CheckCircle2, ChevronRight, ShieldAlert, BookOpen, Clock } from "lucide-react";
import { trainingData } from "@/data/training";
import Link from "next/link";

export const metadata = {
  title: "Security Awareness Training | SOC Root",
  description: "Equip your workforce with the knowledge to defend against modern cyber threats. Comprehensive NCA ECC aligned curriculum for Middle East enterprises.",
};

export default function TrainingLanding() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <ShieldAlert className="w-4 h-4" />
            {trainingData.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {trainingData.title}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            {trainingData.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portal/training" className="inline-flex flex-row items-center bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-none text-sm font-bold transition-all shadow-[0_0_30px_rgba(20,184,166,0.3)] angular-cut">
              Start Training Portal
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 text-sm font-bold border border-white/10 hover:bg-white/5 rounded-xl transition-all">
              Enterprise Licensing
            </Link>
          </div>
        </div>

        {/* Chapters Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Course Curriculum</h2>
            <p className="text-neutral-500">Comprehensive instruction broken down into actionable modules.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trainingData.chapters.map((chapter) => (
              <div key={chapter.number} className="border border-white/10 bg-white/[0.02] p-8 rounded-none flex flex-col h-full hover:border-white/20 transition-all group angular-cut bg-noise glass-dark">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-teal-500/10 group-hover:border-teal-500/30 group-hover:text-teal-400 transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex items-center text-xs font-mono text-neutral-500 gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {chapter.duration}
                  </div>
                </div>
                <div className="text-sm font-mono text-teal-500 mb-2">Chapter {chapter.number}</div>
                <h3 className="text-xl font-bold mb-6 flex-1">{chapter.title}</h3>
                <ul className="space-y-3 border-t border-white/5 pt-6 mt-auto">
                  {chapter.topics.map((topic, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-400">
                      <ChevronRight className="w-4 h-4 text-neutral-600 mr-2 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto border border-teal-500/20 bg-teal-500/5 rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">Why Our Training Works</h2>
              <ul className="space-y-5">
                {trainingData.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mr-4 mt-0.5 shrink-0" />
                    <span className="text-neutral-300 leading-relaxed font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] pointer-events-none" />
              <div className="text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 bg-white/5 rounded-full mb-6">
                  <ShieldAlert className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ready to deploy?</h3>
                <p className="text-neutral-500 text-sm mb-6">
                  Get your entire team trained and certified to comply with cybersecurity regulations today.
                </p>
                <Link href="/contact" className="block w-full text-center bg-white text-black py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
                  Contact Sales for Access
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
