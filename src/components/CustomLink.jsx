import { Link, useMatch, useResolvedPath } from "react-router-dom"

const active = "bg-indigo-500"
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link
      className={`no-underline rounded-lg border p-3 bg-indigo-400 hover:bg-indigo-500 ${match && active}`}
      to={to}
      {...props}
    >
      <span className="text-indigo-50">{children}</span>
    </Link>
  )
}
export default CustomLink
