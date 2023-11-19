import React,{useState} from 'react'
import './Style.css'

const Hold = () => {

    const Quote = [
        {
            quote : "Genius is one percent inspiration and ninety-nine percent perspiration.",
            author : "Thomas Edison"
        },
        {
            quote : "You can observe a lot just by watching.",
            author : "Yogi Berra"
        },
        {
            quote : "A house divided against itself cannot stand.",
            author : "Abraham Lincoln"
        },
        {
            quote : "Difficulties increase the nearer we get to the goal.",
            author : "Johann Wolfgang von Goethe"
        },
        {
            quote : "Fate is in your hands and no one elses.",
            author : "Byron Pulsifer"
        },
        {
            quote : "Be the chief but never the lord.",
            author : "Lao Tzu"
        },
        {
            quote : "Nothing happens unless first we dream.",
            author : "Carl Sandburg"
        },
        {
            quote : "Well begun is half done.",
            author : "Aristotle"
        }
    ]

    const [NewQuote, setNewQuote] = useState('')

    const HandleButton = ()=>{
        const RandomQuote = Math.floor(Math.random()*Quote.length)


        setNewQuote(Quote[RandomQuote])
    }



  return (
    <div className='Hold'>
        <div className="container">
            <div className="Head">
                <h2>Quote of the Day</h2>
            </div>
            <div className="Content">
                <h3> " {NewQuote.quote} " </h3>
                  <p>- {NewQuote.author}  </p>
            </div>
            <div className="buttonHold">
                <button onClick={HandleButton}>New Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Hold