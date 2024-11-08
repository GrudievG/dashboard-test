const formatNumberWithCommas = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatNumberWithCommas;