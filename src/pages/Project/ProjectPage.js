import { projects } from './index'
import { Project, CustomTitle } from '../../components'
import { ProjectsTitle } from '../../data/titledata'

import './projectpage.scss'

const ProjectPage = () => {


  return (
    <section className="section__projects section__padding">
      <CustomTitle
        title={ProjectsTitle.title}
        lettersArray={ProjectsTitle.lettersArray}
        text1={ProjectsTitle.text1}
      />
      <div className="section__projects-wrapper">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />
        })}
      </div>
    </section>
  )
}

export default ProjectPage
