/**
 * @prettier
 * @flow
 * */

import React from 'react';
import { requireNativeComponent, View } from 'react-native';

const WheelPickerView = requireNativeComponent('WheelPicker');

type IProps = {
  data: Array<string>;
  isCyclic?: boolean;
  selectedItemTextColor?: string;
  selectedItemTextSize?: number;
  indicatorWidth?: number;
  hideIndicator?: boolean;
  indicatorColor?: string;
  itemTextColor?: string;
  itemTextSize?: number;
  selectedItem?: number;
  backgroundColor?: string;
  onItemSelected?: (index: number) => void;
  disabled?: boolean;
};

export const WheelPicker = (props: IProps): React.ReactElement => {
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
        isCyclic={data.length > 2 ? isCyclic : false}
        onChange={onItemSelected}
      />
    </View>
  );
};
