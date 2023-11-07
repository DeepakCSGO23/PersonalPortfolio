import React, { useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
function Technology() {
    const [cstate,setcstate]=useState(true)
    useEffect(()=>{
        var c=0
        var saved_password="Deepak"
        var current_password=document.getElementById("text");
        var submitbt=document.getElementById("submit")
        submitbt.addEventListener("click",validate)
        function validate(){
            if(current_password.value==saved_password){
                console.log('login successful')
            }else{
                console.log('not successful')
            }
            //console.log(current_password.value)
            //if(current_password.value)
        }
    })
    return (
    <div className='w-screen h-screen text-4xl bg-red-200'>
        <p className='flex flex-col items-center justify-center'>HELLO</p>
        <form className='flex items-center justify-center'>
            <input type="text" id='text'/>
            <button type='button' className='border-2' id='submit'>submit</button>
        </form>
    </div>
  )
}
export default Technology
