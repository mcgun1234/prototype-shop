import { useState, useCallback } from 'react';
import AppStateContext from '../Contexts/AppStateContext';

const AppStateProvider = ({ children }) => {
  const [prototypes] = useState([
    {
      id: 'pp-01',
      title: 'Classic S HSH Dealer Select LTD',
      artist: 'Suhr',
      desc: 'Suhr와 Music Force의 야심작! Dealer Select Limited Run으로 새롭게 출시된 Classic S Model이 신규입고 되었습니다.',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/1/3284/650_95277.jpg',
      price: 4180,
    },
    {
      id: 'pp-02',
      title: 'Artcore Expressionist AHM90',
      artist: 'Ibanez',
      desc: '웅성하면서도 비음섞인 매력적인 울림을 지닌 최상급 Swamp Ash 바디에 적용된 Shoreline Gold 칼라가 정말 멋스럽습니다.',
      thumbnail: 'http://img.schoolmusic.co.kr/prod_picture/1/3234/650_41532.jpg',
      price: 849,
    },
    {
      id: 'pp-03',
      title: 'SR Mezzo SRMD200',
      artist: 'Ibanez',
      desc: 'Gotoh 510 2-Post Solid Saddles(Steel Block) 브릿지가 장착되어 탄탄하고 안정된 울림을 보장해주고 있습니다.',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/4/3235/650_42412.jpg',
      price: 389,
    },
    {
      id: 'pp-04',
      title: 'V1-OME (SB)',
      artist: 'Veelah',
      desc: ' 정석적인 1볼륨, 2톤, 5-Way Selector 사양에 Push/Pull 싱/험 전환이 가능하여 다채로운 톤메이킹이 가능합니다.',
      thumbnail: 'http://img.schoolmusic.co.kr/prod_picture/2/3041/650_80458.jpg',
      price: 408,
    },
    {
      id: 'pp-06',
      title: 'SS-70 (OP)',
      artist: 'Corona',
      desc: '풍성하면서도 비음섞인 매력적인 울림을 지닌 최상급 Swamp Ash 바디에 적용된 Shoreline Gold 칼라가 정말 멋스럽습니다.',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/3/1128/650_64497.jpg',
      price: 178,
    },
    {
      id: 'pp-07',
      title: 'Tube Craft CMV15',
      artist: 'Cort',
      desc: 'Suhr 특유의 날렵한 Original Head Shape은 언제보아도 돋보이며, Black Painted Headstock이 적용되어 더욱 세련된 외관을 자랑합니다.',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/20/2677/650_82616.jpg',
      price: 800,
    },
    {
      id: 'pp-08',
      title: 'Waza Air',
      artist: 'Boss',
      desc: '세련된 디자인과 안정성을 지닌 Suhr Deluxe Gig Bag이 부속합니다!',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/20/1473/650_25656.jpg',
      price: 599,
    },
    {
      id: 'pp-09',
      title: 'OC5 Octave',
      artist: 'Boss',
      desc: 'Tusq Nut을 장착하여 섬세한 고음부터 풍부한 저음까지 모든 Range의 사운드를 살려주고 있습니다.',
      thumbnail: 'http://img.schoolmusic.co.kr/prod_picture/22/13/650_89997.jpg',
      price: 199,
    },
    {
      id: 'pp-10',
      title: 'Power Tune',
      artist: 'JOYO',
      desc: '세련된 디자인과 안정성을 지닌 Suhr Deluxe Gig Bag이 부속합니다!',
      thumbnail:
        'http://img.schoolmusic.co.kr/prod_picture/90/2533/650_60055.jpg',
      price: 86,
    },
  ]);

  const [orders, setOrders] = useState([]);
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.id === id);
      if (finded === undefined) {
        return [...orders, { id, quantity : 1 }];
      }
      else {
        return orders.map((order) => {
          if (order.id === id) {
            return { id, quantity:order.quantity + 1 };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);

  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider value={{ prototypes, orders, addToOrder, remove, removeAll }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
