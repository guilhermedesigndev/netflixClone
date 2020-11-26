import React from 'react';
import {Text, StyleSheet} from 'react-native';

import * as theme from '../../styles/theme';

export default function Typography({
  title,
  marginBottom,
  marginLeft,
  marginHorizontal,
  children,
}) {
  const textStyles = [
    styles.text,
    title && styles.title,
    marginBottom && styles.marginBottom,
    marginLeft && styles.marginLeft,
    marginHorizontal && styles.marginHorizontal,
  ];

  return <Text style={textStyles}>{children}</Text>;
}

const styles = StyleSheet.create({
  // Fonts Style
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.light,
    fontSize: theme.sizes.base,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: theme.sizes.h1,
  },
  // Margins
  marginBottom: {
    marginBottom: 10,
  },
  marginLeft: {
    marginLeft: 16,
  },
  marginHorizontal: {
    marginLeft: 16,
    marginRight: 16,
  },
});
