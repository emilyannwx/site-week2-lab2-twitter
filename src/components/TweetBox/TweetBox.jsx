import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(setTweets, userProfile) {
  {/*creates handleOnSubmit function*/}

  const handleOnSubmit = () => {
    const newTweet = {
      name: userProfile.name,
      handle: userProfile.handle,
      text: " ",
      comments: 0,
      retweets: 0,
      likes: 0,
    }
    

    
    //console.log("i've been clicked")
    //adds newTweet to tweets array with id of tweet length
    setTweets((Tweets) => [...Tweets, { ...newTweet, id: Tweets.length }])
    console.log(tweets[-1]) 
    

  }
  return (
    <div className="tweet-box">
      <TweetInput />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton({handleOnSubmit}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>CLICK ME</button>
    </div>
  )
}
