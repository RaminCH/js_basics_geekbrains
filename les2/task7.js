// 7. *Сравнить null и 0. Попробуйте объяснить результат.

// == and >= are working differently -> >= converts null to the number, however == equals null to undefined
// therefore:

null >= 0 // true 
null == 0 // false 