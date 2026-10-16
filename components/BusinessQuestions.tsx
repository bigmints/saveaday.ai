const questions = [
  ["How can Saveaday help my business day to day?", "Saveaday brings everyday requests, customer enquiries and appointment details into clearer workflows. Your team spends less time collecting the same information and has more context to act, follow up and give a useful answer."],
  ["Do customers or staff need to learn a complicated system?", "Start with a familiar conversation, a simple enquiry form or a shared booking link. Choose the approach that fits the people using it, and give your team a clear place to review the details."],
  ["How does Saveaday help us respond quickly and keep quality high?", "Keep the original details alongside the work, collect useful information up front and make the next step clear. Your team can spend less time reconstructing a request and more time giving it the right response."],
  ["Can we start with just one workflow?", "Yes. Start with a recurring problem, such as appointment booking, handling new enquiries or following up on requests. A demo helps you choose the right setup and decide what to add as your needs grow."],
] as const;

export default function BusinessQuestions() {
  return <section aria-labelledby="questions-heading" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-[1304px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="eyebrow">A simple place to start</p><h2 id="questions-heading" className="display-heading mt-5">A few things<br />you might be wondering.</h2></div>
      <div>{questions.map(([question, answer]) => <details key={question} className="border-b border-[#e5dce9] py-5"><summary className="cursor-pointer py-2 text-lg font-semibold leading-7 text-[#302735] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52315f]">{question}</summary><p className="pb-2 pt-4 text-sm leading-7 text-[#775286]">{answer}</p></details>)}</div>
    </div>
  </section>;
}
