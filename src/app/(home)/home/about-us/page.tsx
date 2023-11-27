// Importa los estilos necesarios de Tailwind CSS
'use client'
import CardProfileL from '@/components/about-us/cardProfileL'
import CardProfileR from '@/components/about-us/cardProfileR'

const About = () => {
  return (
    <section className="my-8 flex flex-col gap-3">
      <div className="mt-[100px]">
        <div className="pb-[100px]">
          <div className="text-center">
            <h2 className="text-[40px] md:text-[60px] font-bold mb-4">¿Quiénes somos?</h2>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-gray-600 w-[90%] md:w-[60%] text-center md:text-[25px]">
              Somos estudiantes del Instituto Profeional Duoc UC, de la carrera de Ingeniería en Informática, que se encuentran cursando el último año de la carrera. El proyecto se realizó en el ramo llamado Capstone, en un periodo de 6 meses, utilizando la metodología Kanban y la herramienta Github Project para la gestión de tareas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-x-3 gap-y-[100px] mt-12 ">
        <div className="mx-[5%] flex gap-6 justify-start">
          <CardProfileL
          name="Cristóbal Alvarez Palacios"
          role="Jefe de proyecto y Desarrollador Full Stack"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-end">
          <CardProfileR
          name="Giovanni González Herrera"
          role="Desarrollador BackEnd"
          />
        </div>
        <div className="mx-[5%] flex lg:gap-6 justify-start">
          <CardProfileL
          name="Valentina Jofré Ladron De Guevara"
          role="Gestor, Analista QA y Diseñadora de proyecto"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-end">
          <CardProfileR
          name="Diego Peña González"
          role="Gestor y Analista QA de proyecto"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-start">
          <CardProfileL
          name="José Luis Sandoval Sánchez"
          role="Desarrollador FrontEnd"
          />
        </div>
      </div>
    </section>
  )
}

export default About
