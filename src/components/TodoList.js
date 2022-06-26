import React, { useState } from 'react';

//using hook
const TodoList = () => {
  const [name, setName] = useState("mhung")
  return (
    <div>
      <label>Your Name</label>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <br />
      Hello TodoList with name = {name}
    </div>
  );
};
// using class
// class TodoList extends React.Component {
//   state = {
//     name: 'mhung',
//   }
//   render() {
//     return (
//       <div>
//         <label>Your name: </label>
//         <input type="text" onChange={(event) => this.setState({ name: event.target.value })}></input>
//         Hello {this.state.name}
//       </div>
//     )
//   }
// }

export default TodoList;
