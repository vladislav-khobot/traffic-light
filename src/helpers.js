function getColorsCombination(colorRed, colorYellow, colorGreen) {
  const colorsCombination = {
    'false-false-false': { colorRed: true, colorYellow: false, colorGreen: false},
    'true-false-false': { colorRed: true, colorYellow: true, colorGreen: false},
    'true-true-false': { colorRed: false, colorYellow: false, colorGreen: true},
    'false-false-true': { colorRed: false, colorYellow: true, colorGreen: false},
    'false-true-false': { colorRed: true, colorYellow: false, colorGreen: false},
  }  

  return colorsCombination[`${colorRed}-${colorYellow}-${colorGreen}`];
}

export { getColorsCombination };