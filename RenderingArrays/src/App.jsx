import './App.css'
import { learner } from './learner'
import Learner from './components/Learner'
function App() {

  return (
    <>
    <div>
    <h1>List of Learners</h1>
      {learner.map((student , i) => {
        return (
          <div key = {i}>
            <Learner 
            name = {student.name}
            bio = {student.bio}
            scores = {student.scores}
            i = {i}
            />
          </div>
        )
      } )}

    </div>
    </>
  )
}

export default App
