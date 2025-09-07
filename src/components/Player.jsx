import { useState } from "react"

export default function ({initialName, symbol, isActive, onChangeName }) {
const [playerName, setPlayerName] =useState(initialName);    
const [isEditing, setIsEditing] = useState(false)

    function hendleEditClick () {
        setIsEditing((editing)=> !editing)

        if (isEditing) {
            onChangeName(symbol,playerName)
        }
    }

    function hendleChange (event) {
        console.log(event)
        setPlayerName(event.target.value)
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={hendleChange}/>
    }


    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={hendleEditClick} >{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    )
}