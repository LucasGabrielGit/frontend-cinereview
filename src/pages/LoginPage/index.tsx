import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import bgImage from "../../assets/images/bg-paper.jpg"
import useAuth from "../../hooks/useAuth"
import { User } from "../../model/User"

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>()
  const { signIn } = useAuth()


  const onSubmit: SubmitHandler<User> = data => {
    console.log(data)
    signIn(data)
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary">
      <div className="h-full w-full bg-secondary/70 shadow-lg flex items-center justify-center">
        <div className="flex-1 w-full h-full relative p-4">
          <img src={bgImage} alt="Background image" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex-1 w-full h-full p-4 justify-center items-center">
          <div className="flex flex-col justify-center py-16 px-16 text-white h-full w-[500px] m-auto">
            <h2 className="text-4xl font-bold mb-4">Login</h2>
            <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1 relative overflow-hidden">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white md:text-base">Usuário/Email</label>
                    <input type="text" id="username" className="block w-full rounded-md focus:rounded-b-none transition-all duration-200 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 md:text-base"
                      {...register("email", { required: true })} />
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-200 input-bar overflow-hidden"></span>
                  </div>
                  {errors.email && <span className="text-xs font-medium leading-6 text-red-500 md:text-base">Campo obrigatório</span>}
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1 relative overflow-hidden">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white md:text-base">Senha</label>
                    <input type="password" id="password" className="block w-full rounded-md focus:rounded-b-none transition-all duration-200 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 md:text-base"
                      {...register("password_hash", {
                        required: true
                      })} />
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-200 input-bar overflow-hidden"></span>
                  </div>
                  {errors.password_hash && <span className="text-xs font-medium leading-6 text-red-500 md:text-base">Campo obrigatório</span>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary checked:bg-primary" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm font-medium leading-6 text-white md:text-base">Lembrar de mim</label>
                  </div>
                </div>

                <button className="bg-secondary hover:bg-primary transition-all duration-200 text-white font-bold py-2 px-4 rounded-md w-full" type="submit">Entrar</button>

                <span className="text-sm font-medium leading-6 text-primary md:text-base text-center">ou</span>

                <Link to="/register" className="bg-primary hover:bg-secondary transition-all duration-200 text-white font-bold py-2 px-4 rounded-md w-full flex items-center justify-center">Crie uma conta</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
