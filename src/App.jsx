import { Outlet } from "react-router-dom"
import CustomLink from "./components/CustomLink"
import Footer from "./components/Footer"
import { rules } from "./data/rules.json"
function App() {
  return (
    <div className="h-screen bg-indigo-400 relative">
      <div className="min-h-1/3 flex justify-center items-center space-x-30 sm:space-x-40 md:space-x-50 lg:space-x-60 xl:lg:space-x-70">
        {rules.map((rule, index) => (
          <CustomLink to={`calc/${index}`} key={index}>
            {rule.name}
          </CustomLink>
        ))}
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
