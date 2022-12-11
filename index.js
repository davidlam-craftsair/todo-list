function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ]);
  return (<>
    {todos.map((todo, i) => <div class='app'
      key={i}>
      <div class='todo-list'>
        <div class='todo'>
          {todo.text}
        </div>
      </div>
    </div>)}
  </>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
