import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

const sections = ['Dashboard', 'Activities', 'Teams', 'Workouts']

function SectionPage({ title }) {
  return <h1 className="h3 mb-0">{title}</h1>
}

function App() {
  return (
    <div className="min-vh-100 bg-body-tertiary">
      <header className="border-bottom bg-white">
        <div className="container d-flex flex-wrap align-items-center column-gap-3 row-gap-2 py-3">
          <img src="/octofitapp-small.png" width="40" height="40" alt="" />
          <span className="fs-5 fw-semibold">OctoFit Tracker</span>
          <nav aria-label="Main navigation" className="ms-auto d-flex flex-wrap gap-3">
            {sections.map((section, index) => (
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${isActive ? 'text-success fw-semibold' : 'text-secondary'}`
                }
                end={index === 0}
                key={section}
                to={index === 0 ? '/' : `/${section.toLowerCase()}`}
              >
                {section}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container py-4">
        <Routes>
          <Route element={<SectionPage title="Dashboard" />} path="/" />
          <Route element={<SectionPage title="Activities" />} path="/activities" />
          <Route element={<SectionPage title="Teams" />} path="/teams" />
          <Route element={<SectionPage title="Workouts" />} path="/workouts" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </main>
    </div>
  )
}

export default App
