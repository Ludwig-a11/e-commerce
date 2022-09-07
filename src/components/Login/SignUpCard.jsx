import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const SignUpCard = ({ handleSignIn, errorResponse }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    const dataSent = { ...data, role: 'admin' }
    handleSignIn(dataSent)
  }
  return (
    <div className="h-screen bg-gray-200 flex items-center">
      <div className=" mx-auto flex flex-col max-w-md px-4 py-8 bg-slate-100 rounded-lg shadow-xl  sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl ">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center ">
          Already have an account ?
          <NavLink
            className="text-sm text-blue-500 underline hover:text-blue-700"
            to={'/login'}>
            {' Sign in '}
          </NavLink>
        </span>
        <div className="p-6 mt-8">
          {errorResponse ? (
            <span className="text-red-500 ">{errorResponse}</span>
          ) : (
            <div />
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="phone"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  {...register('phone', { required: true })}
                  placeholder="Phone 10 digits"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  {...register('firstName', { required: true })}
                  placeholder="First name"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  {...register('lastName', { required: true })}
                  placeholder="Last name"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-email"
                  {...register('email', { required: true })}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  placeholder="Email"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  {...register('password', { required: true })}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                  placeholder="password"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpCard
