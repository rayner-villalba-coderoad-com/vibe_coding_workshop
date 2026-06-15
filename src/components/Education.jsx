import { education } from '../data/education'

export function Card({ title, subtitle, period, tags, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3>{title}</h3>
          <p className="org">{subtitle}</p>
        </div>
        <span className="date">{period}</span>
      </div>
      {children}
      <div className="tags">
        {tags?.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education">
      <h2><span className="accent">&gt;</span> Education</h2>
      {education.map(item => (
        <Card
          key={item.id}
          title={item.degree}
          subtitle={item.institution}
          period={item.period}
          tags={item.tags}
        >
          <p>{item.description}</p>
        </Card>
      ))}
    </section>
  )
}
