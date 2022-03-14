import { open } from "@tauri-apps/api/shell"

const Footer = () => {
  const openBrowser = () => {
    if(window.__TAURI__){
      open("https://github.com/NaT5uK1/solitude")
    }else{
      window.open("https://github.com/NaT5uK1/solitude",'_blank')
    }
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