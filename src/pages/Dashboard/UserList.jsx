import React, { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { GetAllUsers, DeleteUser } from "../../redux/actions/UserAction";
import { connect } from "react-redux";

function UsersList({
  GetAllUsers,
  allUsers,
  DeleteUser,
  msg_success,
  msg_fail,
}) {
  const [sellected, setSellected] = useState([]);
  const [reload, setReload] = useState(false);
  const [usersData, setUsersData] = useState(allUsers);
  const [sortedUsers, setSortedUsers] = useState(usersData);

  useEffect(() => {
    setSortedUsers(usersData);
  }, [reload]);
  useEffect(() => {
    GetAllUsers();
  }, []);

  const sortByName = () => {
    const user = allUsers.sort(function (a, b) {
      const x = a.username.toLowerCase();
      const y = b.username.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setUsersData(user);
    setReload(!reload);
    console.log(usersData);
  };
  const sortByEmail = () => {
    const user = allUsers.sort(function (a, b) {
      const x = a.email.toLowerCase();
      const y = b.email.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    setUsersData(user);
    setReload(!reload);
  };

  const deleteUser = (id) => {
    setUsersData(usersData.filter((user) => user.id !== id));
    DeleteUser(id);
    setReload(!reload);
  };

  const handleSellect = (id, value) => {
    let checkedItems = [];
    if (value === true) {
      if (sellected.filter((items) => items.id === id).length) {
        checkedItems = sellected.filter((items) => items.id !== id);
        setSellected([...checkedItems, { id, value }]);
      } else {
        setSellected([...sellected, { id, value }]);
      }
    } else {
      checkedItems = sellected.filter((items) => items.id !== id);
      setSellected([...checkedItems]);
    }
  };

  const handleChecked = (id) => {
    const ch = sellected.find((items) => items.id === id);
    if (ch) {
      return ch.value;
    } else {
      return false;
    }
  };
  const sellectAll = () => {
    if (!sellected.length) {
      allUsers.forEach((user) => {
        setSellected((pre) => [...pre, { id: user.id, value: true }]);
      });
    } else {
      setSellected([]);
    }
  };

  const deleteAll = () => {
    let dUser = [...usersData];
    if (sellected.length) {
      sellected.forEach((user) => {
        dUser = dUser.filter((item) => item.id !== user.id);
      });
      setUsersData(dUser);
      setReload(!reload);
    }
    setSellected([]);
  };

  return (
    <div className="pt-10">
      <div className="p-4">
        <div className="p-4 box">
          <div className="capitalize pb-2 text-lg font-semibold ">
            {" "}
            Users List
          </div>
          {msg_fail && (
            <div className="capitalize pb-2 text-lg text-red-600 font-semibold ">
              {" "}
              {msg_fail}
            </div>
          )}
          {msg_success && (
            <div className="capitalize pb-2 text-lg text-green-500 font-semibold ">
              {" "}
              {msg_success}
            </div>
          )}
          <table className="w-full " style={{ borderSpacing: "20px" }}>
            <thead>
              <tr className="text-left ">
                <th className="py-2 ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      onChange={() => sellectAll()}
                      checked={sellected.length ? true : false}
                    />
                  </div>
                </th>
                <th>
                  <div
                    onClick={() => sortByName()}
                    className="cursor-pointer p-2"
                  >
                    Username
                  </div>
                </th>
                <th>
                  <div
                    onClick={() => sortByEmail()}
                    className="cursor-pointer p-2"
                  >
                    Email
                  </div>
                </th>
                <th className="p-2 ">Status</th>

                <th className="cursor-pointer p-2">
                  <div onClick={() => deleteAll()}>
                    {sellected.length ? "Delete" : "Action"}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers
                ? sortedUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="text-left text-base font-normal"
                    >
                      <th className="font-normal">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={handleChecked(user._id)}
                            onChange={(e) =>
                              handleSellect(user._id, e.target.checked)
                            }
                          />
                        </div>
                      </th>
                      <th className="font-normal p-2">
                        <div className="flex items-center">
                          <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                            <img
                              className="w-full h-full object-cover"
                              src={user.profilePic}
                              alt="na"
                            />
                          </div>
                          <div className="">
                            <div className="capitalize text-normal">
                              {user.username}
                            </div>
                          </div>
                        </div>
                      </th>
                      <th className="font-normal p-2 text-gray-700">
                        <div>{user.email}</div>
                      </th>
                      <th className="font-normal p-2 text-gray-700">
                        <div>{user?.isAdmin ? "Admin" : "user"}</div>
                      </th>

                      <th className="font-normal p-2 flex items-center py-4">
                        <Link
                          to={{
                            pathname: `/dashboard/user/${user._id}`,
                            user: user,
                          }}
                          className="bg-green-500 cursor-pointer w-fit px-2 rounded-lg text-white"
                        >
                          Edit
                        </Link>
                        <div
                          onClick={() => DeleteUser(user._id)}
                          className="text-2xl cursor-pointer w-fit px-2 rounded-lg text-red-500"
                        >
                          <MdDeleteOutline />
                        </div>
                      </th>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    allUsers: state.userState.allUsers,
    msg_success: state.userState.msg_success,
    msg_fail: state.userState.msg_fail,
  };
};
export default connect(mapStateToProps, { GetAllUsers, DeleteUser })(UsersList);
