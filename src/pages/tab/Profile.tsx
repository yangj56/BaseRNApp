import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {update} from '../../reducers/coinStoreSlice';
import {MARKET} from '../../typing';

export const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const {market} = useTypedSelector(state => state.coinStore);
  const [value, setValue] = useState<MARKET>(market);
  const [items, setItems] = useState([
    {label: MARKET.BINANCE, value: MARKET.BINANCE},
    {label: MARKET.BITTREX, value: MARKET.BITTREX},
    {label: MARKET.COINBASE, value: MARKET.COINBASE},
    {label: MARKET.HUOBIGLOBAL, value: MARKET.HUOBIGLOBAL},
  ]);
  const dispatch = useAppDispatch();
  const updateMarket = (value: any) => {
    dispatch(update(value));
  };
  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={value => updateMarket(value)}
        setItems={setItems}
      />
      <Text>Profile Page</Text>
    </View>
  );
};
