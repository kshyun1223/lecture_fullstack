function randomData(minInt, maxInt) { 
  const getRandomValue = Math.random() * (maxInt - minInt + 1) + minInt; return Math.floor(getRandomValue); 
  } function getRandomIntArray(count, minInt, maxInt) {
    const setArray = []; let handle = 0; while (handle < count) {
      let randomValue = randomData(minInt, maxInt); if(setArray.includes(randomValue) === false) {
        setArray.push(randomValue); handle++; 
      } 
    } 
    setArray.sort((a, b) => a - b);
    // console.log(setArray); 
    return setArray; 
  } 
  const setData = getRandomIntArray(3, 1, 20); console.log(setData);