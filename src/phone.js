/**
 * validatePhone
 * @param num
 * @returns {boolean}
 */
const validatePhone = (num) => {
  return /^1[0-9][0-9]\d{8}$/.test(num);
};
/**
 * from 131696929113 --> 131****9113
 * @param str
 * @returns {*}
 */
const formatPhone = (str) => {
  if (!str) {
    return '';
  }
  if (validatePhone(str)) {
    return str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }
  return str || '';
};

const phone = {
  validate: validatePhone,
  safetyShow: formatPhone
};

export default phone;
