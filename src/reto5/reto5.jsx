import { useState } from "react"

export function Reto5() {
    const [person, setPerson] = useState({ username: null, fullName: null, age: null });
    const [status, setStatus] = useState(false);
    
    function haddleClick(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    function haddleStatus(e) {
        e.preventDefault();
        setStatus(true);
    }

    function ShowData(){
       return (<div className="info">
                <h1>Request Sent to DB with below request data</h1>
                <ul>
                    <li>UserName: {person.username}</li>
                    <li>FullName: {person.fullName}</li>
                    <li>Age: {person.age}</li>
                </ul>
            </div>)
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="username">
                        Username:<br />
                        <input type="text" name="username" id="username" onChange={haddleClick} />
                    </label>
                </div>
                <div>
                    <label htmlFor="fullName">
                        FullName:<br />
                        <input type="text" name="fullName" id="fullName" onChange={haddleClick} />
                    </label>
                </div>
                <div>
                    <label htmlFor="age">
                        Age:<br />
                        <input type="number" name="age" id="age" onChange={haddleClick} />
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" onClick={haddleStatus}>Submit</button>
                </div>
            </form>

            {status && <ShowData />}

        </>
    )
}