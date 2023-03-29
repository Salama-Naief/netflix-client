import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Logout } from "../redux/actions/AuthAction";
import {
  MdSearch,
  MdNotifications,
  MdArrowDropDown,
  MdViewHeadline,
  MdClose,
} from "react-icons/md";
function Navbar({ user, Logout }) {
  const [dropedDowen, setDropedDowen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnim, setIsAnim] = useState({ visable: 0, postion: -200 });

  useEffect(() => {
    if (dropedDowen) {
      setIsAnim({ visable: 100, postion: 0 });
    } else {
      setIsAnim({ visable: 0, postion: -200 });
    }
  }, [dropedDowen]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  const dropAnim = () => {
    setDropedDowen(!dropedDowen);
  };
  return (
    <motion.div
      className={`rounded-b-md text-white py-2 fixed w-full z-40`}
      style={
        !isScrolled
          ? {
              background:
                "linear-gradient(to top,transparent 0%,rgb(0,0,0,0.4) 50%)",
            }
          : { background: "black" }
      }
    >
      <div className="md:px-10 px-2">
        <div className="flex items-center justify-between">
          <div className=" items-center flex ">
            <div className="uppercase items-center text-red-500 text-3xl md:text-4xl pr-8 font-bold cursor-pointer">
              netflex
            </div>
            <div className="md:flex hidden">
              <div className="flex items-center justify-between">
                <Link to="/" className="capitalize px-2 cursor-pointer">
                  homepage
                </Link>
                <Link to="/series" className="capitalize px-2 cursor-pointer">
                  series
                </Link>
                <Link to="/movies" className="capitalize px-2 cursor-pointer">
                  movies
                </Link>
                <div className="capitalize px-2 cursor-pointer">
                  new and popular
                </div>
                <Link
                  to="/dashboard/users"
                  className="capitalize px-2 cursor-pointer"
                >
                  my list
                </Link>
                {user?.isAdmin && (
                  <Link
                    to="/dashboard"
                    className="capitalize px-2 cursor-pointer"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="items-center justify-between hidden md:flex">
            <div className="mx-2 text-xl cursor-pointer">
              <MdSearch />
            </div>
            <div className="mx-2 cursor-pointer">KID</div>
            <div className="mx-2 text-xl cursor-pointer">
              <MdNotifications />
            </div>
            <div className="w-6 h-6 mx_4 overflow-hidden rounded-md cursor-pointer">
              <img
                src={user?.profilePic}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2 relative">
              <MdArrowDropDown
                onClick={() => dropAnim()}
                className="text-3xl cursor-pointer"
              />
              <motion.div
                animate={{ opacity: isAnim.visable, right: isAnim.postion }}
                transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
                className={` absolute top-10  px-4 py-5 rounded-lg bg-black `}
              >
                <div
                  onClick={() => setDropedDowen(false)}
                  className="cursor-pointer mb-1"
                >
                  Sittings
                </div>
                <div
                  onClick={() => setDropedDowen(false)}
                  className="pt-2 cursor-pointer"
                >
                  Logout
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative block md:hidden">
            <div
              onClick={() => dropAnim()}
              className="block md:hidden cursor-pointer text-3xl"
            >
              {" "}
              {!dropedDowen ? <MdViewHeadline /> : <MdClose />}{" "}
            </div>
            <motion.div
              animate={{ opacity: isAnim.visable, right: isAnim.postion }}
              transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
              className={`md:hidden w-40 absolute top:40 mt-3 z-10`}
            >
              <div className="bg-black py-3 px-2 rounded-lg">
                <div className="flex mb-4 mt-2 items-center justify-between px-3">
                  <div className="w-8 h-8 mx_4 overflow-hidden rounded-full cursor-pointer">
                    <img
                      src={user?.profilePic}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mx-2 text-xl cursor-pointer">
                    <MdSearch />
                  </div>
                </div>
                <Link
                  to="/"
                  onClick={() => setDropedDowen(false)}
                  className="block capitalize px-2 py-1 cursor-pointer"
                >
                  homepage
                </Link>
                <Link
                  to="/series"
                  onClick={() => setDropedDowen(false)}
                  className="block capitalize px-2 py-1 cursor-pointer"
                >
                  series
                </Link>
                <Link
                  to="/movies"
                  onClick={() => setDropedDowen(false)}
                  className="block capitalize px-2 py-1 cursor-pointer"
                >
                  movies
                </Link>
                <div
                  onClick={() => setDropedDowen(false)}
                  className="capitalize px-2 py-1 cursor-pointer"
                >
                  new and popular
                </div>
                <div
                  onClick={() => setDropedDowen(false)}
                  className="capitalize px-2 py-1 cursor-pointer"
                >
                  my list
                </div>
                {user?.isAdmin && (
                  <Link
                    to="/dashboard"
                    onClick={() => setDropedDowen(false)}
                    className="block capitalize px-2 py-1 cursor-pointer"
                  >
                    Dashboard
                  </Link>
                )}
                <div
                  onClick={() => {
                    setDropedDowen(false);
                    Logout();
                  }}
                  className="capitalize px-2 mb-2 mt-4 cursor-pointer"
                >
                  logout
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authState.user,
  };
};
export default connect(mapStateToProps, { Logout })(Navbar);
