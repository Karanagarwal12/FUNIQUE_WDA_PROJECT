import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    let visible = false;
    function textUp(event) {
        event.target.labels[0].style.top = "12px";
        event.target.labels[0].style.fontSize = "0.8rem";
        event.target.labels[0].style.opacity = 1;
    }
    function textCheck(event) {
        if (event.target.value == "") {
            event.target.labels[0].style.top = "40px";
            event.target.labels[0].style.fontSize = "1rem";
            event.target.labels[0].style.opacity = 0.4;
        }
    }
    function toggleView(event) {
        if (!visible) {
            event.target.parentElement.previousElementSibling.type = "text";
            event.target.style.left = "-25px";
            visible = true;
        }
        else {
            event.target.parentElement.previousElementSibling.type = "password";
            event.target.style.left = "0px";
            visible = false;
        }
    }
    function submitHandler(e) {
        e.preventDefault();
        if(!(e.target.form[0].value==""|| e.target.form[1].value == "")) {
            router.push('/');
        }else{
            alert("Please fill in all fields");
        }
    }
    return (
        <div className="loginBox">
            <h1>Login</h1>
            <form className="form" method='post' action='#'>
                <div className="username">
                    <label for="username">Username</label>
                    <input onFocus={textUp} onBlur={textCheck} className='input' type="text" id="username" name="username" required />
                </div>
                <div className="password">
                    <label for="password">Password</label>
                    <input onFocus={textUp} onBlur={textCheck} className='input' type="password" id="password" name="password" required />
                    <div className='icon'>
                        <div className='iconBox' onClick={toggleView} >
                            <VisibilityIcon className='visible' />
                            <VisibilityOffIcon className='notvisible' />
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={submitHandler}>Log In</button>
            </form>
        </div>
    );
}
