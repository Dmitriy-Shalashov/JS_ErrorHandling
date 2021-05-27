'use strict'
// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

function validateValue(base, exponent) {
   if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new TypeError('Input value is not a namber');
   }
   if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
      throw new RangeError('The argument must be a finite value');
   }
   console.log(pow(base, exponent));
   // тут console.log только что б видить работает ли функция pow
}

function pow(base, exponent) {
   if (exponent > 1) {
      return base * pow(base, exponent - 1);
   } else if (exponent < 0) {
      return 1 / (base * pow(base, Math.abs(exponent) - 1));
   } else if (exponent === 0) {
      return 1;
   } else {
      return base;
   }
}

const inputValue = [5, 2];

try {
   validateValue(inputValue[0], inputValue[1])
} catch (err) {
   if (err instanceof TypeError) {
      alert('Input a number please')
   }
   if (err instanceof RangeError) {
      alert('The argument must be a finite value');
   }
}

