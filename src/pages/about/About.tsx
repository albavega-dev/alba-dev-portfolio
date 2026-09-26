
import PageContainer from '../../components/layout/PageContainer'
import SkillIcon from '../../components/ui/SkillIcon'
import BeyondTheCode from '../../components/about/BeyondTheCode'
import { useMasonryGrid } from '../../components/about/useMasonryGrid'
import '../../components/about/ToolkitLayout.css'

function About() {
  const { isMeasured, placements, setItemRef } = useMasonryGrid(6)

  return (
    <PageContainer>
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            WHO I AM
        ========================================= */}

        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="about-profile-card max-w-3xl">
            <h2 className="text-3xl font-semibold text-[var(--color-purple)]">
              Who I am
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              I'm Alba, a full-stack developer with a strong frontend focus. I've spent most of my professional career working with Angular and TypeScript, alongside Java and Spring Boot on the backend.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              I enjoy working on interfaces and turning ideas into something that actually feels good to use. I care about clean code, but I also care about how things look, how they feel and all those little details that make an interface more enjoyable.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              Most of my professional experience comes from large corporate projects and Agile teams, but I’ve also done my fair share of learning on my own, experimenting with new technologies and figuring things out as I go.
            </p>
          </div>

          {/* Animated Polaroid */}

          <div className="flex justify-center py-6 md:justify-end">
            <div className="polaroid-photo relative w-64 rotate-[3deg] bg-white p-3 pb-10 shadow-[4px_6px_18px_rgba(185,165,214,0.25)] sm:w-72 lg:w-80">

              <img
                src="/images/profile.jpg"
                alt="Alba, full-stack developer"
                className="block h-auto w-full"
              />

              {/* Washi tape */}

              <div
                aria-hidden="true"
                className="polaroid-tape pointer-events-none absolute -top-4 left-1/2 z-10 h-8 w-28"
              >
                <div
                  className="h-full w-full bg-[var(--color-pink)] opacity-75 drop-shadow-[1px_2px_2px_rgba(120,80,100,0.15)]"
                  style={{
                    clipPath:
                      'polygon(0% 0%, 97% 0%, 100% 12%, 97% 23%, 100% 35%, 97% 48%, 100% 60%, 97% 73%, 100% 85%, 97% 100%, 0% 100%, 3% 88%, 0% 75%, 3% 62%, 0% 50%, 3% 38%, 0% 25%, 3% 12%)',
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 2px, transparent 2px, transparent 5px)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            MY DEVELOPER TOOLKIT
        ========================================= */}

        <section className="mt-20">
          <h2 className="text-[1.75rem] font-semibold text-[var(--color-purple)]">
            My Developer Toolkit
          </h2>
          <div className={`mt-10 grid grid-cols-1 items-start gap-x-12 gap-y-14 lg:grid-cols-2 ${isMeasured ? 'toolkit-masonry-ready' : ''}`}>

            {/* Frontend - Pink */}

            <div ref={setItemRef(0)} className="toolkit-card min-w-0" style={placements[0]}>
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 pb-8 shadow-[4px_5px_0_rgba(223,166,195,0.18)] [--skill-circle-color:var(--color-lavender)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-pink)]">
                  Frontend
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="angular" label="Angular" />
                  <SkillIcon
                    name="angularjs"
                    label="AngularJS"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                  />
                  <SkillIcon name="typescript" label="TypeScript" />
                  <SkillIcon name="rxjs" label="RxJS" />
                  <SkillIcon
                    name="primeng"
                    label="PrimeNG"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/primeng/primeng-original.svg"
                  />
                  <SkillIcon name="react" label="React" />
                  <SkillIcon name="js" label="JavaScript" />
                  <SkillIcon name="jquery" label="jQuery" />
                  <SkillIcon name="html" label="HTML5" />
                  <SkillIcon name="css" label="CSS" />
                  <SkillIcon name="scss" label="SCSS" />
                  <SkillIcon name="bootstrap" label="Bootstrap" />
                  <SkillIcon name="tailwind" label="Tailwind CSS" />
                  <SkillIcon
                    name="cordova"
                    label="Cordova"
                    iconUrl="https://cdn.simpleicons.org/apachecordova/695477"
                  />
                </div>
              </div>
            </div>

            {/* Backend - Purple */}

            <div ref={setItemRef(1)} className="toolkit-card min-w-0" style={placements[1]}>
              <div className="relative w-full rotate-[1deg] border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 pb-8 shadow-[-4px_5px_0_rgba(185,165,214,0.18)] [--skill-circle-color:var(--color-pink)]">
                <span className="absolute -top-3 right-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-lavender)]">
                  Backend & Data
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="java" label="Java" />
                  <SkillIcon
                    name="csharp"
                    label="C#"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  />
                  <SkillIcon name="python" label="Python" />
                  <SkillIcon name="spring" label="Spring Boot" />
                  <SkillIcon
                    name="rest"
                    label="REST"
                    iconUrl="/images/skills/rest-api.svg"
                  />
                  <SkillIcon name="hibernate" label="JPA / Hibernate" />
                  <SkillIcon name="postgres" label="PostgreSQL" />
                  <SkillIcon name="mysql" label="MySQL" />
                  <SkillIcon name="sqlite" label="SQLite" />
                  <SkillIcon
                    name="oracle"
                    label="Oracle"
                    iconUrl="/images/skills/oracle.svg"
                  />
                  <SkillIcon
                    name="sql"
                    label="SQL"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  />
                  <SkillIcon
                    name="supabase"
                    label="Supabase"
                    iconUrl="https://cdn.simpleicons.org/supabase"
                  />
                </div>
              </div>
            </div>

            {/* DevOps & CI/CD - Purple */}

            <div ref={setItemRef(2)} className="toolkit-card min-w-0" style={placements[2]}>
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 pb-8 shadow-[4px_5px_0_rgba(185,165,214,0.18)] [--skill-circle-color:var(--color-pink)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-lavender)]">
                  DevOps & CI/CD
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="githubactions" label="GitHub Actions" />
                  <SkillIcon name="jenkins" label="Jenkins" />
                  <SkillIcon name="openshift" label="OpenShift" />
                  <SkillIcon name="docker" label="Docker" />
                  <SkillIcon name="nginx" label="Nginx" />
                  <SkillIcon name="vercel" label="Vercel" />
                  <SkillIcon
                    name="tomcat"
                    label="Apache Tomcat"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg"
                  />
                </div>
              </div>
            </div>

            {/* Tools & Ecosystem - Pink */}

            <div ref={setItemRef(3)} className="toolkit-card min-w-0" style={placements[3]}>
              <div className="relative w-full rotate-[1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 pb-8 shadow-[-4px_5px_0_rgba(223,166,195,0.18)] [--skill-circle-color:var(--color-lavender)]">
                <span className="absolute -top-3 right-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-pink)]">
                  Tools & Ecosystem
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="git" label="Git" />
                  <SkillIcon name="nodejs" label="Node.js" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <SkillIcon name="npm" label="npm" />
                  <SkillIcon name="vite" label="Vite" />
                  <SkillIcon name="androidstudio" label="Android Studio" />
                  <SkillIcon name="unity" label="Unity" />
                  <SkillIcon name="figma" label="Figma" />
                  <SkillIcon name="maven" label="Maven" iconUrl="https://cdn.simpleicons.org/apachemaven" />
                  <SkillIcon name="jfrog" label="JFrog" iconUrl="/images/skills/jfrog.svg" />
                  <SkillIcon name="postman" label="Postman" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" />
                  <SkillIcon name="bruno" label="Bruno" iconUrl="https://cdn.simpleicons.org/bruno" />
                  <SkillIcon
                    name="jira"
                    label="Jira"
                    iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                  />
                </div>
              </div>
            </div>

            {/* Quality & Testing - Pink */}

            <div ref={setItemRef(4)} className="toolkit-card min-w-0" style={placements[4]}>
              <div className="relative w-full rotate-[1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 pb-8 shadow-[-4px_5px_0_rgba(223,166,195,0.18)] [--skill-circle-color:var(--color-lavender)]">
                <span className="absolute -top-3 right-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-pink)]">
                  Quality & Testing
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon
                    name="sonarqube"
                    label="SonarQube"
                    iconUrl="/images/skills/sonarqube.svg"
                  />
                  <SkillIcon
                    name="fortify"
                    label="Fortify"
                    iconUrl="/images/skills/fortify.png"
                  />
                  <SkillIcon
                    name="junit"
                    label="JUnit"
                    iconUrl="/images/skills/junit.svg"
                  />
                  <SkillIcon
                    name="mockito"
                    label="Mockito"
                    iconUrl="/images/skills/mockito-glass.png"
                  />
                  <SkillIcon
                    name="jasmine"
                    label="Jasmine"
                    iconUrl="/images/skills/jasmine.svg"
                  />
                  <SkillIcon
                    name="karma"
                    label="Karma"
                    iconUrl="/images/skills/karma.svg"
                  />
                </div>
              </div>
            </div>

            {/* AI-Assisted Development - Purple */}

            <div ref={setItemRef(5)} className="toolkit-card min-w-0" style={placements[5]}>
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 pb-8 shadow-[4px_5px_0_rgba(185,165,214,0.18)] [--skill-circle-color:var(--color-pink)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-lavender)]">
                  AI-Assisted Development
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon
                    name="githubcopilot"
                    label="GitHub Copilot"
                    iconUrl="/images/skills/github-copilot.svg"
                  />
                  <SkillIcon
                    name="claude"
                    label="Claude Code"
                    iconUrl="/images/skills/claude.svg"
                  />
                  <SkillIcon
                    name="windsurf"
                    label="Windsurf"
                    iconUrl="/images/skills/windsurf.svg"
                  />
                  <SkillIcon
                    name="devin"
                    label="Devin"
                    iconUrl="/images/skills/devin.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
                BEYOND THE CODE
        ========================================= */}

        <BeyondTheCode />
      </div>
    </PageContainer>
  )
}

export default About
