import "./css/Item.css";

const Item = ({id, content, isDone, createDate, onUpdate, onDelete}) =>{
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    };//end onChangeCheckbox
    
    const onClickDeleteButton = ()=>{
        onDelete(id);
    };//end onClickDeleteButton

    return(
      <div className="Item">
        <div className="checkbox_col">
         <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} readOnly />
        </div>
        <div className="title_col">{content}</div>
        <div className="date_col">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="btn_col">
          <button onClick={onClickDeleteButton}>삭제</button>
        </div>
      </div>
    );
}
export default Item;