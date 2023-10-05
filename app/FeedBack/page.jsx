"use client"
import Link from "next/link";

const FeedBack = () => {
  const submitHandler = () =>{
    alert("Thank You for your response!");
  }
  return (
    <section className="w-full flex-col flex-center">
        <div className="desc text-center mb-11">Feel free to add you valuable feedbacks over the website and please provide any
            suggestions to improve the website even further.</div>
        <textarea 
            placeholder="Please write your feedback here"
            className="w-80 mb-9"
            style={{border:"1px solid black"}} 
        >
        </textarea>
        <button type="submit" className="black_btn" onClick={submitHandler}>Submit</button>
    </section>
  )
}

export default FeedBack
