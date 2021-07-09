import React from 'react'

export const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailErr,
        passErr } = props;



    return (
        <div className="container">
            <div className="login">
                {hasAccount ? (
                    <>
                        <h2>Sign in</h2>
                    </>
                ) : (
                    <>
                        <h2>Create Account</h2>
                    </>
                )
                }
                <form className="login-fm">
                    <label>Username</label>
                    <input type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter username"
                    />
                    <p className="errorMsg">{emailErr}</p>
                    <label>Password</label>
                    <input type="password"
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Enter password"
                    />
                    <p className="errorMsg">{passErr}</p>
                    <div className='btnContainer'>
                        {hasAccount ? (
                            <>
                                <button className="btn"
                                    onClick={handleLogin}>Sign in</button>
                                <p>Don't have an account?
                                    <span onClick={() => { setHasAccount(!hasAccount) }}>Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button className="btn"
                                    onClick={handleSignup}>Sign up</button>
                                <p>Have an account?
                                    <span onClick={() => { setHasAccount(!hasAccount) }}>Sign in</span></p>
                            </>
                        )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
