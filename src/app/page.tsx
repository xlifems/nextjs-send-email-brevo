import { handleForm } from "./action";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={handleForm} method="POST" className="flex flex-col gap-4">

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            required
            className="bg-slate-400 block p-2 rounded-md w-full placeholder:text-slate-500"
          />
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="bg-slate-400 block p-2 rounded-md w-full placeholder:text-slate-500"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="bg-slate-400 block p-2 rounded-md w-full placeholder:text-slate-500"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="bg-slate-400 block p-2 rounded-md w-full placeholder:text-slate-500"
          ></textarea>
        </div>
        <button className="bg-teal-600 hover:bg-teal-800 text-white p-2 rounded-md">
          Send Email
        </button>
      </form>
    </div>
  );
}
