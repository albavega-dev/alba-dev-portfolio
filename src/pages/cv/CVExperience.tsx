import type { ComponentProps, ComponentType } from 'react'
import { IconCanary, IconDeviceLaptop, IconSchool } from '@tabler/icons-react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './CVExperience.css'
import TimelineThread from './TimelineThread'

type TimelineElementProps = ComponentProps<typeof VerticalTimelineElement> & { textClassName?: string }
const TimelineElement = VerticalTimelineElement as ComponentType<TimelineElementProps>

const projects = [
  {
    date: 'Mar 2022 — Present', title: 'International Banking Project', role: 'Full-Stack Developer',
    highlights: ['Development and modernization of frontend applications, including reusable UI components, forms, new functionality and version migrations.', 'Backend maintenance, incident resolution and integration work within existing services.', 'Participation in CI/CD, deployment and troubleshooting workflows.'], technologies: 'Angular · AngularJS · TypeScript · JavaScript · Java · Spring Boot · REST APIs · Microfrontends',
  },
  {
    date: 'Sep 2021 — Mar 2022', title: 'Mobile Applications · Energy Sector', role: 'Frontend / Mobile Developer',
    description: "Frontend development for two mobile applications in the energy sector, including customer-facing payment functionality and interfaces adapted to each application's existing visual language.",
    technologies: 'Cordova · jQuery · HTML · CSS',
  },
]

const education = [
  { date: '2018 — 2020', title: 'Higher Technician in Multiplatform Application Development (DAM)', institution: 'IES Valle del Jerte' },
  { date: '2018', title: 'Java Developer for Android', institution: 'CEPI-BASE S.L.' },
]

const earlyBeginnings = {
  date: '2011 — 2018 · On hiatus',
  title: 'Tinta, pluma y papel',
  context: 'Personal literature & writing blog · Blogger',
  description: 'Started in my early teens as a personal space for books and writing and grew into a long-running blog featuring reviews, original writing and collaborations with book and manga publishers.',
  highlights: ['285K+ visits', 'Queestasleyendo finalist', 'Publisher review collaborations'],
}

const jamonesHervas = {
  date: '2015 — Present (Thanks, Mom)',
  title: 'Jamones Hervás',
  context: 'Family business website & product catalogue · Blogger',
  description: "I made this blog for my parents' small business back in 2015 and somehow it's still going strong. My mum is the one keeping it alive these days and she has turned down every single one of my attempts to revamp it or build her something new.",
  editorialNote: 'I guess websites count as childhood crafts if your daughter happens to be a developer.',
}

const cardVariant = (index: number) => index % 2 === 0 ? 'pink' : 'lavender'

function CVExperience() {
  return (
    <section className="cv-experience" aria-labelledby="experience-title">
      <h2 id="experience-title">My Story So Far</h2>
      <div className="cv-experience-timeline-shell">
        <TimelineThread />
        <div className="cv-employer">
          <span className="cv-employer-label">Employer</span>
          <h3>
            <span className="cv-employer-marker" aria-hidden="true">
              <span className="cv-employer-marker__mask" />
              <IconDeviceLaptop className="cv-employer-marker__outline" size={36} stroke={5} />
              <IconDeviceLaptop size={36} stroke={1.6} />
            </span>
            VIEWNEXT
          </h3>
          <p>Sep 2021 — Present</p>
        </div>
        <VerticalTimeline layout="1-column-left" lineColor="transparent" className="cv-experience-timeline">
        {projects.map((project, index) => {
          const variant = cardVariant(index)
          return (
          <TimelineElement key={project.title} date={project.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${variant} cv-timeline-icon--star-${index + 1}`} textClassName={`cv-timeline-content--${variant}${project.title === 'International Banking Project' ? ' cv-timeline-content--banking' : project.title.includes('Energy Sector') ? ' cv-timeline-content--energy' : ''}`}>
            <h3>{project.title}</h3>
            <p className="cv-project-role">{project.role}</p>
            {project.description ? <p className="cv-project-description">{project.description}</p> : null}
            {project.highlights?.length ? <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul> : null}
            <p className="cv-project-technologies">{project.technologies}</p>
          </TimelineElement>
          )
        })}
        <div className="cv-education-transition cv-employer" aria-label="Education">
          <span className="cv-employer-label">Studies</span>
          <h3>
            <span className="cv-education-marker" aria-hidden="true">
              <span className="cv-education-marker__mask" />
              <IconSchool className="cv-education-marker__outline" size={36} stroke={5} />
              <IconSchool size={36} stroke={1.6} />
            </span>
            Education
          </h3>
        </div>
        {education.map((entry, index) => {
          const variant = cardVariant(projects.length + index)
          return (
          <TimelineElement key={entry.title} date={entry.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${variant} cv-timeline-icon--star-${projects.length + index + 1}`} textClassName={`cv-timeline-content--${variant} cv-timeline-content--education`}>
            <h3>{entry.title}</h3>
            <p className="cv-education-institution">{entry.institution}</p>
          </TimelineElement>
          )
        })}
        <div className="cv-early-transition cv-employer" aria-label="Early beginnings">
          <span className="cv-employer-label">Early Beginnings</span>
          <h3>
            <span className="cv-early-marker" aria-hidden="true">
              <span className="cv-early-marker__mask" />
              <IconCanary className="cv-early-marker__outline" size={36} stroke={5} />
              <IconCanary size={36} stroke={1.6} />
            </span>
            Where It All Started
          </h3>
        </div>
        <TimelineElement date={jamonesHervas.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${cardVariant(projects.length + education.length)} cv-timeline-icon--star-jamones`} textClassName={`cv-timeline-content--${cardVariant(projects.length + education.length)} cv-timeline-content--early cv-timeline-content--jamones`}>
          <h3>{jamonesHervas.title}</h3>
          <p className="cv-project-role">{jamonesHervas.context}</p>
          <p className="cv-project-description">{jamonesHervas.description}</p>
          <p className="cv-early-editorial-note">{jamonesHervas.editorialNote}</p>
          <a className="cv-project-link" href="https://jamoneshervas.blogspot.com/" target="_blank" rel="noopener noreferrer">Visit the original blog ↗</a>
        </TimelineElement>
        <TimelineElement date={earlyBeginnings.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${cardVariant(projects.length + education.length + 1)} cv-timeline-icon--star-5`} textClassName={`cv-timeline-content--${cardVariant(projects.length + education.length + 1)} cv-timeline-content--early`}>
          <h3>{earlyBeginnings.title}</h3>
          <p className="cv-project-role">{earlyBeginnings.context}</p>
          <p className="cv-project-description">{earlyBeginnings.description}</p>
          <ul className="cv-early-highlights">{earlyBeginnings.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <a className="cv-project-link" href="https://tintaplumapapel.blogspot.com/" target="_blank" rel="noopener noreferrer">Visit the original blog ↗</a>
        </TimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default CVExperience
