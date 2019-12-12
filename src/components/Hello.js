import React from 'react';
import Todo from './Todo'

export default function TodoList() {
  const todos = [
    {
      "id": Date.now(),
      "value": "JavaScript",
      "done": false
    },
    {
      "id": Date.now()+1,
      "value": "Android",
      "done": true  
    }
  ]

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">Halo Dunia!</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </div>
      </section>
    </div>
  )
}