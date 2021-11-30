//상품 리스트 보여주기
// components/Prototypes.jsx

import useActions from "../../Hooks/useActions";
import usePrototypes from "../../Hooks/usePrototypes";

export default function Prototypes() {

  const prototypes = usePrototypes();
  const {addToOrder} = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc } = prototype; 

          const click = () => {
            addToOrder(id);
          };
          return (
        <div className="prototype" key={id}>
          <a href={"/detail/"+id} rel="noreferrer">
            <div style={{padding: "25px 0 33px 0"}}>
            <img style={{width: '100%'}} src={thumbnail} alt="" />
            </div>
          </a>
            <div className="prototype__body">
              <div className="prototype__title">
                <div className="btn btn--primary float--right" onClick={click} >
                  <i className="icon icon--plus" />
                </div>
                {title}
              </div>
              <p className="prototype__price">$ {price}</p>
              <p className="prototype__desc">{desc}</p>
            </div>
        
          </div>
          );
        })}

      </div>
    </main>
  );
}
