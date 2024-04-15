import {useState} from 'react'

const Regform = () => {

    const [user,setUser]= useState({name:"premkumar",age:24,gender:"male",isMarried:true,country:"india"})

    function changeHandler(event){
let name = event.target.name;
let value = event.target.type === "checkbox"?event.target.checked:event.target.value;

setUser({...user,[name]:value})
console.log(name)
    }

  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>MartialStatus</td>
                <td>{user.isMarried ? "married":"not married"}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.country}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder='fullName' onChange={changeHandler} name='name'/>
        <input type="number" placeholder='type age'  onChange={changeHandler} name='age' />
       <div className="gender">
       <label htmlFor="Male">
            <input type="radio" name='gender' onChange={changeHandler} checked={user.gender=="Male"} value="male"/>
            Male
        </label>
        <label htmlFor="Female">
        <input type="radio" name='gender' onChange={changeHandler} checked={user.gender=="Female"} value="female"/>
            Female
        </label>
       </div>
       <label htmlFor="isMarried">
        <input type="checkbox" name='isMarried' checked={user.isMarried} onChange={changeHandler}/>
        isMarried
       </label>
       <div>
        <label htmlFor="country">select country:</label>
        <select name="country" id="" value={user.country} onChange={changeHandler}> 
            <option value="india">india</option>
            <option value="usa">usa</option>
            <option value="uk">uk</option>
            <option value="london">london</option>
        </select>
       </div>
    </form>
    </>
  )
}

export default Regform