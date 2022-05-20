import React,{useState, useContext} from 'react'



function UserSearch() {
    const [text,setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setText(text)
        console.log(text);
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <input type="text" 
                        value={text}
                        onChange={handleChange}/>
                        <button type='submit'>GO</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserSearch