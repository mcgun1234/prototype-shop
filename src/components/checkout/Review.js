import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import { useMemo } from 'react';
import useOrders from '../../Hooks/useOrders';
import usePrototypes from '../../Hooks/usePrototypes';

const addresses = ['Bundang-gu', 'Seongnam-si', 'Gyeonggi-do', '92631', 'KR'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Soohyun Choi' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-5702' },
  { name: 'Expiry date', detail: '09/23' },
];

export default function Review() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  console.log(orders);
  console.log(prototypes);

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {orders.map((order) => (
          <ListItem key={prototypes.find((p) => p.id === order.id).title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={prototypes.find((p) => p.id === order.id).title}
              secondary={'X ' + order.quantity}
            />
            <Typography variant="body2">
              {'$ ' + prototypes.find((p) => p.id === order.id).price * order.quantity}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Soohyun Choi</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
