import React from 'react';

export default (props) => {
    const { currentTodo } = props
    const handleInputChange = (event) => {
        const val = event.target.value
        
    }
    return (
        <form>
            <input type="text"
            onChange={handleInputChange}
            value={currentTodo}
             />
        </form>
    )
}