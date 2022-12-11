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

  const [value, setValue] = React.useState(''); // value for input

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`value is ${value}`);
    let tmp = [...todos, { text: value, isCompleted: false }];
    setTodos(tmp);
    onToDoAdded();
  }

  const onToDoAdded = () => {
    // reset value to empty, should display placeholder
    setValue('');
  }

  return (<div class='app'>
    <div class="todo-list">
      {todos.map((todo, i) => <div class="todo" key={i}>
        <button>-</button><div class="todo-text">{todo.text}</div>
      </div>)}
      <form onSubmit={handleSubmit}>
        <input type='text'
          className="input"
          value={value}
          placeholder="Add ToDo ..."
          onChange={e => setValue(e.target.value)} // onChange
        />
      </form>
    </div>
  </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
