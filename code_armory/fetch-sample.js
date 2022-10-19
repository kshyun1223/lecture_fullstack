/* 바코드 번호로 품목보고번호(reportnum) 얻기 */
const getRepotNo = async () => {
  const response = await fetch(
    'http://openapi.foodsafetykorea.go.kr/api/' +
      key.openAPIkey +
      '/C005/json/1/5/BAR_CD=' + //BAR_CD
      qrvalue,
    {
      method: 'GET',
    },
  );

  if (response.status === 200) {
    const responseJson = await response.json();
    return responseJson.C005.row[0];
  } else {
    return 0;
    // throw new Error('unable to get');
  }
};



/* 품목보고번호(reportnum)로 원재료명 얻기 */
const getRawmt = async (reportnum) => {
  const response = await fetch(
    'http://openapi.foodsafetykorea.go.kr/api/' +
      key.openAPIkey +
      '/C002/json/1/5/PRDLST_REPORT_NO=' + //PRDLST_REPORT_NO
      reportnum,
    {
      method: 'GET',
    },
  );

  if (response.status === 200) {
    const responseJson = await response.json();
    console.log('==원재료 정보==');
    console.log(responseJson.C002.row[0].RAWMTRL_NM);
    return responseJson.C002.row[0].RAWMTRL_NM;
  } else {
    return 0;
    // throw new Error('unable to get');
  }
};



/* 원재료명으로 비건상품 여부 판단하기 */
const getIsvegan = async (mtarr) => { // db fetch
  const is_vegan_result = [];
  for (var i = 0; i < mtarr.length; i++) {
    const response = await fetch(
      'http://192.168.0.4:3000/isvegan?' +
        new URLSearchParams({
          rmt_name: mtarr[i],
        }),
      {
        method: 'GET',
      },
    );
    if (response.status === 200) {
      const responseJson = await response.json();
      // console.log(responseJson.data.retrievedData);
      // return responseJson.data.retrievedData;
      is_vegan_result.push(responseJson.data.retrievedData);
    } else {
      throw new Error('unable to get isvegan data');
    }
  }
  return is_vegan_result;
};



/* 바코드 값이 인식된 후 실행되는 함수 getdataFUll는 위의 3가지 프로미스들(fetch는 Promise방식)을 연결해준다. */
const getdataFUll = async () => {
  setLoading(true);
  const report_numdata = await getRepotNo();
  const report_num = report_numdata.PRDLST_REPORT_NO;
  const food_name = report_numdata.PRDLST_NM;
  const raw_mt = await getRawmt(report_num);
  // setRawmt(raw_mt);

  /* 쉼표 기준으로 잘라서 배열 만들기 */
  var mt = raw_mt.split(',');
  var mtarr = [];

  for (var i = 0; i < mt.length; i++) {
    mtarr.push(mt[i]);
  }

  const is_vegan_result = await getIsvegan(mtarr);

  var is_vegan_flag = 1; //비건

  for (var i = 0; i < is_vegan_result.length; i++) {
    if (is_vegan_result[i].is_vegan == 0) {
      is_vegan_flag = 0; //논비건 셋팅
      break;
    }
  }

  setLoading(false);
  navigation.navigate('BarcodeResult', {
    report_num: report_num,
    raw_mt: is_vegan_result,
    is_vegan_flag: is_vegan_flag,
    food_name: food_name,
  });
};