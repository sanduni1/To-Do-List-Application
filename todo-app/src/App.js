import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
 
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  
  return (
    <div class="card" style={{paddingLeft: '250px', paddingRight: '250px', paddingBottom: '165px', paddingTop: '100px'}}>
      <div class="card text-center">

        <div class="card-header" style={{paddingBottom: '10px', paddingTop: '10px'}}>
          TODO-APPLICATION
        </div>

        <div class="card-body"  style={{paddingBottom: '50px'}}>
          <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
          cancelUpdate={cancelUpdate}/>
          <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
          {todos.length > 1 && (
            <button className='btn btn-danger btn-md delete-all'
            onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
