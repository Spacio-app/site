// Importa los estilos necesarios de Tailwind CSS
'use client'
import CardProfileL from '@/components/about-us/cardProfileL'
import CardProfileR from '@/components/about-us/cardProfileR'

const About = () => {
  return (
    <section className="my-6 flex flex-col gap-3">
      <div className="mt-[100px]">
        <div className="pb-[100px]">
          <div className="text-center">
            <h2 className="text-[40px] md:text-[60px] font-bold mb-4">¿Quiénes somos?</h2>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-gray-600 w-[90%] md:w-[60%] text-center md:text-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-x-3 gap-y-[100px] mt-12">
        <div className="mx-[5%] flex gap-6 justify-start">
          <CardProfileL
          name="Cristóbal Alvarez Palacios"
          role="Jefe de proyecto y Desarrollador Full Stack"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-end">
          <CardProfileR
          name="Giovanni González Herrera"
          role="Desarrollador BackEnd"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-start">
          <CardProfileL
          name="Valentina Jofré Ladron De Guevara"
          role="Gestor, Analista QA y Diseñadora de proyecto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-end">
          <CardProfileR
          name="Diego Peña González"
          role="Gestor y Analista QA de proyecto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
          />
        </div>
        <div className="mx-[5%] flex gap-6 justify-start">
          <CardProfileL
          name="José Luis Sandoval Sánchez"
          role="Desarrollador FrontEnd"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
          src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
