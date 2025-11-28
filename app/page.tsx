import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Streamline Your Workflow with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                TaskFlow
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              The all-in-one project management platform that helps teams collaborate,
              organize, and deliver exceptional results. Start your free trial today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#pricing"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Free
              </a>
              <a
                href="#features"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage projects
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful features designed to help your team work smarter, not harder.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xl">
                    ✓
                  </div>
                  Real-time Collaboration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Work together seamlessly with real-time updates, comments, and notifications.
                    Keep your entire team in sync, no matter where they are.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600 text-white text-xl">
                    📈
                  </div>
                  Advanced Analytics
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Get insights into your team's performance with detailed analytics and reports.
                    Make data-driven decisions to improve productivity.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xl">
                    🔒
                  </div>
                  Enterprise Security
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Your data is protected with bank-level encryption and compliance with
                    industry standards. Security you can trust.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by teams worldwide
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-3">
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>
                      "TaskFlow has completely transformed how our team works. We've increased
                      productivity by 40% and reduced project delays significantly."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-semibold">
                      SM
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                      <div className="text-gray-600">CEO, TechStart Inc.</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>
                      "The best project management tool we've ever used. The interface is intuitive,
                      and the collaboration features are outstanding."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">James Davis</div>
                      <div className="text-gray-600">Project Manager, DesignCo</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <blockquote className="text-gray-900">
                    <p>
                      "Switching to TaskFlow was the best decision we made this year. It's
                      streamlined our workflow and made remote collaboration effortless."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center text-white font-semibold">
                      EW
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Emily Wilson</div>
                      <div className="text-gray-600">CTO, InnovateLabs</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the perfect plan for your team
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {/* Starter Plan */}
            <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Starter</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Perfect for individuals and small teams getting started.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$9</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <a
                href="#"
                className="mt-6 block rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Start free trial
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Up to 5 team members
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  10 projects
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Basic analytics
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Email support
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 ring-2 ring-blue-600 xl:p-10 lg:z-10 lg:scale-105">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-white">Professional</h3>
                <p className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/90">
                Best for growing teams that need advanced features.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">$29</span>
                <span className="text-sm font-semibold leading-6 text-white/90">/month</span>
              </p>
              <a
                href="#"
                className="mt-6 block rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold leading-6 text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Start free trial
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white/90">
                <li className="flex gap-x-3">
                  <span className="text-white">✓</span>
                  Up to 25 team members
                </li>
                <li className="flex gap-x-3">
                  <span className="text-white">✓</span>
                  Unlimited projects
                </li>
                <li className="flex gap-x-3">
                  <span className="text-white">✓</span>
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <span className="text-white">✓</span>
                  Priority support
                </li>
                <li className="flex gap-x-3">
                  <span className="text-white">✓</span>
                  Custom integrations
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                For large organizations with custom requirements.
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
              </p>
              <a
                href="#"
                className="mt-6 block rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Contact sales
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Unlimited team members
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Unlimited projects
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Custom analytics
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  Dedicated support
                </li>
                <li className="flex gap-x-3">
                  <span className="text-blue-600">✓</span>
                  SSO & advanced security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white">TaskFlow</h2>
              <p className="text-sm leading-6 text-gray-400">
                The modern project management platform for teams that want to achieve more.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#features" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Integrations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Community
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Status
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Cookie Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                        Licenses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
