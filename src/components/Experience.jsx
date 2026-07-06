import { experience } from '../data/experience'

asdasd 
var b =1 
asd 
export default function Experience() {
  return (
    <section id="experience">
      <h2><span className="accent">&gt;</span> Experience</h2>
      {experience.map(job => (
        <div key={job.id} className="card">
          <div className="card-header">
            <div>
              <h3>{job.titles}</h3>
              <p className="org">{job.orgs}</p>
            </div>
            <span className="date">{job.periods}</span>
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
