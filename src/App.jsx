import UserInfo from "./components/UserInfo"
import style from "./app.module.css"
function App() {

  return (
    <div className={style.container}>
      <UserInfo name="Aysana" city="karaj" age="17"/>
      <UserInfo name="Fateme" city="tehran" age="25"/>
      <UserInfo name="Ali" city="esfahan" age="37"/>
      
    </div>
  )
}

export default App
