import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { singIn } = useContext(AuthContext);

    const from = location.state?.from?.pathname|| "/";


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "user login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            navigate(from, {replace: true});

   }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-red-600 text-center">Login now!</h1>
                        <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br></br>excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200 border-red-500 border-2">

                        <form onSubmit={handleLogin} className="card-body rounded-xl">

                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="email" name="email" placeholder="email" required />
                                </label>

                            </div>

                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    <input type="password" name="password" placeholder="password" required />
                                </label>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="text-white bg-gradient-to-br from-black via-red-500 to-black
       hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-base px-4 py-2 w-full text-center me-2 mb-2 uppercase">login</button>
                            </div>
                        </form>
                        <p className="text-center mb-3">New Here? <Link to="/signUp" className="text-blue-700 font-semibold">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;