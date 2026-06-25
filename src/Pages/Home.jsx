import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] bottom-10 right-10 animate-pulse"></div>
        <div className="absolute w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="text-center min-h-screen flex flex-col justify-center">
          <p className="text-blue-400 tracking-[0.5em] text-sm">
            FRONTEND DEVELOPER • REACT SPECIALIST
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold mt-6 leading-tight">
            Hi, I'm <span className="text-blue-500">Elton</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I build modern, responsive web applications using React and Tailwind CSS.
            I focus on clean UI, performance, and real-world usability.
          </p>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            I enjoy turning ideas into real products. Every project I build helps me
            improve my frontend skills and move closer to full-stack development.
          </p>
        </div>

        {/* STATS (REALISTIC) */}
        <div className="py-28 border-t border-white/10 grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
            <h3 className="text-4xl text-blue-500 font-bold">16</h3>
            <p className="text-gray-400 mt-2">Years Old</p>
            <p className="text-gray-600 mt-2 text-sm">Student developer</p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
            <h3 className="text-4xl text-blue-500 font-bold">5+</h3>
            <p className="text-gray-400 mt-2">Completed Projects</p>
            <p className="text-gray-600 mt-2 text-sm">Small & medium React apps</p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
            <h3 className="text-4xl text-blue-500 font-bold">1+ yr</h3>
            <p className="text-gray-400 mt-2">Frontend Experience</p>
            <p className="text-gray-600 mt-2 text-sm">Learning & building daily</p>
          </div>

        </div>

        {/* ABOUT */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">About Me</h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-3xl">
            I am a frontend developer from Kosovo focused on building clean and modern UI systems.
            I started coding because I was curious how websites actually work.
          </p>

          <p className="text-gray-500 mt-4 leading-8 max-w-3xl">
            Over time I moved from basic HTML pages to full React applications with reusable components,
            proper structure, and responsive design.
          </p>

          <p className="text-gray-600 mt-4 leading-8 max-w-3xl">
            Now I focus on improving architecture, UI/UX, and building real-world applications that feel professional.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">My Journey</h2>

          <div className="mt-10 space-y-6 max-w-3xl">

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Curiosity Stage</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Learned how websites are structured using HTML & CSS.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">JavaScript Learning</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Learned logic, functions, DOM manipulation and interactivity.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">React Phase</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Started building full apps with components and state management.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Now</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Building structured projects and improving UI architecture.
              </p>
            </div>

          </div>
        </div>

        {/* WHAT I DO */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Frontend Development</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Building responsive React applications with modern UI design.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">UI/UX Design</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Creating clean interfaces focused on usability and simplicity.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Learning Backend</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Exploring APIs and backend concepts for full-stack growth.
              </p>
            </div>

          </div>
        </div>

        {/* SKILLS */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500 mb-10">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-gray-400 mb-4 text-sm tracking-widest">
                CORE SKILLS
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Responsive UI"].map((s) => (
                  <div
                    key={s}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg text-center hover:border-blue-500 transition"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gray-400 mb-4 text-sm tracking-widest">
                TOOLS
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {["Git", "GitHub", "VS Code", "Vite", "Figma"].map((t) => (
                  <div
                    key={t}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg text-center hover:border-blue-500 transition"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
{/* WORKFLOW */}
<div className="py-28 border-t border-white/10">
  <h2 className="text-3xl font-bold text-blue-500">
    My Workflow
  </h2>

  <p className="text-gray-400 mt-6 max-w-3xl leading-8">
    Every project I build follows a simple and structured process to keep things clean and scalable.
  </p>

  <div className="mt-10 grid md:grid-cols-3 gap-6">

    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-white font-semibold">1. Plan</h3>
      <p className="text-gray-400 mt-2 text-sm">
        I start by understanding the idea and sketching basic UI structure.
      </p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-white font-semibold">2. Build</h3>
      <p className="text-gray-400 mt-2 text-sm">
        I develop the UI using React components and Tailwind CSS.
      </p>
    </div>

    <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-white font-semibold">3. Improve</h3>
      <p className="text-gray-400 mt-2 text-sm">
        I refine UI, fix bugs, and optimize performance and responsiveness.
      </p>
    </div>

  </div>
</div>
        {/* FEATURED PROJECTS */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">Featured Projects</h2>

          <p className="text-gray-400 mt-4 max-w-3xl">
            These are projects I am currently working on and improving step by step.
          </p>

          <div className="mt-10 space-y-6 max-w-3xl">

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Relocate Web</h3>
              <p className="text-gray-400 mt-2 text-sm">
                A moving service app focused on helping users organize relocation tasks.
                Currently improving UI and adding features.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Real Estate App</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Property listing system with filters and search functionality.
                Still in active development.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Student System</h3>
              <p className="text-gray-400 mt-2 text-sm">
                CRUD app using React + localStorage.
                Improving structure and UX.
              </p>
            </div>

          </div>
        </div>
{/* WHAT I LEARNED */}
<div className="py-28 border-t border-white/10">
  <h2 className="text-3xl font-bold text-blue-500">
    What I Learned Recently
  </h2>

  <p className="text-gray-400 mt-6 max-w-3xl leading-8">
    I am constantly improving my skills by building real projects and learning from mistakes.
  </p>

  <div className="mt-10 space-y-3 text-gray-400 max-w-3xl">
    <p>• Improved React component structure and reusability</p>
    <p>• Learned better state management patterns</p>
    <p>• Practiced API fetching and async logic</p>
    <p>• Improved responsive design skills with Tailwind CSS</p>
    <p>• Started thinking more like a real frontend developer</p>
  </div>
</div>
        {/* MINDSET */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">Mindset</h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8">
            Consistency beats talent. I focus on building real projects instead of only learning theory.
          </p>

          <p className="text-gray-500 mt-4 max-w-3xl leading-8">
            Small daily progress leads to big results over time.
          </p>
        </div>
{/* AVAILABLE FOR WORK */}
<div className="py-28 border-t border-white/10 text-center">
  <h2 className="text-3xl font-bold text-blue-500">
    Availability
  </h2>

  <p className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
    I am currently open for freelance work, small projects, and collaborations.
    If you have an idea, startup, or project and need a frontend developer, I would be happy to help.
  </p>

  <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-8">
    I mainly focus on React and modern UI development, and I enjoy working with people
    who are building real and useful products.
  </p>

  <div className="mt-10 flex flex-col md:flex-row justify-center gap-3 text-sm text-gray-400">
    <span className="px-5 py-2 border border-white/10 rounded-full bg-white/5">
      ✔ Freelance Available
    </span>

    <span className="px-5 py-2 border border-white/10 rounded-full bg-white/5">
      ✔ Open to Collaboration
    </span>

    <span className="px-5 py-2 border border-white/10 rounded-full bg-white/5">
      ✔ Remote Friendly
    </span>
  </div>
</div>
        {/* CTA */}
        <div className="py-28 border-t border-white/10 text-center">
          <h2 className="text-3xl font-bold text-blue-500">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mt-4">
            If you want to build something or collaborate, feel free to contact me.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

      </div>
     
    </section>
  );
}

export default Home;