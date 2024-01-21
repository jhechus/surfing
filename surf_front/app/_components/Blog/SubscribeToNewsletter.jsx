"use client"

import { useState } from "react"



const SubscribeToNewsletter = () => {

    const [email, setEmail] = useState("")
    const [hasSignedUp, setHasSignedUp] = useState(false);

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log('On submit has been pressed');

        if (email.length){
            //send Email to strapi
            setHasSignedUp(true)
        }
    }

  return (
    <section className="newsletter">
        {hasSignedUp ? (
            <h4 className="newsletter_thanks"> Thank you for signup up for our newsletter </h4>
        ) : 
        <>
            <div className="newsletter_info">
            <h4> suscribe to our newsletter</h4>
            <p className="copy">
            Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch
            </p>
            </div>
            <form className="newsletter_form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="newsletter_email input" 
                    placeholder="Enter your Email address"
                    value={email}
                    onChange={onChange}
                />
            
            <button 
                type="submit"
                className="newsletter_subscribe btn btn-medium btn-turquoise">
                    SUBSCRIBE
            </button>
            </form>
        </>
        }
       
    </section>
  )
}

export default SubscribeToNewsletter