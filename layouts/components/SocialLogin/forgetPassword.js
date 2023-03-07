import React from 'react'

const ForgetPassword = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img  class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            Oabki.com    
        </a>
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
            </h2>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-orange-500 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@email.com" required=""/>
                <button type="submit" class="w-full border-orange-500 mt-3 border-2 text-orange-500 bg-primary-600 hover:text-white hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300  rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-500 dark:hover:bg-orange-500 dark:focus:ring-orange-800">Reset passwod</button>
                </div>
            </form>
        </div>
    </div>
  </section>
  )
}

export default ForgetPassword
