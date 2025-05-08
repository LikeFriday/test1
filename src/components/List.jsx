import { useState } from "react";
import "./css/List.css";
import Item from "./Item";

const List = ({todo, onUpdate, onDelete}) =>{
    const [search,setSearch]=useState("");  

    //검색창에 쓰면 글자가 써짐
    const onChangeSearch = (e)=>{
        setSearch(e.target.value);
    };

    //검색에 글자가 안 들어오면 그냥 원래 목록 보여줌
    //뭐가 들어오면 그 값들을 반영
    const getSearchResult = ()=>{
        return search === ""? todo : todo.filter((it)=> it.content.toLowerCase().includes(search.toLowerCase()));
    };

    return(
      <div className="List">
        <h4>Todo List 🌳</h4>
        <input className="searchbar"
         value={search}
         onChange={onChangeSearch}
         placeholder="검색어를 입력하세요" />
        <div className="todolist_wrapper">
        {
            // 검색어를 입력하면 그 단어가 들어간 목록 나옴
            getSearchResult().map((it) =>{
            return <Item {...it} key={it.id} onUpdate={onUpdate} onDelete={onDelete}/>
            })
        }
        </div>
      </div>
    );
}
export default List;