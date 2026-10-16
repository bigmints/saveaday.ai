import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Image from "next/image";
import { ArrowDown, ArrowRight, Bell, Building2, CalendarDays, Check, CheckCheck, FileText, Globe, HeartPulse, House, Hotel, Languages, Mail, MessageCircle, Mic, PackageOpen, Paperclip, RotateCcw, Sparkles, Store, Truck, Users } from "lucide-react";
import PersonAvatar from "./PersonAvatar";
import s from "./UnifiedUseCases.module.css";

const scenarios = [
  { id: "retail", label: "Retail", icon: Store, title: "A photo. A ticket. Someone on it.", name: "Maya", avatar: "maya" as const, channel: "WhatsApp", channelIcon: MessageCircle, team: "Store team", action: "Review & create ticket", done: "Ticket #1042 · Assigned to Alex", reply: "Thanks, Maya. I’m looking into the leak." },
  { id: "healthcare", label: "Healthcare", icon: HeartPulse, title: "A time that works. A reminder that helps.", name: "Ravi", avatar: "ravi" as const, channel: "Website chat", channelIcon: Globe, team: "Clinic team", action: "Confirm example booking", done: "Dental check-up · Confirmed", reply: "" },
  { id: "events", label: "Events", icon: Users, title: "Their language. Your next conversation.", name: "نور", avatar: "noor" as const, channel: "البريد الإلكتروني", channelIcon: Mail, team: "Events team", action: "Assign enquiry to Alex", done: "Enquiry #208 · Assigned to Alex", reply: "شكرًا نور، وصلتنا التفاصيل وسنتواصل معك قريبًا." },
  { id: "property", label: "Real estate", icon: House, title: "A home catches their eye. You take it from there.", name: "Sam", avatar: "ravi" as const, channel: "Website chat", channelIcon: Globe, team: "Property team", action: "Request a viewing", done: "Viewing enquiry · Ready to follow up", reply: "" },
  { id: "hospitality", label: "Hospitality", icon: Hotel, title: "Say it once. Give your team the details.", name: "Asha", avatar: "maya" as const, channel: "WhatsApp", channelIcon: MessageCircle, team: "Hotel team", action: "Assign repair to Alex", done: "Room 214 · Assigned to Alex", reply: "Thanks, Asha. We’ll take a look at the balcony door." },
  { id: "logistics", label: "Logistics", icon: Truck, title: "The message and the evidence. All together.", name: "Omar", avatar: "ravi" as const, channel: "Email", channelIcon: Mail, team: "Delivery team", action: "Review & assign request", done: "Order 204 · Assigned to Alex", reply: "Thanks, Omar. I have your photos and I’m checking the delivery." },
];
const properties = [
  { name: "Marina apartment", beds: "1 bedroom", detail: "Balcony · Marina views", icon: Building2 },
  { name: "Canal apartment", beds: "2 bedrooms", detail: "Study · Covered parking", icon: House },
  { name: "Waterfront studio", beds: "Studio", detail: "Open plan · Shared gym", icon: Building2 },
];
function Stage({ number, title, ai, children }: { number: string; title: string; ai?: boolean; children: ReactNode }) {
  return <div className={s.stage}><h4><span>{number}</span>{title}</h4><div className={`${s.stageBody} ${ai ? s.aiBody : ""}`}>{children}</div></div>;
}
function Fields({ rows }: { rows: string[][] }) {
  return <dl className={s.fields}>{rows.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
export default function BusinessUseCases() {
  const [active, setActive] = useState(0);
  const [complete, setComplete] = useState<boolean[]>(scenarios.map(() => false));
  const [slot, setSlot] = useState("14:00");
  const [property, setProperty] = useState(0);
  const [transcript, setTranscript] = useState(false);
  const [original, setOriginal] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedProperty = properties[property];
  function setDone(index: number, value: boolean) { setComplete(current => current.map((done,i) => i === index ? value : done)); }
  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % scenarios.length;
    else if (event.key === "ArrowLeft") next = (index + scenarios.length - 1) % scenarios.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = scenarios.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  const messages = [
    <div key="retail"><p>The AC near checkout is leaking. Here’s a photo.</p><div className={s.photo}><Image src="/images/ac-leak-example.jpg" alt="Example photo of a leaking wall-mounted air conditioner" width={280} height={210}/><span><Paperclip size={13} aria-hidden="true"/> ac-leak.jpg</span></div></div>,
    <div key="healthcare"><p>Can I book a dental check-up on Friday afternoon?</p><div className={s.messageHint}><CalendarDays size={18} aria-hidden="true"/> Friday · Afternoon</div></div>,
    <div key="events" lang="ar" dir="rtl"><p>نحتاج تنظيم فعالية لـ٨٠ ضيفًا في نوفمبر. أرفقت التفاصيل.</p><div className={s.file}><FileText size={26} aria-hidden="true"/><span>تفاصيل الفعالية<small>PDF · مرفق</small></span></div></div>,
    <div key="property"><p>I’m looking for a home near the marina. What’s available?</p><div className={s.messageHint}><House size={19} aria-hidden="true"/> A place by the water</div></div>,
    <div key="hospitality"><div className={s.voice}><Mic size={23} aria-hidden="true"/><div className={s.wave} aria-hidden="true">{[12,22,16,30,20,35,25,14,28,19,34,23,14].map((height,i)=><i style={{height}} key={i}/>)}</div><span>0:18</span></div><button type="button" className={s.textButton} aria-expanded={transcript} aria-controls="hotel-transcript" onClick={()=>setTranscript(!transcript)}>{transcript ? "Hide transcript" : "Read voice note"}</button><p id="hotel-transcript" hidden={!transcript} className={s.transcript}>“The balcony door in room 214 won’t close. Can someone take a look?”</p></div>,
    <div key="logistics"><span className={s.subject}>Delivery for order 204</span><p>Our parcel arrived damaged. I’ve attached the photos.</p><div className={s.file}><PackageOpen size={31} aria-hidden="true"/><span>parcel-photo.jpg<small>Photo attached</small></span></div></div>,
  ];
  const summaries = [
    <div key="retail" className={s.summary}><span className={s.cardLabel}>Repair request</span><h5>AC leak at the store</h5><Fields rows={[["Where","Downtown store"],["What happened","Water near checkout"]]}/><div className={s.keptPhoto}><Image src="/images/ac-leak-example.jpg" width={56} height={42} alt=""/><span>Maya’s photo, kept with the request.</span></div></div>,
    <div key="healthcare" className={s.summary}><div className={s.calendarHeader}><CalendarDays size={17} aria-hidden="true"/><strong>October 2026</strong><small>Example</small></div><div className={s.week}>{[["Mon","12"],["Tue","13"],["Wed","14"],["Thu","15"],["Fri","16"]].map(([day,date])=><div key={day} className={day === "Fri" ? s.chosenDay : ""}><span>{day}</span><strong>{date}</strong></div>)}</div><span className={s.cardLabel}>Friday afternoon · Choose a time</span><div className={s.slots} role="group" aria-label="Example available Friday times">{["14:00","14:30","15:00","15:30"].map(time=><button key={time} type="button" disabled={time === "15:00"} aria-label={time === "15:00" ? "15:00, already booked" : time} aria-pressed={slot===time} onClick={()=>{setSlot(time);setDone(1,false);}}><strong>{time}</strong><small>{time === "15:00" ? "Booked" : "Available"}</small></button>)}</div></div>,
    <div key="events" className={s.summary}><span className={s.language}><Languages size={15} aria-hidden="true"/> العربية <ArrowRight size={13} aria-hidden="true"/> English</span><h5>Noor’s event brief</h5><Fields rows={[["Guests","80 people"],["When","November"],["Needs","Event planning"]]}/><div className={s.kept}><Paperclip size={14} aria-hidden="true"/> Original email & brief kept</div></div>,
    <div key="property" className={s.summary}><span className={s.cardLabel}>Your published catalogue</span><div className={s.propertyArt}><selectedProperty.icon size={66} strokeWidth={1} aria-hidden="true"/><span>{selectedProperty.beds}</span></div><div className={s.propertyChoices} role="group" aria-label="Example properties">{properties.map((item,i)=><button type="button" key={item.name} aria-pressed={property===i} onClick={()=>{setProperty(i);setDone(3,false);}}><item.icon size={17} aria-hidden="true"/><span>{item.name}</span>{property===i && <Check size={14} aria-hidden="true"/>}</button>)}</div><p className={s.propertyDetail}>{selectedProperty.detail}</p></div>,
    <div key="hospitality" className={s.summary}><span className={s.language}><Mic size={15} aria-hidden="true"/> Voice note <ArrowRight size={13} aria-hidden="true"/> Written request</span><h5>Balcony door won’t close</h5><Fields rows={[["Hotel","Seaview Hotel"],["Room","214"]]}/><div className={s.kept}><Check size={14} aria-hidden="true"/> Ready for your team to review</div></div>,
    <div key="logistics" className={s.summary}><span className={s.cardLabel}>Delivery request</span><h5>A damaged parcel</h5><Fields rows={[["Order","204"],["From","Omar"]]}/><button type="button" className={s.textButton} aria-expanded={original} aria-controls="delivery-original" onClick={()=>setOriginal(!original)}>{original ? "Hide original details" : "View original details"}</button><div id="delivery-original" hidden={!original} className={s.original}><span><Mail size={14} aria-hidden="true"/> Original email kept</span><span><Paperclip size={14} aria-hidden="true"/> parcel-photo.jpg</span></div></div>,
  ];
  return <section id="use-cases" className={s.section} aria-labelledby="use-cases-heading"><span id="how-it-works" className={s.anchor} aria-hidden="true"/><div className={s.container}>
    <header className={s.heading}><div><p className="eyebrow">A little less work. A little more care.</p><h2 id="use-cases-heading" className="display-heading">See Saveaday<br/><em>in action.</em></h2></div><p>Pick your world. Try a moment.</p></header>
    <div className={s.tabs} role="tablist" aria-label="Industry examples">{scenarios.map((item,index)=><button type="button" key={item.id} ref={node=>{tabs.current[index]=node;}} id={`industry-tab-${item.id}`} role="tab" aria-selected={active===index} aria-controls={`industry-panel-${item.id}`} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>navigateTabs(event,index)}><item.icon size={18} aria-hidden="true"/>{item.label}</button>)}</div>
    {scenarios.map((item,index)=>{
      const done=complete[index];
      const outcome = index===1 ? (done ? `Friday 16 · ${slot} · Confirmed` : `Friday 16 · ${slot} available`) : index===3 ? selectedProperty.name : done ? item.done : "Ready for review";
      const reply = index===1 ? (done ? `You’re booked for Friday at ${slot}, Ravi.` : `Friday at ${slot} is available. Does that work for you?`) : index===3 ? `Let’s arrange a look at the ${selectedProperty.name.toLowerCase()}.` : item.reply;
      return <article key={item.id} id={`industry-panel-${item.id}`} role="tabpanel" aria-labelledby={`industry-tab-${item.id}`} tabIndex={0} hidden={active!==index} className={s.panel}><h3 className={s.storyTitle}>{item.title}</h3><div className={s.journey}>
        <Stage number="01" title="Someone reaches out"><div className={s.channel}><item.channelIcon size={15} aria-hidden="true"/><span lang={index===2?"ar":"en"}>{item.channel}</span><span className={s.online} aria-hidden="true"/></div><div className={s.customer}><PersonAvatar person={item.avatar} size={48}/><strong lang={index===2?"ar":"en"}>{item.name}</strong></div><div className={s.message}>{messages[index]}<CheckCheck size={15} className={s.ticks} aria-hidden="true"/></div></Stage>
        <div className={s.arrow} aria-hidden="true"><ArrowRight size={22}/><ArrowDown size={22}/></div>
        <Stage number="02" title="Saveaday prepares" ai><div className={s.aiLabel}><Sparkles size={16} aria-hidden="true"/>{index===1?"A time that works." : index===3?"Homes to explore.":"The details, together."}</div>{summaries[index]}<div className={s.context}><FileText size={13} aria-hidden="true"/> Your information. Their context.</div></Stage>
        <div className={s.arrow} aria-hidden="true"><ArrowRight size={22}/><ArrowDown size={22}/></div>
        <Stage number="03" title="Your team takes it forward"><div className={s.team}><PersonAvatar person="alex" size={44}/><span><strong>Alex</strong><small>{item.team}</small></span><span className={s.badge}>{done?"On it":"Ready"}</span></div><div className={s.outcome}><span className={s.cardLabel}>{index===1?"Dental check-up":index===3?"Viewing enquiry":index===2?"Event enquiry":index===5?"Delivery request":"Repair ticket"}</span><strong>{outcome}</strong>{index===3 && <small>{done ? "Viewing enquiry received · Ready to follow up" : `${selectedProperty.beds} · ${selectedProperty.detail}`}</small>}</div><button type="button" className={s.action} onClick={()=>setDone(index,!done)}>{done?<><RotateCcw size={15} aria-hidden="true"/>Replay example</>:<>{item.action}<ArrowRight size={16} aria-hidden="true"/></>}</button>{index===1 && <div className={s.reminder}><Bell size={17} aria-hidden="true"/><span><strong>{done?"Team reminder set":"Team reminder preview"}</strong><small>15 minutes before · In-app</small></span></div>}<div className={s.reply}><span><MessageCircle size={13} aria-hidden="true"/>Reply draft</span><p lang={index===2?"ar":"en"} dir={index===2?"rtl":"ltr"}>{reply}</p></div></Stage>
      </div></article>;
    })}
    <p className={s.note}>Illustrative workflows. External ITSM and communication connections depend on your setup.</p>
    <span className={s.live} role="status" aria-live="polite" aria-atomic="true">{scenarios[active].label}: {complete[active]?scenarios[active].done:"Ready to explore"}{active===1?` · Friday at ${slot}`:active===3?` · ${selectedProperty.name}`:""}</span>
  </div></section>;
}
