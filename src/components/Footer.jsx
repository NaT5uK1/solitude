import { open } from "@tauri-apps/api/shell"

const Footer = () => {
  const openBrowser = () => {
    open("https://github.com/NaT5uK1/solitude")
  }
  return (
    <div className="fixed bottom-0 bg-indigo-50 w-screen">
      <span className="p-1 flex justify-end cursor-pointer" onClick={openBrowser}>
        If you like the app,please give me ⭐️!
      </span>
    </div>
  )
}

export default Footer
