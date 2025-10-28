import style from "./userinfo.module.css"
function UserInfo({name,city,age}) {
  return (
    <div className={style.container}>
      <p>{name}</p>
      <p>{city}</p>
      <p>{age}</p>
      <button>More Information</button>
    </div>
  )
}

export default UserInfo
