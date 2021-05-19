// import React, { useState } from "react";
// import "./LoginScreen.css";
// import SignupScreen from "./SignupScreen";

// function LoginScreen() {
//   const [signIn, setSignIn] = useState(false);

//   return (
//     <div className="loginScreen">
//       <div className="loginScreen__background">
//         <img
//           className="loginScreen__logo"
//           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
//           alt=""
//         />
//         <button onClick={() => setSignIn(true)} className="loginScreen__button">
//           Sign In
//         </button>

//         <div className="loginScreen__gradient" />
//       </div>

//       <div className="loginScreen__body">
//         {signIn ? (
//           <SignupScreen />
//         ) : (
//           <>
//             <h1>Unlimited films, TV programmes and more.</h1>
//             <h2>Watch anywhere. Cancel at any time.</h2>
//             <h3>
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </h3>

//             <div className="loginScreen__input">
//               <form>
//                 <input type="email" placeholder="Email Address" />
//                 <button
//                   onClick={() => setSignIn(true)}
//                   className="loginScreen__getStarted"
//                 >
//                   GET STARTED
//                 </button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default LoginScreen;



import React, { useState} from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function Loginscreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img
                className="LoginScreen_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="netflix_logo"
                />
                <button 
                 onClick = {()=>setSignIn(true)}
                className="LoginScreen_button">
                    Sign In
                </button>
                <div className="LoginScreen_gradient">
                    
                </div>
                <div className="LoginScreen_body">
                    {signIn ? (<SignupScreen />):
                    (
                        <>
                        <div>
                            <h1>Unlimited films, TV programes and more.</h1>
                            <h2>Watch anywhere, Cancel at any time</h2>
                            <h3>
                                Ready to watch? Enter your email to
                                create or restart your membership
                            </h3>
                        </div>
                        <div className="LoginScreen_input">
                          <form>
                            <input type="email" placeholder="Email Adress" />
                            <button onClick = {()=>setSignIn(true)} className="LoginScreen_getStarted">Get Started</button>
                          </form>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Loginscreen
