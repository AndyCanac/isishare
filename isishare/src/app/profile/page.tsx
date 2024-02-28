import Sidebar from "@/components/Sidebar"
import Profile from "@/components/Profile"
import Skill from "@/components/Skill"
import WTL from "@/components/WTL"
import AddSkill from "@/components/AddSkill"
import AddWTL from "@/components/AddWTL"
import AddContact from "@/components/AddContact"

export default function Home() {
  return (
    <>
      <Sidebar />
      <Profile />
      <Skill />
      <br />
      <WTL />
      <br />
      <AddSkill />
      <AddWTL />
      <AddContact />
    </>
  )
}