import React from 'react';
// const TodoList = () => {
//     return (
//         <div>
//             Hello Todo List
//         </div>
//     );
// };

class TodoList extends React.Component{

  // //Khai báo state
  // state = {
  //   name : 'mhung',
  //   age : '21'
  // }

  // //gán lại giá trị cho state
  // render(){
  //   return (
  //     <div>
  //       <label>Name: </label>
  //       <input type="text" onChange={(event)=> this.setState({name: event.target.value})}/> <br/>
  //       Hello Todo List name: {this.state.name} and age: {this.state.age}
  //     </div>
  //   )
  // }

  state = {
    name: 'mhung',
  }
  render(){
    return(
      <div>
        <label>Your name: </label>
        <input type= "text" onChange={(event) => this.setState({name: event.target.value})}></input>
        Hello {this.state.name}
      </div>
    )
  }
}
export default TodoList;
