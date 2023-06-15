
import { useState } from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {
  {/* creates state variable: userProfile and state-updater function: setUserProfile*/}
  const [userProfile, setUserProfile] = useState(codepathUserProfile); {/* initializes userProfile with codepathUserProfile object*/}
  {/* creates state variable: tweets and state-updater function: setTweets*/}
  const [tweets = [], setTweets] = useState([firstTweet]); {/* initializes tweets with firstTweet object*/}
  
  return (
    <div className="app">
      <Navbar navLinks = {navLinks} /> {/*passes the static? navLinks variable imported from navBar*/}
      <main>
        <UserProfile userProfile={userProfile}/> {/*passes userProfile as prop to UserProfile component*/}
        <Feed tweets = {tweets} setTweets = {setTweets} userProfile = {userProfile}/> {/*passes tweets, setTweets, and userProfile as props to Feed component*/}
        <Advertisements />
      </main>
    </div>
  )
}

{/*userProfile={userProfile} setUserProfile={setUserProfile}*/}