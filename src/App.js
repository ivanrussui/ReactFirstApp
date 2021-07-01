import React from 'react';
import TodoList from './Todo/TodoList';


function App() {
	const todos = [
		{ id: 1, completed: false, title: 'Стать React.js разработчиком'},
		{ id: 2, completed: false, title: 'Снять квартиру'},
		{ id: 3, completed: false, title: 'Купить машину'}
	]
  return (
    <div className="wrapper">
			<h1>React First App</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
