import { FormControl, TextField, Button, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserAction } from '../../redux/Actions/LoginAdminAction'

const Login = () => {
    const { userInfo } = useSelector((state) => state.user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispach = useDispatch()

    const loginHandler = () => {
        dispach(loginUserAction(email, password))
    }
    useEffect(() => {
        
        if (userInfo.status) {
            if (userInfo.status === 200) {
                navigate("/")
                
            }else{
                console.log("Login olunmadi");
            }
        }
    }, [userInfo])



    console.log(userInfo);



    return (
        <section className='login-section'>
            <div className="container">
                <div className="login-box m-auto">
                    <Avatar className='sign-in-avatar m-auto mb-2'><LockOutlinedIcon /></Avatar>
                    <h3 className='text-center mb-4 m-auto'>Sign in</h3>
                    <FormControl className="my-2" fullWidth>
                        <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email Address *" variant="outlined" />
                    </FormControl>
                    <FormControl className="my-2" fullWidth>
                        <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="Password" label="Password *" variant="outlined" />
                    </FormControl>
                    <Button onClick={() => loginHandler()} className="my-3" fullWidth variant="contained" color="primary">
                        Sign In
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Login