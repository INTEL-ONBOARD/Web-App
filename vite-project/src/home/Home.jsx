import './Home.css'

function Home() {


  return (
    <>
        <nav class="bg-white border-gray-200 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap "></span>
          </a>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li >
                <a href="#" class=" text-3xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page"><i class="fi fi-rs-home"></i></a>
              </li>
              <li>
                <a href="#" class="text-3xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "><i class="fi fi-rs-info"></i></a>
              </li>
              <li>
                <a href="#" class="text-3xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "><i class="fi fi-rs-user-headset"></i></a>
              </li>
              <li>
                <a href="#" class="text-3xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "><i class="fi fi-rs-log-out"></i></a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    </>
  )
}

export default Home
