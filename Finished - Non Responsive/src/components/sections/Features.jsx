import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";

export default function Features() {
  return (
    <section className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32">
        <div className="bg-primary-1300 absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[37.5rem]" />

        <h2 className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter">
          All The Tools You Need to <br />
          <span className="text-primary-500 primary-glow">Supercharge </span>
          Your Note Taking
        </h2>
        <div className="flex items-center justify-between">
          <figure>
            <img
              className="max-h-[45rem]"
              src={SmartOrganization}
              alt="Smart Organization graphic"
            />
          </figure>
          <div className="z-1 max-w-lg">
            <p className="mb-8 text-5xl font-semibold tracking-tighter">
              Smart Organization
            </p>

            <p className="text-primary-100 z-1 text-xl/loose font-light">
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligently identifies key topics and
              organizes your content, making it easy to find and retrieve your
              notes when you need them most.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-lg">
            <p className="mb-8 text-5xl font-semibold tracking-tighter">
              Contextual Reminders
            </p>
            <p className="text-primary-100 text-xl/loose font-light">
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely
              alerts to ensure nothing slips through the cracks.
            </p>
          </div>
          <figure className="z-1">
            <img
              className="max-h-[45rem]"
              src={ContextualReminders}
              alt="Contextual Reminders graphic"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
