export default function Footer() {
  return (
    <div>
      <footer class="border-t border-gray-200">
        <div class=" container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
          <div class="justify-between w-full mt-4 text-center lg:flex">
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold  text-gray-900">
                Useful Links
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://mathscinet.ams.org/mathscinet/"
                    target="_blank"
                  >
                    MathSciNet
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://www.ams.org/open-math-notes"
                    target="_blank"
                  >
                    AMS open Math Notes
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://mtts.org.in/"
                    target="_blank"
                  >
                    MTTS
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="https://www.atmschools.org/"
                    target="_blank"
                  >
                    ATM School
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Useful Links
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-800"
                    href="http://www.nbhm.dae.gov.in/"
                    target="_blank"
                  >
                    NBHM
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 class="mb-2 font-bold tracking-widest text-gray-900">
                Social Networks
              </h2>
              <ul class="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="">
                    Facebook
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="">
                    Twitter
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800" href="">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <p class="text-base text-gray-400">
            All rights reserved by @{" "}
            <a class="text-gray-400 hover:text-gray-800" href="#">
              ramndiaz
            </a>{" "}
            2025
          </p>
        </div>
      </footer>
    </div>
  );
}
