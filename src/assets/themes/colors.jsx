const colors = {
  // Backgrounds
  background: '#3558E1',
  cardBackground: '#FFFFFF',
  border: '#E0E0E0',

  // Solid colors
  primary: '#3558E1', // blue
  secondary: '#4CAF50', // green
  price: '#E91E63',
  oldPrice: '#B0B0B0',
  textPrimary: '#333333',
  textSecondary: '#777777',

  // Functional with opacity
  grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
  blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
  darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
};

export default colors;
