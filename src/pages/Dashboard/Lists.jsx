import React, { useEffect, useState } from 'react';
import {GetLists,DeleteList} from '../../redux/actions/ListsAction';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
function MovieList({GetLists,list,DeleteList,msg_success,msg_fail}) {
  const [sellected,setSellected] = useState([]);
  const [reload,setReload] = useState(false);
  const [lists,setLists] =useState(list);
  const [sortedList,setSortedList] =useState(lists);

  useEffect(()=>{
    setSortedList(lists);
      
  },[reload,lists])
  useEffect(()=>{
    GetLists();
    
  },[])

  const sortByTitle=()=>{
  
    const newlist= list?.sort(function(a, b){
      const x =a.title.toLowerCase();
      const y = b.title.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setLists(newlist);
    setReload(!reload)
  }
  const sortByGenre=()=>{
    const newList= list.sort(function(a, b){
      const x = a.genre.toLowerCase();
      const y = b.genre.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setLists(newList);
    setReload(!reload)
  }
  const sortByType=()=>{
    const newList= list.sort(function(a, b){
      const x = a.type.toLowerCase();
      const y = b.type.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setLists(newList);
    setReload(!reload)
  }


  const deleteUser=(id)=>{
    setLists(list.fliter(l=>l._id!==id))
    DeleteList(id)
    setReload(!reload)
  }
  
  const handleSellect=(id,value)=>{
     let checkedItems=[];
     if(value===true){
    if(sellected.filter(items=>items.id ===id).length){
        checkedItems =sellected.filter(items=>items.id !==id);
        setSellected([...checkedItems,{id,value}])
      }else{
      setSellected([...sellected,{id,value}])

    }
  }else{
    checkedItems =sellected.filter(items=>items.id !==id);
    setSellected([...checkedItems])
  }
  }
 
  const handleChecked=(id)=>{
    const ch=sellected.find(items=>items.id ===id);
    if(ch){
         return ch.value     
    }else{
      return false
    }
  }
  const sellectAll=()=>{
    if(!sellected.length){
        
      list.forEach(l=>{
       
        setSellected(pre=>[...pre,{id:l._id,value:true}])
      })
    }else{
      setSellected([])
    }
  }

 /* const deleteAll=()=>{
    let dUser=[...list]  
    if(sellected.length){
      sellected.forEach(user=>{
        dUser=dUser.filter(item=>item._id !==user._id);
      })
      setListsdUser(dUser);
      setReload(!reload);
    }
    setSellected([]);
  }
  */
  return (
  <div className='pt-10'>
      <div className="p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Lists</div>
       {msg_fail&&  <div className="capitalize pb-2 text-lg text-red-600 font-semibold "> {msg_fail}</div>}
   {msg_success&&  <div className="capitalize pb-2 text-lg text-green-500 font-semibold "> {msg_success}</div>}
         <table className="w-full " style={{borderSpacing:"20px"}}>
           <thead>
             <tr className=" ">
                    <th className="py-2 "> 
                     <div className="flex items-center">
                       <input type="checkbox" className='cursor-pointer'  onChange={()=>sellectAll()} checked={sellected.length?true:false} />
                       
                     </div>
                     </th>
                    <th ><div onClick={()=>sortByTitle()} className='cursor-pointer'>List</div></th>
                    <th ><div onClick={()=>sortByGenre()} className='cursor-pointer'>Genre</div></th>
                    <th ><div onClick={()=>sortByType()} className='cursor-pointer'>Type</div> </th>
                    <th className="cursor-pointer ">
                      <div onClick={""}>{sellected.length? "Delete":"Action"}</div>
                    </th>
             </tr>
           </thead>
           <tbody>
            {sortedList?sortedList.map(list=>(
              <tr key={list._id} className="text-base font-normal">
               <th className='font-normal p-2'> 
                <div className='flex items-center'>
                    <input type="checkbox" className='cursor-pointer' checked={handleChecked(list._id)} onChange={((e)=>handleSellect(list._id,e.target.checked))} />
                    
                  </div>
               </th>
               <th className="font-normal p-2">
                  <div className="flex items-center">
                   
                    <div className="">
                        <div className="capitalize text-normal">{list.title}</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal p-2 text-gray-700">
                 <div>{list.genre}</div>
               </th>
              
               <th  className="font-normal p-2 text-gray-700">
                 <div>{ (list.type==="series")?"Series":"Movie"}</div>
               </th>

               <th  className="font-normal flex items-center px-2 py-4">
                 <Link to={{pathname:"/dashboard/updatelist/"+list._id,list:list}} className="bg-green-500 cursor-pointer w-fit px-2 rounded-lg text-white">
                   Edit
                   </Link>
                   <div onClick={()=>deleteUser(list._id)} className="text-2xl cursor-pointer w-fit px-2 rounded-lg text-red-500">
                     <MdDeleteOutline/>
                   </div>
               </th>
             </tr>
            )):"" 
            }
            </tbody>
         </table>
     </div>
  </div>
  </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    list:state.listState.list,
    msg_success:state.listState.msg_success,
    msg_fail:state.listState.msg_fail,
  }
}
export default connect(mapStateToProps,{GetLists,DeleteList})(MovieList)