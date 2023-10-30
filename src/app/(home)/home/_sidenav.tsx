'use client'

import { useState } from 'react'
import './compiled.css'
import '@/app/css/globals.css'
// import Image from 'next/image'

// <Image
// className="h-9 w-auto"
// src="/rocket.svg"
// alt="Your Company"
// width={40}
// height={40}
// />

const Sidenav = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    console.log('CLICK')
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="alo">
        <div>
            <div className={`md cqd cqk crr cuy cwt czd ${isSidebarOpen ? 'open' : ''}`}>
                <div className="lx ut yr aat adj ajr ark asu">
                    <div className="lx nl ur yz">
                    <img className="og tm" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
                    </div>
                    <nav className="lx um yr">
                    <ul role="list" className="lx um yr aav">
                        <li>
                        <ul role="list" className="ga abo">
                            <li>
                            <a href="#" className="ajt bah bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="bah oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                Dashboard
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="ayc bsb oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                                </svg>
                                Team
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="ayc bsb oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021 18.75V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                                </svg>
                                Projects
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="ayc bsb oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                                </svg>
                                Calendar
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="ayc bsb oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
                                </svg>
                                Documents
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="ayc bsb oc se ur">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
                                </svg>
                                Reports
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <div className="awc awg awp ayc">Your teams</div>
                        <ul role="list" className="ga lb abo">
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">H</span>
                                <span className="adl">Heroicons</span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">T</span>
                                <span className="adl">Tailwind Labs</span>
                            </a>
                            </li>
                            <li>
                            <a href="#" className="ayc blu biv bqg lx aaf adu aqq awa awp awg">
                                <span className="lx oc se ur yz ze adt aez agf ajp avw awe bah">W</span>
                                <span className="adl">Workcation</span>
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="lp">
                        <a href="#" className="bqg ga lx aaf adu aqq awa awg awp ayc biv blu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="oc se ur ayc bsb">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Settings
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
                <div className="des">
                <div className={`ac dn ej lx nl ur yz aag aff afu alo ari bbn cbz cfc ddh ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <button type="button" onClick={toggleSidebar} className="ft aqr axt cvc">
                    <span className="t">Open sidebar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="oc se">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                    </button>
                    <div className="oc to aja cvc" aria-hidden="true"></div>
                    <div className="lx um aag ade czy">
                    <form className="ab lx um" action="#" method="GET">
                        <label htmlFor="search-field" className="t">Search</label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="u aa as cg ph sb axp">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path>
                        </svg>
                        <input id="search-field" className="lu ph tn afa arn atr att axv bgd bnc cid" placeholder="Search..." type="search" name="search" />
                    </form>
                    <div className="lx yz aag czy">
                        <button type="button" className="ft aqr axp bkx">
                        <span className="t">View notifications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="oc se">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                        </svg>
                        </button>
                        <div className="md cuw cvm cxa dcr" aria-hidden="true"></div>
                        <div className="ab" data-headlessui-state="">
                        <button className="fr lx yz aqn" id="headlessui-menu-button-1" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                            <span className="t">Open user menu</span>
                            <img className="og sj ads aiq" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                            <span className="md cuy czg">
                            <span className="jx awa awg awp axv" aria-hidden="true">Tom Cook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="jt nz sb axp">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                            </svg>
                            </span>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <main className="arr">
                    <div className="ari cfc ddh">
                    <div className="ab ox adg adx aez afp afw bbe">
                        <svg className="aa ak ph tn apm" fill="none">
                        <defs>
                            <pattern id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                            </pattern>
                        </defs>
                        <rect stroke="none" fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)" width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Sidenav
