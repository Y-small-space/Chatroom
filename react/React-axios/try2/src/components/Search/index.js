import { useRef } from "react";

export default function Search() {
  const keyWorldElement = useRef(null);

  const search = () => {
    console.log(keyWorldElement.current.value);
    
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input ref={keyWorldElement} type="text" placeholder="enter the name you search" />
        &nbsp;
        <button onClick={search}>search</button>
      </div>
    </section>
  );
}
