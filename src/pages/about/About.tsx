
import PageContainer from '../../components/layout/PageContainer'
import SectionTitle from '../../components/ui/SectionTitle'
import SkillIcon from '../../components/ui/SkillIcon'

function About() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="About Me"
          description="A little about who I am, how I work, and what I enjoy building."
        />

        <section className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-[var(--color-purple)]">
              Who I am
            </h2>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              I’m Alba, a full-stack developer with a strong frontend focus,
              specialising in Angular and TypeScript.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)]">
              I enjoy working on interfaces and turning ideas into something that
              actually feels good to use. I care about clean code, but I also care
              about how things look, how they feel and all those little details that
              make an interface more enjoyable.
            </p>
          </div>

          <div
            className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--color-lavender-soft)] text-4xl"
            aria-hidden="true"
          >
            ✦
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-[var(--color-purple)]">
            What I work with
          </h2>

          <div className="mt-10 grid grid-cols-1 items-start gap-x-12 gap-y-14 lg:grid-cols-2">

            {/* Frontend - Pink */}

            <div className="min-w-0">
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 shadow-[4px_5px_0_rgba(223,166,195,0.18)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-pink)]">
                  Frontend
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="angular" label="Angular" />
                  <SkillIcon name="typescript" label="TypeScript" />
                  <SkillIcon name="js" label="JavaScript" />
                  <SkillIcon name="html" label="HTML" />
                  <SkillIcon name="css" label="CSS" />
                  <SkillIcon name="rxjs" label="RxJS" />
                  <SkillIcon name="react" label="React" />
                  <SkillIcon name="tailwind" label="Tailwind CSS" />
                </div>
              </div>
            </div>

            {/* Backend - Purple */}

            <div className="min-w-0">
              <div className="relative w-full rotate-[1deg] border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 shadow-[-4px_5px_0_rgba(185,165,214,0.18)]">
                <span className="absolute -top-3 right-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-lavender)]">
                  Backend
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="java" label="Java" />
                  <SkillIcon name="spring" label="Spring Boot" />
                  <SkillIcon
                    name="rest"
                    label="REST"
                    iconUrl="/images/skills/rest-api.svg"
                  />
                  <SkillIcon name="hibernate" label="JPA / Hibernate" />
                  <SkillIcon name="postgres" label="PostgreSQL" />
                  <SkillIcon name="mysql" label="MySQL" />
                  <SkillIcon
                    name="oracle"
                    label="Oracle"
                    iconUrl="/images/skills/oracle.svg"
                  />
                </div>
              </div>
            </div>

            {/* DevOps & CI/CD - Purple */}

            <div className="min-w-0">
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-lavender)] bg-[var(--color-surface)] p-6 shadow-[4px_5px_0_rgba(185,165,214,0.18)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-lavender)]">
                  DevOps & CI/CD
                </span>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-3 sm:grid-cols-3 xl:grid-cols-4">
                  <SkillIcon name="git" label="Git" />
                  <SkillIcon name="githubactions" label="GitHub Actions" />
                  <SkillIcon name="jenkins" label="Jenkins" />
                  <SkillIcon name="openshift" label="OpenShift" />
                  <SkillIcon name="docker" label="Docker" />
                  <SkillIcon name="maven" label="Maven" />
                  <SkillIcon
                    name="jfrog"
                    label="JFrog"
                    iconUrl="/images/skills/jfrog.svg"
                  />
                  <SkillIcon name="npm" label="npm" />
                </div>
              </div>
            </div>

            {/* Quality & Testing - Pink */}

            <div className="min-w-0">
              <div className="relative w-full rotate-[1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 shadow-[-4px_5px_0_rgba(223,166,195,0.18)]">
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

            {/* AI-Assisted Development - Pink */}

            <div className="min-w-0">
              <div className="relative w-full rotate-[-1deg] border border-dashed border-[var(--color-pink)] bg-[var(--color-surface)] p-6 shadow-[4px_5px_0_rgba(223,166,195,0.18)]">
                <span className="absolute -top-3 left-6 bg-[var(--color-background)] px-2 text-sm uppercase tracking-[0.2em] text-[var(--color-pink)]">
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
      </div>
    </PageContainer>
  )
}

export default About