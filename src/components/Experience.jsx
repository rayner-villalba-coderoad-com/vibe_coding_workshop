import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience">
      <h2><span className="accent">&gt;</span> Experience</h2>
      {experience.map(job => (
        <div key={job.id} className="card">
          <div className="card-header">
            <div>
              <h3>{job.title}</h3>
              <p className="org">{job.org}</p>
            </div>
            <span className="date">{job.period}</span>
          </div>
          <ul>
            {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="tags">
            {job.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}