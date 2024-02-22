import { Link, NavLink } from "react-router-dom";
import ButtonStyle from "../ButtonStyle/ButtonStyle";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const NavOption = <>
        <li><NavLink to='/' >
            <ButtonStyle name="Home"></ButtonStyle>
        </NavLink></li>
        <li><NavLink to='product' >
            <ButtonStyle name="Product"></ButtonStyle>
        </NavLink></li>
        <li><NavLink to='myCart' >
            <ButtonStyle name="My Cart"></ButtonStyle>
        </NavLink></li>
    </>

    return (
        <div className="navbar h-[13vh] w-full bg-black max-w-screen-xl text-white">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-black text-white">
                        <div className="flex-none lg:hidden btn btn-ghost ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <Link to="/">
                                <img className="w-24 h-16" src="https://i.ibb.co/M1C0Mmx/IMG-20240220-155447-removebg-preview.png" alt="" />
                            </Link>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu-horizontal">
                                {/* Navbar menu content here */}
                                {NavOption}
                            </ul>
                        </div>

                        <div className="mx-10">
                            <NavLink to='/logIn'>
                                {
                                    user ? <>

                                        <ButtonStyle onClick={handleLogOut} name="logOut"></ButtonStyle>

                                    </> :
                                        <>

                                            <ButtonStyle name="logIn"></ButtonStyle>

                                        </>
                                }
                            </NavLink>



                        </div>

                    </div>
                    {/* Page content here */}
                    {/* Content write */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <div className="w-full gap-2">
                            {NavOption}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;