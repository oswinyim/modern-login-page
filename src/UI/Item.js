import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <span className="material-icons icon">{props.iconName}</span>
      <input
        type={props.type}
        placeholder={props.placeholder}
        required={props?.required || false}
      ></input>
    </div>
  );
};

export default Item;
