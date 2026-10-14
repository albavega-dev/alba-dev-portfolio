import type { ComponentProps, ComponentType } from 'react'
import { IconCanary, IconDeviceLaptop, IconSchool } from '@tabler/icons-react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './CVExperience.css'
import TimelineThread from './TimelineThread'
import { useLanguage } from '../../i18n/useLanguage'

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

const cardVariant = (index: number) => index % 2 === 0 ? 'pink' : 'lavender'

function CVExperience() {
  const { translations } = useLanguage()
  const cv = translations.cv
  return (
    <section className="cv-experience" aria-labelledby="experience-title">
      <h2 id="experience-title">{cv.timeline.title}</h2>
      <div className="cv-experience-timeline-shell">
        <TimelineThread />
        <div className="cv-employer">
          <span className="cv-employer-label">{cv.timeline.employerLabel}</span>
          <h3>
            <span className="cv-employer-marker" aria-hidden="true">
              <span className="cv-employer-marker__mask" />
              <IconDeviceLaptop className="cv-employer-marker__outline" size={36} stroke={5} />
              <IconDeviceLaptop size={36} stroke={1.6} />
            </span>
            VIEWNEXT
          </h3>
          <p>{cv.timeline.employerDate}</p>
        </div>
        <VerticalTimeline layout="1-column-left" lineColor="transparent" className="cv-experience-timeline">
        {projects.map((project, index) => {
          const variant = cardVariant(index)
          const localized = index === 0 ? cv.timeline.banking : cv.timeline.energy
          return (
          <TimelineElement key={project.title} date={localized.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${variant} cv-timeline-icon--star-${index + 1}`} textClassName={`cv-timeline-content--${variant}${project.title === 'International Banking Project' ? ' cv-timeline-content--banking' : project.title.includes('Energy Sector') ? ' cv-timeline-content--energy' : ''}`}>
            <h3>{localized.title}</h3>
            <p className="cv-project-role">{localized.role}</p>
            {localized.description ? <p className="cv-project-description">{localized.description}</p> : null}
            {localized.highlights?.length ? <ul>{localized.highlights.map((highlight: string) => <li key={highlight}>{highlight}</li>)}</ul> : null}
            <p className="cv-project-technologies">{project.technologies}</p>
          </TimelineElement>
          )
        })}
        <div className="cv-education-transition cv-employer" aria-label={cv.timeline.educationTitle}>
          <span className="cv-employer-label">{cv.timeline.studiesLabel}</span>
          <h3>
            <span className="cv-education-marker" aria-hidden="true">
              <span className="cv-education-marker__mask" />
              <IconSchool className="cv-education-marker__outline" size={36} stroke={5} />
              <IconSchool size={36} stroke={1.6} />
            </span>
            {cv.timeline.educationTitle}
          </h3>
        </div>
        {education.map((entry, index) => {
          const variant = cardVariant(projects.length + index)
          const localized = index === 0 ? cv.timeline.education.dam : cv.timeline.education.android
          return (
          <TimelineElement key={entry.title} date={localized.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${variant} cv-timeline-icon--star-${projects.length + index + 1}`} textClassName={`cv-timeline-content--${variant} cv-timeline-content--education`}>
            <h3>{localized.title}</h3>
            <p className="cv-education-institution">{localized.institution}</p>
          </TimelineElement>
          )
        })}
        <div className="cv-early-transition cv-employer" aria-label={cv.timeline.earlyLabel}>
          <span className="cv-employer-label">{cv.timeline.earlyLabel}</span>
          <h3>
            <span className="cv-early-marker" aria-hidden="true">
              <span className="cv-early-marker__mask" />
              <IconCanary className="cv-early-marker__outline" size={36} stroke={5} />
              <IconCanary size={36} stroke={1.6} />
            </span>
            {cv.timeline.earlyTitle}
          </h3>
        </div>
        <TimelineElement date={cv.timeline.jamones.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${cardVariant(projects.length + education.length)} cv-timeline-icon--star-jamones`} textClassName={`cv-timeline-content--${cardVariant(projects.length + education.length)} cv-timeline-content--early cv-timeline-content--jamones`}>
          <h3>{cv.timeline.jamones.title}</h3>
          <p className="cv-project-role">{cv.timeline.jamones.context}</p>
          <p className="cv-project-description">{cv.timeline.jamones.description}</p>
          <p className="cv-early-editorial-note">{cv.timeline.jamones.note}</p>
          <a className="cv-project-link" href="https://jamoneshervas.blogspot.com/" target="_blank" rel="noopener noreferrer">{cv.timeline.linkLabel} ↗</a>
        </TimelineElement>
        <TimelineElement date={cv.timeline.tinta.date} animate={false} icon={<img src="/images/magical-star.png" alt="" aria-hidden="true" />} iconClassName={`cv-timeline-icon cv-timeline-icon--${cardVariant(projects.length + education.length + 1)} cv-timeline-icon--star-5`} textClassName={`cv-timeline-content--${cardVariant(projects.length + education.length + 1)} cv-timeline-content--early`}>
          <h3>{cv.timeline.tinta.title}</h3>
          <p className="cv-project-role">{cv.timeline.tinta.context}</p>
          <p className="cv-project-description">{cv.timeline.tinta.description}</p>
          <ul className="cv-early-highlights">{cv.timeline.tinta.highlights.map((highlight: string) => <li key={highlight}>{highlight}</li>)}</ul>
          <a className="cv-project-link" href="https://tintaplumapapel.blogspot.com/" target="_blank" rel="noopener noreferrer">{cv.timeline.linkLabel} ↗</a>
        </TimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default CVExperience
