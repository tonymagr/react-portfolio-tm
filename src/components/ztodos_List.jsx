const List = (props) => {

    return props?.items?.length === 0 ?
      <h1>No items</h1>
      :
      <div>
        <ul>
        {
          props.items?.map((item, index) => <li key={index}>{item}</li>)
        }
        </ul>
      </div>
  };  
  
  export default List;