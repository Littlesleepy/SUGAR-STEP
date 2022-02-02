// content 无人区
// start 到达判定点的时间 单位:帧 (每秒60帧)
// type 要调用的函数
// parameter 要携带的参数(长度(长条 生成第二个音符的毫秒数 帧差值*6 )、消失时间(连打 消失的毫秒数))
// direction 从那个方向  ↘1  ↗2  ↙3  ↖4 / →1  ←2  
// continuityG的 direction 只有1 2
// generateG 单击 continuityG 连击 StropG 长按 doubleG 双击

export let content = [
    {
        start:84,
        type:'StropG',
        parameter:500,
        direction:1
    },
    {
        start:227,
        type:'continuityG',
        direction:2
    },
    {
        start:300,
        type:'generateG',
        direction:2
    },
    {
        start:372,
        type:'generateG',
        direction:4
    },
    {
        start:400,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:510,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:582,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:602,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:654,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:723,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:802,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:869,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:942,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1012,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1086,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1147,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1217,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1233,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1251,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1265,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1280,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1299,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1317,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1337,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1357,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1374,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1393,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1411,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1429,
        type:'StropG',
        parameter:249,
        direction:1
    },
    {
        start:1429,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1445,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1462,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1481,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1499,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1518,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1537,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1553,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1571,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1585,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1605,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1622,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1641,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1657,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1674,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1694,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1712,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1720,
        type:'StropG',
        parameter:382,
        direction:3
    },
    {
        start:1782,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1803,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1823,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1842,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1859,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1875,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1891,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1908,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1926,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1945,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:1965,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:1987,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:2004,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:2020,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:2038,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:2055,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:2077,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:2097,
        type:'generateG',
        parameter:0,
        direction:2
    },
    {
        start:2119,
        type:'generateG',
        parameter:0,
        direction:4
    },
    {
        start:2280,
        type:'doubleG',
        parameter:0,
        direction:1
    },
    {
        start:2310,
        type:'doubleG',
        parameter:0,
        direction:3
    },
    {
        start:2324,
        type:'doubleG',
        parameter:0,
        direction:4
    },
   
]
// GabEd 
export let GabEd = [
    {
        start:118,
        type:'doubleG',
        parameter:500,
        direction:1
    },
    {
        start:166,
        type:'doubleG',
        parameter:500,
        direction:2
    },
    {
        start:212,
        type:'doubleG',
        parameter:500,
        direction:3
    },
    {
        start:274,
        type:'doubleG',
        parameter:500,
        direction:4
    },
    {
        start:440,
        type:'continuityG',
        parameter:1000,
        direction:1
    },
    {
        start:510,
        type:'generateG',
        parameter:1000,
        direction:4
    },
    {
        start:527,
        type:'generateG',
        parameter:1000,
        direction:2
    },
    {
        start:544,
        type:'generateG',
        parameter:1000,
        direction:4
    },
    {
        start:559,
        type:'generateG',
        parameter:1000,
        direction:2
    },
    {
        start:575,
        type:'generateG',
        parameter:1000,
        direction:4
    },
    {
        start:579,
        type:'StropG',
        parameter:149.4,
        direction:3
    },
    {
        start:618,
        type:'generateG',
        parameter:166,
        direction:2
    },
    {
        start:630,
        type:'generateG',
        parameter:166,
        direction:4
    },
    {
        start:635,
        type:'generateG',
        parameter:166,
        direction:2
    },
    {
        start:644,
        type:'generateG',
        parameter:166,
        direction:4
    },
    {
        start:658,
        type:'generateG',
        parameter:166,
        direction:2
    },
    {
        start:673,
        type:'generateG',
        parameter:166,
        direction:4
    },
    {
        start:696,
        type:'generateG',
        parameter:166,
        direction:2
    },
    {
        start:713,
        type:'generateG',
        parameter:166,
        direction:4
    },
    {
        start:720,
        type:'StropG',
        parameter:188,
        direction:1
    },
    {
        start:765,
        type:'generateG',
        parameter:188,
        direction:2
    },
    {
        start:765,
        type:'generateG',
        parameter:188,
        direction:4
    },
    {
        start:774,
        type:'generateG',
        parameter:188,
        direction:2
    },
    {
        start:780,
        type:'generateG',
        parameter:188,
        direction:4
    },
    {
        start:786,
        type:'generateG',
        parameter:188,
        direction:2
    },
    {
        start:798,
        type:'generateG',
        parameter:188,
        direction:4
    },
    {
        start:819,
        type:'generateG',
        parameter:188,
        direction:2
    },
    {
        start:828,
        type:'generateG',
        parameter:188,
        direction:4
    },
    {
        start:840,
        type:'generateG',
        parameter:188,
        direction:2
    },
    {
        start:860,
        type:'generateG',
        parameter:188,
        direction:4
    },
    {
        start:870,
        type:'StropG',
        parameter:178,
        direction:1
    },
    {
        start:904,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:916,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:923,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:929,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:946,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:960,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:977,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:984,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:994,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:1014,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:1028,
        type:'generateG',
        parameter:178,
        direction:2
    },
    {
        start:1039,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:1051,
        type:'generateG',
        parameter:178,
        direction:4
    },
    {
        start:1080,
        type:'StropG',
        parameter:480,
        direction:3
    },
    {
        start:1080,
        type:'StropG',
        parameter:648,
        direction:1
    },
    {
        start:1220,
        type:'StropG',
        parameter:720,
        direction:4
    },
    {
        start:1365,
        type:'StropG',
        parameter:702,
        direction:2
    },
    {
        start:1507,
        type:'StropG',
        parameter:858,
        direction:1
    },
    {
        start:1620,
        type:'generateG',
        parameter:858,
        direction:2
    },
    
    {
        start:1635,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1650,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1672,
        type:'generateG',
        parameter:858,
        direction:4
    },
    {
        start:1680,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1689,
        type:'generateG',
        parameter:858,
        direction:4
    },
    {
        start:1700,
        type:'generateG',
        parameter:858,
        direction:4
    },
    {
        start:1717,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1726,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1731,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1741,
        type:'generateG',
        parameter:858,
        direction:4
    },
    {
        start:1752,
        type:'generateG',
        parameter:858,
        direction:2
    },
    {
        start:1762,
        type:'generateG',
        parameter:858,
        direction:4
    },
    {
        start:1776,
        type:'StropG',
        parameter:144,
        direction:1
    },
    {
        start:1815,
        type:'generateG',
        parameter:144,
        direction:2
    },
    {
        start:1824,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1833,
        type:'generateG',
        parameter:144,
        direction:2
    },
    {
        start:1844,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1859,
        type:'generateG',
        parameter:144,
        direction:2
    },
    {
        start:1866,
        type:'generateG',
        parameter:144,
        direction:2
    },
    {
        start:1872,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1882,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1896,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1910,
        type:'generateG',
        parameter:144,
        direction:4
    },
    {
        start:1920,
        type:'StropG',
        parameter:180,
        direction:1
    },
    {
        start:1950,
        type:'generateG',
        parameter:180,
        direction:4
    },
    {
        start:1964,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:1978,
        type:'generateG',
        parameter:180,
        direction:4
    },
    {
        start:1995,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:2002,
        type:'generateG',
        parameter:180,
        direction:4
    },
    {
        start:2011,
        type:'generateG',
        parameter:180,
        direction:4
    },
    {
        start:2022,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:2030,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:2038,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:2047,
        type:'generateG',
        parameter:180,
        direction:2
    },
    {
        start:2067,
        type:'StropG',
        parameter:176,
        direction:1
    },
    {
        start:2103,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2112,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2122,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2130,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2136,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2148,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2155,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2171,
        type:'doubleG',
        parameter:176,
        direction:1
    },
    {
        start:2192,
        type:'doubleG',
        parameter:176,
        direction:2
    },
    {
        start:2208,
        type:'doubleG',
        parameter:176,
        direction:1
    },
    {
        start:2219,
        type:'doubleG',
        parameter:176,
        direction:2
    },
    {
        start:2236,
        type:'doubleG',
        parameter:176,
        direction:1
    },
    {
        start:2245,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2256,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2266,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2278,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2284,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2290,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2300,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2312,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2320,
        type:'generateG',
        parameter:176,
        direction:4
    },
    {
        start:2338,
        type:'generateG',
        parameter:176,
        direction:2
    },
    {
        start:2355,
        type:'StropG',
        parameter:156,
        direction:2
    },
    {
        start:2388,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2398,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2410,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2422,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2440,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2449,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2454,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2460,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2473,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2486,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2499,
        type:'StropG',
        parameter:133,
        direction:3
    },
    {
        start:2536,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2541,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2548,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2558,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2574,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2583,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2596,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2606,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2614,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2632,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2645,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2658,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2670,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2688,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2705,
        type:'generateG',
        parameter:156,
        direction:2
    },
    {
        start:2716,
        type:'generateG',
        parameter:156,
        direction:4
    },
    {
        start:2723,
        type:'StropG',
        parameter:398,
        direction:3
    },
]
// Genshin 
export let Genshin = [
    {
        start:156,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:195,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:230,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:265,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:303,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:339,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:375,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:411,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:440,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:480,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:516,
        type:'doubleG',
        parameter:500,
        direction:1
    },
    {
        start:552,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:584,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:620,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:659,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:698,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:728,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:764,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:802,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:832,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:868,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:903,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:937,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:972,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1007,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1068,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1105,
        type:'doubleG',
        parameter:500,
        direction:3
    },
    {
        start:1140,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1170,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1209,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1279,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1316,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1347,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1381,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1416,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1453,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1489,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1521,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1557,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1597,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1629,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1663,
        type:'generateG',
        parameter:500,
        direction:4
    },
   
    {
        start:1695,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1731,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1768,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1800,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1835,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1866,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1903,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:1933,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:1968,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:2002,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:2036,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:2072,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:2112,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:2173,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:2209,
        type:'generateG',
        parameter:500,
        direction:4
    },
    {
        start:2241,
        type:'generateG',
        parameter:500,
        direction:2
    },
    {
        start:2273,
        type:'generateG',
        parameter:500,
        direction:4
    },
    
    {
        start:2308,
        type:'StropG',
        parameter:552,
        direction:1
    },
]  

