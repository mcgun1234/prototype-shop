// components/Orders.jsx
import { useMemo } from 'react';
import { Link } from 'react-router-dom'
import useOrders from '../../Hooks/useOrders';
import usePrototypes from '../../Hooks/usePrototypes';
import useActions from '../../Hooks/useActions';
import Button from '@mui/material/Button';

export default function Orders() {

  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();

  const totalPrice = useMemo(() => {
    return orders.map((order) => {
      const { id,quantity } = order;
      const prototype = prototypes.find((p) => p.id === id);
      return prototype.price * quantity;
    })
    .reduce((l , r) => l + r, 0);
  }, [orders, prototypes]);

  if (orders.length === 0) {
    return (
        <aside>
          <div className="empty">
            <div className="title">장바구니가 비어 있습니다</div>
            <div className="subtitle">상품을 추가하려면 + 버튼을 누르세요</div>
          </div>
        </aside>
      );
    }
  return (
    <aside>
      <div className="order">
        <div className="body">
          { orders.map(order => {
            const { id } = order;
            const prototype = prototypes.find(p => p.id === id);
            const click = () => {
              remove(id);
            }
            return <div className="item" key={id}>
              <div className="img">
                <img style={{width: '50px'}} src={prototype.thumbnail} alt="" />
              </div>
              <div className="content">
                <p className="title">
                  {prototype.title} x {order.quantity}
                </p>
              </div>
              <div className="action">
                <p className="price">
                  $ {prototype.price * order.quantity}
                </p>
                <button className="btn btn--link" onClick={click}>
                  <i className="icon icon--cross" />
                </button>
              </div>
            </div>;
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">총 금액</div>
            <div className="action">
              <div className="price">$ {totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete" />
            </button>
          </div>
          <Button component={Link} to="/order" className="btn btn--secondary" style={{ width: '100%', marginTop: 10 }}>주문하기</Button>
        </div>
      </div>
    </aside>
  );
}
  