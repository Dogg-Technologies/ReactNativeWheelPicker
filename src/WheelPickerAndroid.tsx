import React from 'react';
import { View } from 'react-native';
import { WheelPickerView } from 'WheelPickerView';

import { IProps } from './WheelPicker.props';

export const WheelPickerAndroid: React.FC<IProps> = (props) => {
  const onItemSelected = (event: any) => {
    if (props.onItemSelected) {
      props.onItemSelected(event.nativeEvent.position);
    }
  };

  const { isCyclic = false, data, disabled } = props;
  return (
    <View pointerEvents={disabled ? 'none' : 'auto'}>
      <WheelPickerView
        style={{ width: 'auto', height: 150 }}
        {...props}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        isCyclic={data.length > 2 ? isCyclic : false}
        onChange={onItemSelected}
      />
    </View>
  );
};
