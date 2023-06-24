import InputTag from "./components/input"
import { useForm ,getValues} from "react-hook-form";
import './App.css'
function App() {
  const {register,handleSubmit,getValues,formState:{errors}}=useForm();
  const onSubmit=(data)=>{
    console.log(data)
    alert("Sign up Successfully")
    window.location.reload();
  }
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <p>Update your details</p>
     <form action="" onSubmit={handleSubmit(onSubmit)}>
      
       <InputTag id="username" name="username" type="text" lable="username" placeholder="Enter username" register={{...register("username",{required:"Username Required"})}} errorMessage={errors.username?.message}/>
       {console.log(errors)}
       <InputTag id="Phone" name="Phone" type="text" lable="Phone" placeholder="Enter phone"  register={{...register("Phone",{required:"Phone number required",pattern:{value: /^[0-9]{10}$/, message:"Invalid Phone number"}})}} errorMessage={errors.Phone?.message}/>
       <InputTag id="email" name="email" type="text" lable="Email"  placeholder="Enter email"  register={{...register("email",{required:"email required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid Email"}})}} errorMessage={errors.email?.message}/>
       <InputTag id="Password" name="Password" type="text" lable="Password"  placeholder="Enter password" register={{...register("Password",{required:"Password must be atleast 6 character",minLength:{value:6,message:"password must be atleast 6 character"}})}} errorMessage={errors.Password?.message}/>
       <InputTag id="confrimpassword" name="confrimpassword" type="text" lable="Confrim-password"  placeholder="confrim password"  register={{...register("confrimpassword",{required:true, validate: {
        match: (value) => {
          const { Password } = getValues();
          return Password === value || "password must be matched!";
        }
      }})
    }} errorMessage={errors.confrimpassword?.message 
              }/>
        <button>Sign Up</button>
     </form>
    </div>
  );
}

export default App;
