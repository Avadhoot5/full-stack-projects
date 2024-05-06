import { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {email, password}

        const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers : {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
            setError(null)
            setEmail('')
            setPassword('')
          }
      
    }

    return(
        <form className="create-signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>Email</label>
        <input 
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        ></input>
        
        <label>Password</label>
        <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        ></input>

        <button>Sign Up</button>
        {error && <div className="error">{error}</div>}

    </form>
    )
    
}

export default Signup;