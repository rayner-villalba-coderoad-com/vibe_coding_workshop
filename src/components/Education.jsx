import { educations } from '../data/education'

export default function Education() {
  return (
    <section id="education">
      <h2><span className="accent">&gt;</span> Education</h2>
      {educations.map(item => (
        <div key={item.id} className="card">
          <div className="card-header">
            <div>
              <h3>{item.degree}</h3>
              <p className="org">{item.institution}</p>
            </div>
            <span className="date">{item.period}</span>
          </div>
          <p>{item.description}</p>
          <div className="tags">
            {item.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}