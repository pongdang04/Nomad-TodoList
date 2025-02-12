import { useState } from "react";
import { useForm } from "react-hook-form";

/*function ToDoList(){
  const [toDo, setToDo]=useState("");
  const [error, setError]=useState("");
  const onChange=(event:React.FormEvent<HTMLInputElement>)=>{
    const {
      currentTarget:{value},
    }=event;
    setToDo(value);
  }

  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    {toDo.length>10? console.log(toDo):
      setError("to short!");
      console.log(error);
    }
    
    setToDo("")
  }

  return <div>
    <form onSubmit={onSubmit}>
      <input placeholder="write todo" onChange={onChange} value={toDo}/>
      <button>add</button>
    </form>
  </div>
}*/
interface IForm{
  email:string,
  passWord:string
}

function ToDoList(){
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid=(data:any)=>{
    console.log(data)
  }
  return <div>
  <form onSubmit={handleSubmit(onValid)}>
    <input {...register('email', {
      required:"email is required", 
      minLength:{
        value:10,
        message:"email must be longer than 10"
      },
      pattern:{
        value:/^[A-Za-z0-9._%+-]+@naver.com$/,
        message:`mail has to be naver mail`
      }
      })} placeholder="email"/>
      <span>{errors?.email?.message}</span>
    <input {...register('passWord', {required:true})} placeholder="passWord"/>
    <span>{errors?.passWord?.message}</span>
    <button>add</button>
  </form>
</div> 
}

export default ToDoList;