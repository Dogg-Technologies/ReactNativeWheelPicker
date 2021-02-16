/**
 * @prettier
 * @flow
 * */

import React, { useState } from 'react';
import { Platform, View } from 'react-native';

import { Picker } from '@react-native-community/picker';

import { IProps } from './WheelPicker.props';
import { WheelPickerAndroid } from './WheelPickerAndroid';

export const WheelPicker = (props: IProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [selectedItem, setSelectedItem] = useState(props.selectedItem || 0);
  if (Platform.OS === 'ios') {
    const { data, onItemSelected, disabled } = props;
    if (!data || data.length === 0) return null;
    return (
      <View pointerEvents={disabled ? 'none' : 'auto'}>
        <Picker
          {...props}
          selectedValue={data[selectedItem]}
          onValueChange={(_, index): void => {
            if (onItemSelected) onItemSelected(index);
            setSelectedItem(index);
          }}
        >
          {data.map((i, index) => (
            <Picker.Item key={index} label={i} value={i} />
          ))}
        </Picker>
      </View>
    );
  }
  return <WheelPickerAndroid {...props} />;
};
