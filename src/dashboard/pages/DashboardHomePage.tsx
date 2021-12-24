import React, { Fragment, MouseEventHandler, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
  LogoutIcon
} from '@heroicons/react/outline'
import { ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon } from '@heroicons/react/solid'
import logoSvg from "../../resources/logo.svg";
import useLogout from '../hooks/useLogout';
import useUser from '../../user/hooks/useUser';
import { CircularProgress } from '@mui/material';
import useUniversity from '../../user/hooks/useUniversity';
import useDirectory from '../../user/hooks/useDirectory';
import useQuickApplicant from '../../user/hooks/useApplicant';
import useQuickApplications from '../../user/hooks/useQuickApplications';


const coverImageUrl = 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';
const mockAbout = `
<p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
<p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
`;
interface FieldsType {
    [key: string]: string
}
const mapMode = (mode: string | null | undefined) => {
  switch(mode) {
    case "CAMPUS":
      return "Campus"
    case "ONLINE":
      return "Online"
    default: 
      return "TBD"
  }
}
const mapSchedule = (schedule: string | null | undefined) => {
  switch(schedule) {
    case "FULLTIME":
      return "Full Time"
    case "PARTTIME":
      return "Part Time"
    default: 
      return "TBD"
  }
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const DashboardHomePage: React.FC = () => {
    let isFetching = false;
    const { status: userStatus, data: user, error: userError, isFetching: userIsFetching } = useUser();
    isFetching = isFetching || userIsFetching;

    const { status: universityStatus, data: university, error: universityError, isFetching: universityIsFetching } = useUniversity();
    isFetching = isFetching || universityIsFetching;
    
    const { status: directoryStatus, data: directory, error: directoryError, isFetching: directoryIsFetching } = useDirectory();
    isFetching = isFetching || directoryIsFetching;

    const [id, setId] = useState(0);
    const { status: profilesStatus, data: profiles, error: profilesError, isFetching: profilesIsFetching } = useQuickApplications();
    isFetching = isFetching || profilesIsFetching;

    const profile = profiles?.[id];
    const fields: FieldsType | undefined = profile ? {
        Email: profile.student.email,
        "Birth Date": profile.student.birthdate?.toLocaleDateString("en-US") ?? "",
        University: profile.university.name,
        "Program Name": profile.masterProgram.name,
        "Program Deadline": profile.masterProgram.deadline?.toLocaleDateString("en-US") ?? "",
        "Program Duration": `${profile.masterProgram.duration} months`,
        "Program Field": profile.masterProgram.field,
        "Program Language": profile.masterProgram.language,
        "Program Mode": mapMode(profile.masterProgram.mode),
        "Program Schedule": mapSchedule(profile.masterProgram.schedule)
      } : undefined;
    
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const {
      mutate: logout, status: logoutStatus, error: logoutError,
    } = useLogout();

    const logoutSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
      logout({});
    }

    const changeApplicant = (event: React.MouseEvent<HTMLAnchorElement>, id: number) => {
      event.preventDefault();

      setId(id);
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });     
    }

    if(isFetching) {
      return (
        <CircularProgress
          style={{
            position: 'absolute',
            top: 'calc(50% - 32px)',
            left: 'calc(50% - 32px)',
          }}
          size={64}
          data-testid="progress-indicator"
        />
      );
    }

    return (
      <>
        <div className="h-full flex">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                    <picture>
                      <source srcSet={logoSvg} type="image/svg" />
                      <img
                      src={logoSvg}
                      className="w-16 flex-initial self-start"
                      alt="Find My Masters Logo"
                      />
                    </picture>
                    <h2 className="flex-initial w-64 self-end text-lg font-medium text-gray-900">Find My Master's</h2>
                  
                    
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="px-2 space-y-1">
                      <a key="Dashboard"
                         href="#"
                         className={classNames(
                          true
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                          aria-current={true ? 'page' : undefined}
                        >
                          <HomeIcon
                            className={classNames(
                              true ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {"Dashboard"}
                        </a>
                      </div>
                      <hr className="border-t border-gray-200 my-5" aria-hidden="true" />
                      <div className="px-2 space-y-1">
                        <a
                            key="Logout"
                            href="#"
                            onClick={logoutSubmit}
                            className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          >
                            <LogoutIcon
                              className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                              aria-hidden="true"
                            />
                            Logout
                          </a>
                      </div>
                    </nav>
                  </div>
                  <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    <div className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div>
                          <img className="inline-block h-10 w-10 rounded-full" src={university?.image ?? logoSvg} alt="" />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{user?.firstname}{" "}{user?.lastname}</p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{university?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>
  
          {/* Static sidebar for desktop */}
          <div className="hidden lg:flex lg:flex-shrink-0">
            <div className="flex flex-col w-64">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="h-full w-64 fixed flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <picture>
                      <source srcSet={logoSvg} type="image/svg" />
                      <img
                      src={logoSvg}
                      className="w-16 flex-initial self-start"
                      alt="Find My Masters Logo"
                      />
                    </picture>
                    <h2 className="flex-initial w-64 self-end text-lg font-medium text-gray-900">Find My Master's</h2>
                  </div>
                  <nav className="mt-5 flex-1" aria-label="Sidebar">
                    <div className="px-2 space-y-1">
                        <a
                          key="Dashboard"
                          href="#"
                          className={classNames(
                            true
                              ? 'bg-gray-200 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                          )}
                          aria-current={true ? 'page' : undefined}
                        >
                          <HomeIcon
                            className={classNames(
                              true ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          Dashboard
                        </a>
                    </div>
                    <hr className="border-t border-gray-200 my-5" aria-hidden="true" />
                    <div className="flex-1 px-2 space-y-1">
                       <a
                          key="Logout"
                          href="#"
                          onClick={logoutSubmit}
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        >
                          <LogoutIcon
                            className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                            aria-hidden="true"
                          />
                          Logout
                        </a>
                    </div>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <div className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                      <div>
                        <img className="inline-block h-9 w-9 rounded-full" src={university?.image ?? logoSvg} alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{user?.firstname}{" "}{user?.lastname}</p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{university?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="lg:hidden">
              <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                <div className='flex'>
                <picture>
                    <source srcSet={logoSvg} type="image/svg" />
                    <img
                    src={logoSvg}
                    className="w-12 flex-initial self-start"
                    alt="Find My Masters Logo"
                    />
                </picture>
                <h2 className="flex-initial w-48 self-end text-lg font-medium text-gray-900">Find My Master's</h2>
                </div>
                
                <div>
                  <button
                    type="button"
                    className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative z-0 flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                {/* Breadcrumb */}
                <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                  <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                    <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span>All Applicants</span>
                  </a>
                </nav>
  
                <article>
                  {/* Profile header */}
                  <div>
                    <div>
                      <img className="h-32 w-full object-cover lg:h-48" src={coverImageUrl} alt="" />
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="flex">
                          <img
                            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                            src={profile?.student.image}
                            alt=""
                          />
                        </div>
                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                          <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">{profile?.student.firstname}{" "}{profile?.student.lastname}</h1>
                          </div>
                          <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button
                              type="button"
                              className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                              <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span>Message</span>
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                            >
                              <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span>Call</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">{profile?.student.firstname}{" "}{profile?.student.lastname}</h1>
                      </div>
                    </div>
                  </div>
  
                  {/* Description list */}
                  <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      {Object.keys(fields!).map((field) => (
                        <div key={field} className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">{field}</dt>
                          <dd className="mt-1 text-sm text-gray-900">{fields![field]}</dd>
                        </div>
                      ))}
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd
                          className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                          dangerouslySetInnerHTML={{ __html: mockAbout }}
                        />
                      </div>
                    </dl>
                  </div>
                </article>
              </main>
              <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                <div className="px-6 pt-6 pb-4">
                  <h2 className="text-lg font-medium text-gray-900">Applicants</h2>
                  <p className="mt-1 text-sm text-gray-600">3,018 applicants to all master programs</p>
                  {/* 
                  <form className="mt-6 flex space-x-4" action="#">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                          type="search"
                          name="search"
                          id="search"
                          className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="sr-only">Search</span>
                    </button>
                  </form>
                  */}
                </div>
                {/* Directory list */}
                <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
                  {Object.keys(directory!).map((letter) => (
                    <div key={letter} className="relative">
                      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                        <h3>{letter}</h3>
                      </div>
                      <ul role="list" className="relative z-0 divide-y divide-gray-200">
                        {directory![letter].map((person) => (
                          <li key={person.student.id}>
                            <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={person.student.image} alt="" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <a href="#" onClick={(event) => changeApplicant(event, person.student.id)} className="focus:outline-none">
                                  {/* Extend touch target to entire panel */}
                                  <span className="absolute inset-0" aria-hidden="true" />
                                  <p className="text-sm font-medium text-gray-900">{person.student.firstname} {" "} {person.student.lastname}</p>
                                  <p className="text-sm text-gray-500 truncate">{person.masterProgram.name}</p>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </>
    )
  }

export default DashboardHomePage;
