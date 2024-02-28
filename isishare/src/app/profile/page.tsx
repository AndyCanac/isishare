import Sidebar from "@/components/Sidebar"
import Profile from "@/components/Profile"
import Skill from "@/components/Skill"
import WTL from "@/components/WTL"

export default function Home() {
  return (
    <>
      <Sidebar />
      <Profile />
      <Skill />
      <br />
      <WTL />
    </>
  )
}