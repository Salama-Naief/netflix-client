import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from "../components/List";
import { GetRandumMovie } from "../redux/actions/MoveAction";
import { GetLists } from "../redux/actions/ListsAction";
import { axiosUrl } from "../utils/axiosUrl";

function Home({ type, user, GetLists, GetRandumMovie }) {
  const [genre, setGenre] = useState("");
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axiosUrl
      .get(
        `/lists/getlist${type ? "?type=" + type : ""}${
          genre ? "&genre=" + genre : ""
        }`
      )
      .then((res) => {
        setLists(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [genre, type]);

  return (
    <div className="bg-black w-full overflow-hidden">
      <Navbar />
      <Featured type={type} genre={genre} setGenre={setGenre} />
      {lists?.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authState,
    token: state.authState.token,
    lists: state.listState.list,
  };
};
export default connect(mapStateToProps, { GetLists, GetRandumMovie })(Home);
