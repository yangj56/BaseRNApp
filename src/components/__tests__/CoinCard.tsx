import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CoinData, MARKET} from '../../typing';
import {CoinCard} from '../CoinCard';

const coinData: CoinData = {
  exchange_id: MARKET.BINANCE,
  symbol: 'CRO-ETH',
  base_asset: 'CRO',
  quote_asset: 'ETH',
  price_unconverted: 0.00008355,
  price: 0.38386732966207343,
  change_24h: 13.534447615165094,
  spread: 0.35842293906810907,
  volume_24h: 130128.16729135069,
  status: 'recent',
  created_at: '2021-09-21T01:21:25',
  updated_at: '2021-11-13T07:15:00.584655',
};

test('form submits two answers', () => {
  const {getAllByA11yLabel} = render(<CoinCard coinData={coinData} />);
  const coinCard = getAllByA11yLabel('coin card');
  expect(coinCard).toHaveLength(1);
});
