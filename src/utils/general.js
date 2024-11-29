const formatCurrencyVND = (price) => {
  return price.toLocaleString("vi-VN") + " VNĐ";
};

export { formatCurrencyVND };
