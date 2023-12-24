import axios from 'axios'

export  const tt= async ()=>{
   const data= await axios.get('http://127.0.0.1:3000/api/demo')
   return data
}
