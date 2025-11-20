"use client"

import { useRouter } from "next/navigation"

const LogOutBtn = () => {
    const router = useRouter()
    const handleLogOut = () => {
        try {
          document.cookie = `accessToken=`
          router.push("/")
          setTimeout(() => {
            location.reload()
          }, 100);
        } catch (error) {
          console.log(error)
        }
      }
    
    return (
        <>
            <button onClick={handleLogOut} className="px-4 py-2 bg-brand mt-2 rounded-2xl cursor-pointer font-medium text-white">LogOut</button>

        </>
    )
}

export default LogOutBtn