import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import { personal, projects } from "@/lib/portfolioData";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function Projects() {

  return (

    <section 
      id="projects"
      className="relative py-24 sm:py-32"
    >

      <div className="section-shell">


        <SectionHeading

          index="02"

          label="Projects"

          title="Ecosystem gallery"

          blurb="A collection of software engineering projects across full-stack development, embedded systems, and computer vision."

        />


        <div className="grid md:grid-cols-2 gap-6">


          {projects.map((project,index)=>(

            <Reveal 
              key={project.id}
              delay={index * 80}
            >

              <ProjectCard

                project={project}

                index={index}

              />

            </Reveal>

          ))}


        </div>



        <Reveal className="mt-10 flex justify-center">

          <a

            href={personal.github}

            target="_blank"

            rel="noopener noreferrer"

            className="
              inline-flex items-center gap-2
              rounded-xl glass
              px-6 py-3.5
              font-medium
              hover:border-primary/40
              transition
            "

          >

            <Github className="h-4 w-4"/>

            View all repositories

            <ArrowUpRight className="h-4 w-4 text-primary"/>


          </a>


        </Reveal>


      </div>


    </section>

  );

}



function ProjectCard({project,index}){


const tech = project.techStack || [];


return (

<article

className="
group relative glass
rounded-2xl
p-6 sm:p-7
h-full flex flex-col
hover:border-primary/40
transition-all duration-500
hover:-translate-y-1
"

>


<div className="flex justify-between mb-4">


<span className="font-mono text-xs text-primary/70">

0{index+1}

</span>


<span className="
font-mono text-[10px]
uppercase tracking-wider
text-primary/80
">

● {project.status}

</span>


</div>



<h3 className="
font-display
text-xl sm:text-2xl
font-bold
mb-2
group-hover:text-primary
transition
">

{project.title}

</h3>



<p className="
text-muted-foreground
text-sm
leading-relaxed
mb-5
flex-1
">

{project.description}

</p>



<div className="flex flex-wrap gap-2 mb-6">


{tech.map(item=>(

<span

key={item}

className="
rounded-full
border
border-border/70
bg-background/40
px-3 py-1
text-xs
text-muted-foreground
"

>

{item}

</span>


))}


</div>



<div className="
flex flex-wrap gap-3
pt-5 border-t border-border/50
">


{project.liveDemoUrl && (

<a
href={project.liveDemoUrl}
target="_blank"
rel="noopener noreferrer"
className="
rounded-lg
bg-primary
text-primary-foreground
px-4 py-2
text-sm
"
>

<ExternalLink className="inline h-4 w-4 mr-1"/>

Demo

</a>

)}



{project.githubUrl && (

<a

href={project.githubUrl}

target="_blank"

rel="noopener noreferrer"

className="
rounded-lg
bg-accent
px-4 py-2
text-sm
"

>

<Github className="inline h-4 w-4 mr-1"/>

Code

</a>

)}



{!project.githubUrl && !project.liveDemoUrl && (

<span className="text-xs text-muted-foreground">

Academic project · code available on request

</span>

)}


</div>


</article>


);

}