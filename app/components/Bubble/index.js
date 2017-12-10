import React from 'react';
import { Text, View } from 'react-native';
import T from 'prop-types';
import uuid from 'uuid';
import s from './styles';
import { colors } from '../../styles';

const Bubble = ({
  userId,
  text,
}) => {
  const id = userId || 0;
  const align = id === 0 ? 'flex-end' : 'flex-start';
  const color = id === 0 ? colors.white : colors.black;
  const background = id === 0 ? colors.blue : colors.lightgrey;
  

  return (
    <View key={uuid.v1} style={[s.container, { alignItems: align }]}>
      <View style={[s.messageBubble, { backgroundColor: background }]}>
        <Text style={[s.text, { color }]}>
          {text}
        </Text>
      </View>
    </View>
  );
};

Bubble.propTypes = {
  userId: T.any,
  text: T.any,
};

export default Bubble;
