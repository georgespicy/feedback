import React from 'react';
function App() {
    
    const name  = 'sam';
    const address = 'lagos';
    const feedback = [
        {  id:1, name:'george', comment:'happy for me' },
        {  id:2, name:'kola', comment:'vibe' },
        {  id:3, name:'tope', comment:'chilling' },
        {  id:4, name:'kemi', comment:'chillax' },
        {  id:5, name:'james', comment:'jump' },
    ];

    return(
        <>
        
        <div className='container'>
            <h1>Building App</h1>
            <p>{name}</p>
            <p>{address}</p>
        </div>
        <div className='comments'>
            <p>commnets({feedback.length})</p>
           {feedback.map((feedback) => (
            <p key={feedback.id}>{feedback.name} {feedback.comment}</p>
           ))}
        </div>
        
        </>
    )
}

export default App 