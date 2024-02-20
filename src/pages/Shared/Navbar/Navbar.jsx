import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-black text-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className="w-24 h-16" src="https://i.ibb.co/M1C0Mmx/IMG-20240220-155447-removebg-preview.png" alt="" />
                           </div>
                        
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a>Home</a></li>
                                <li><a>Product</a></li>
                            </ul>                           
                        </div>

                        <div className="mx-10">
                        <NavLink className='px-8'><a>login</a></NavLink>
                        <NavLink><a>logout</a></NavLink>
                        </div>

                    </div>
                    {/* Page content here */}
                    {/* Content write */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Home</a></li>
                        <li><a>Product</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;