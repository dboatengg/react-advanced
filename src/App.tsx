import PostsLists from './group/react-query/components/3-PostsLists'
import TodoListsOld from './group/react-query/components/1-TodoListsOld'
import TodoListsReactQuery from './group/react-query/components/2-TodoListsReactQuery'
import Pagination from './group/react-query/components/4-Pagination'
import Infinite from './group/react-query/components/Infinite'
import TodoList from './group/react-query/todo-app/TodoList'

const App = () => {
  return (
    <div className='m-2'>
      {/* <TodoLists/> */}
      {/* <TodoListsReactQuery/> */}
      {/* <PostsLists/> */}
      {/* <Pagination/> */}
      {/* <Infinite/> */}
      <TodoList/>
    </div>
  )
}

export default App;