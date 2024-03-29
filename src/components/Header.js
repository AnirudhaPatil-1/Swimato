// React Imports
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

//Icons Import
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import IconWithRightLabel from "./IconWithRightLabel";

import useGetUser from "../utils/hooks/useGetUser";

// other config imports

// Component Header
const Header = () => {
	// init local state
	const [showDrawer, setShowDrawer] = useState(false);

	// const {user, signOutUser, deleteUser} = useGetUser();

	const navigate = useNavigate();

	// active style for header
	let activeStyle = {
		color: "#e67e22",
	};

	// return
	return (
		<div className="header">
			<Title/>
			<ul>
				<li>
					<NavLink
						to="/offers"
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							text="Offers"
							icon={<TbDiscount2 style={{ height: "24px", width: "24px" }} />}
						/>
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/help"
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							text="Help"
							icon={
								<IoHelpCircleOutline
									style={{ height: "22px", width: "22px" }}
								/>
							}
						/>
					</NavLink>
				</li>

				<li>
					<NavLink
						// to="/sign"
						// to={Object.keys(user).length === 0 && "/sign"}
						// style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						<IconWithRightLabel
							// isDrawerOpen={showDrawer}
							// onClick={() => setShowDrawer(!showDrawer)}
							// text={
							// 	Object.keys(user).length === 0
							// 	?"sign-in "
							// 	: user?.email?.slice(0, 5)
							// }
							//text={"Sign In"}
							icon={<FiUser style={{ height: "24px", width: "24px" }} />}
						/>
					</NavLink>
				</li>

				{/* {showDrawer && Object.keys(user).length !==0 && (
					<div
						style={{
							position: "absolute",
							top:60,
							right:450,
							backgroundColor: "orange",
							padding: 16,
							borderRadius: 4,
						}}
					>
						<p
							className="hover:cursor-pointer"
							onClick={() => navigate("/fav")}
						>
							Favourites
						</p>
						<p className="hover:cursor-pointer" onClick={()=>{signOutUser}}>
							Logout
						</p>
					</div>
				)} */}

				<li>
					<NavLink
						to="/cart"
						style={({isActive}) => (isActive? activeStyle: null)}
					>
						<IconWithRightLabel
							text="Cart"
							icon={
								<HiOutlineShoppingCart
									style={{height: "24px", width: "24px"}}	
								/>
							}
						/>
					</NavLink>
				</li>
			</ul>
			<button onClick={()=> {signOutUser()}}>
				{/* {Object.keys(user).length !== 0 && "Sign out"} */}
			</button>
		</div>
	);
};

const Title = () => {
	return (
		<h1>
			<NavLink to="/">
				<span style={{color: "#F97E22"}} className="font-bold text-2xl">
					Swi
					<span style={{color: "#E43744"}} className="font-bold text-2xl">
						mato
					</span>
				</span>
			</NavLink>
		</h1>
	);
};

export default Header;