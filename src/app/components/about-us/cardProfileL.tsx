import { Fade } from 'react-reveal'

function CardProfileL ({ name, role, description, src }: any) {
  return (
    <>
      <Fade left big>
        <div className="flex justify-start">
          <div className="w-[1018.88px] h-[300px] border p-4 shadow-2xl rounded-xl">
            <div className="h-[50%] flex flex-col justify-center items-center border-b border-gray-400">
              <span className="font-semibold text-[40px]">
                {name}
              </span>
              <span className="font-semibold text-[25px]">
                {role}
              </span>
            </div>
            <div className="h-[50%] flex justify-center items-center">
              <p className="w-[80%] text-center">
                {description}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={src}
              alt=""
              className="rounded-full w-[40%]"
            />
            {/* <Image
                  src="https://holatelcel.com/wp-content/uploads/2020/03/Faker_Interna_Credito_LCK.jpg"
                  alt="foto"
                  width={1000}
                  height={1000}
                  className="rounded-full w-[40%]"
                  /> */}
          </div>
        </div>
      </Fade>
    </>
  )
}

export default CardProfileL
