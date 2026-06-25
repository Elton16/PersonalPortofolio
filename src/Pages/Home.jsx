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
            I love turning ideas into real digital products that people can actually use.
            Every project improves my skills and pushes me closer to full-stack development.
          </p>
        </div>

        {/* STATS */}
    <div className="py-28 border-t border-white/10 grid md:grid-cols-3 gap-6 text-center">

  <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
    <h3 className="text-4xl text-blue-500 font-bold">16</h3>
    <p className="text-gray-400 mt-2">Years Old</p>
    <p className="text-gray-600 mt-2 text-sm">Student developer</p>
  </div>

  <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
    <h3 className="text-4xl text-blue-500 font-bold">Small & Medium</h3>
    <p className="text-gray-400 mt-2">Frontend Projects</p>
    <p className="text-gray-600 mt-2 text-sm">React & UI practice builds</p>
  </div>

  <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition">
    <h3 className="text-4xl text-blue-500 font-bold">1+ yr</h3>
    <p className="text-gray-400 mt-2">Learning Experience</p>
    <p className="text-gray-600 mt-2 text-sm">Frontend development focus</p>
  </div>

</div>

        {/* ABOUT */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">About Me</h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-3xl">
            I am a frontend developer from Kosovo focused on building modern UI systems.
            I started coding because I was curious how real websites work.
          </p>

          <p className="text-gray-500 mt-4 leading-8 max-w-3xl">
            Over time I moved from simple layouts to full React applications with real logic,
            reusable components, and structured architecture.
          </p>

          <p className="text-gray-600 mt-4 leading-8 max-w-3xl">
            Now I focus on building scalable frontend systems and improving UI/UX design skills
            while learning backend development.
          </p>
        </div>

        {/* JOURNEY */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">My Journey</h2>

          <div className="mt-10 space-y-6 max-w-3xl">

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Started with HTML & CSS</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Learned structure, layout, and basic web design principles.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">JavaScript Phase</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Learned logic, DOM manipulation, and interactive web features.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">React Development</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Built real applications using components and state management.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Current Level</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Building structured apps, improving performance and UI systems.
              </p>
            </div>

          </div>
        </div>

        {/* SERVICES */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Frontend Development</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Building modern responsive websites using React.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">UI Design</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Designing clean and minimal user interfaces.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Learning Backend</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Working toward full-stack development skills.
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

        {/* FEATURED PROJECTS (WORKING ON THEM) */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">Featured Projects</h2>

          <p className="text-gray-400 mt-4 max-w-3xl">
            These are projects I am currently working on and improving continuously.
          </p>

          <div className="mt-10 space-y-6 max-w-3xl">

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Relocate Web</h3>
              <p className="text-gray-400 mt-2 text-sm">
                A moving service platform designed to help people organize relocation tasks.
                Currently improving UI and adding more features.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Real Estate App</h3>
              <p className="text-gray-400 mt-2 text-sm">
                Property listing system with filters and search functionality.
                Still in development stage.
              </p>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-white font-semibold">Student System</h3>
              <p className="text-gray-400 mt-2 text-sm">
                CRUD system built with React and localStorage.
                Working on improving structure and UX.
              </p>
            </div>

          </div>
        </div>

        {/* MINDSET */}
        <div className="py-28 border-t border-white/10">
          <h2 className="text-3xl font-bold text-blue-500">Mindset</h2>

          <p className="text-gray-400 mt-6 max-w-3xl leading-8">
            I believe consistency beats talent. I improve every day by building real projects instead of just learning theory.
          </p>

          <p className="text-gray-500 mt-4 max-w-3xl leading-8">
            Small progress every day leads to big results over time.
          </p>
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