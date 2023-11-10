export const CommonValidate = {
  validateEmpty: (input) => {
    if (!input) {
      return false;
    }
    return true;
  },
};

export const MenuValidate = {};

export const DateValidate = {
  validateNumber: (input) => {
    const splitNumber = input.toString().split('');
    return splitNumber.every((char) => !isNaN(char));
  },
  validateRange: (input) => {
    if (input < 1 || input > 31) {
      return false;
    }
    return true;
  },
};
