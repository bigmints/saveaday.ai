import { ArrowUpRight, BriefcaseBusiness, HeartPulse, House, Landmark, Scale, Users } from "lucide-react";
import s from "./BusinessVisuals.module.css";
export default function ProfessionalsSection() {
  return <section id="for-professionals" aria-labelledby="professionals-heading" className={s.professional}>
    <div className={s.professionalInner}>
      <div className={s.professionalText}><span className="eyebrow">Youbot · Saveaday for professionals</span><h2 id="professionals-heading" className="display-heading mt-5">Less replying.<br /><em>More time for clients.</em></h2><p>You’re with a client. Youbot helps the next person with their questions, so you can give this one your attention.</p><a href="https://youbot.live/" className="mt-7 inline-flex min-h-12 items-center gap-5 bg-[#79339b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#60257d]">Meet Youbot <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      <div className={s.orbit} aria-label="Youbot for independent professionals"><div className={s.orbitCenter} aria-hidden="true">y.</div>{[[House,"Real estate agents"],[HeartPulse,"Doctors"],[BriefcaseBusiness,"Consultants"],[Users,"Coaches"],[Scale,"Lawyers"],[Landmark,"Accountants"]].map(([Icon,label]) => { const ProfessionIcon=Icon as typeof House; return <span className={s.professionChip} key={String(label)}><ProfessionIcon size={17} aria-hidden="true" />{String(label)}</span>; })}</div>
    </div>
  </section>;
}
