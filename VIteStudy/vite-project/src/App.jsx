import React from 'react'
import Hold from './Components/Hold'

const App = () => {
  return (
    <div>
        <Hold/>
    </div>
  )
}

export default App




// import React,{useState} from 'react'
// import AwesomeBooks from './assets/awsome-books.png'
// import MultiPro from './assets/multi-stories-post.svg'
// import Tonic from './assets/tonic.svg'
// import Projext  from './assets/project-4.svg'



// const App = () => {

// const [Num, setNum] = useState(0)
// const [Image, setImage] = useState([
//   MultiPro,Tonic,Projext,AwesomeBooks
// ])

// const handleAdd = ()=>{
//   setNum(Num + 1)
// }
// const HandleSub = ()=>{
//   if(Num <= 0){
//     setNum(0)
//   }else{
//     setNum(Num - 1)
//   }
 
// }

// const HoldAll = ()=>{
//   handleAdd()
//   HandleSub()
// }


//   return (
//     <div>
//       <button onClick={handleAdd}>+</button>
//       <div>
//         <img src={Image[Num  % Image.length]} alt="" width={"100px"} />
//       <h3>
//         {Num}
//       </h3>
//       </div>
//       <button onClick={HandleSub}>-</button>
//     </div>
//   )
// }

// export default App