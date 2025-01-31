export const urlJumpOptions = [
  { label: '台北市', value: 1 },
  { label: '基隆市', value: 2 },
  { label: '新北市', value: 3 },
  { label: '新竹市', value: 4 },
  { label: '新竹縣', value: 5 },
  { label: '桃園市', value: 6 },
  { label: '苗栗縣', value: 7 },
  { label: '台中市', value: 8 },
  { label: '彰化縣', value: 10 },
  { label: '南投縣', value: 11 },
  { label: '嘉義市', value: 12 },
  { label: '嘉義縣', value: 13 },
  { label: '雲林縣', value: 14 },
  { label: '台南市', value: 15 },
  { label: '高雄市', value: 17 },
  { label: '屏東縣', value: 19 },
  { label: '宜蘭縣', value: 21 },
  { label: '台東縣', value: 22 },
  { label: '花蓮縣', value: 23 },
  { label: '澎湖縣', value: 24 },
  { label: '金門縣', value: 25 },
  { label: '連江縣', value: 26 }
];

export const kindOptions = [
  { label: '不限', value: 0 },
  { label: '整層住家', value: 1 },
  { label: '獨立套房', value: 2 },
  { label: '分租套房', value: 3 },
  { label: '雅房', value: 4 },
  { label: '車位', value: 8 },
  { label: '其他', value: 24 }
];

export const orderOptions = [
  { label: '時間', value: 'posttime' },
  { label: '價格', value: 'money' }
];

export const orderTypeByTimeOptions = [
  { label: '由新到舊', value: 'desc' },
  { label: '由舊到新', value: 'asc' }
];

export const orderTypeByMoneyOptions = [
  { label: '由高到低', value: 'desc' },
  { label: '由低到高', value: 'asc' }
];

export const rentPriceOptions = [
  { label: '不限', value: '' },
  { label: '5K - 10K', value: '2' },
  { label: '10K - 20K', value: '3' },
  { label: '20K - 30K', value: '4' },
  { label: '30K - 40K', value: '5' },
  { label: '40K - 60K', value: '6' },
  { label: '60K 以上', value: '7' }
];

export const sexOptions = [
  { label: '不限', value: 0 },
  { label: '男性', value: 1 },
  { label: '女性', value: 2 }
];

export const hasImageOptions = [
  { label: '不限', value: '' },
  { label: '是', value: 1 }
];

export const notCoverOptions = [
  { label: '否', value: '' },
  { label: '是', value: 1 }
];

export const roleOptions = [
  { label: '不限', value: '' },
  { label: '是', value: 1 }
];

export const shapeOptions = [
  { label: '公寓', value: '1' },
  { label: '電梯大樓', value: '2' },
  { label: '透天厝', value: '3' },
  { label: '別墅', value: '4' }
];

export const floorOptions = [
  { label: '不限', value: '' },
  { label: '1 樓', value: '0,1' },
  { label: '2 樓到 6 樓', value: '2,6' },
  { label: '6 樓到 12 樓', value: '6,12' },
  { label: '12 樓以上', value: '12,' }
];

export const areaOptions = [
  { label: '不限', value: '' },
  { label: '10 坪以下', value: '0,10' },
  { label: '10 坪到 20 坪', value: '10,20' },
  { label: '20 坪到 30 坪', value: '20,30' },
  { label: '40 坪到 50 坪', value: '40,50' },
  { label: '50 坪以上', value: '50,' }
];

export const supportOptions = [
  { label: '電視', value: 'tv' },
  { label: '冷氣', value: 'cold' },
  { label: '冰箱', value: 'icebox' },
  { label: '熱水器', value: 'hotwater' },
  { label: '天然瓦斯', value: 'naturalgas' },
  { label: '第四台', value: 'four' },
  { label: '網路', value: 'broadband' },
  { label: '洗衣機', value: 'washer' },
  { label: '床', value: 'bed' },
  { label: '衣櫃', value: 'wardrobe' },
  { label: '沙發', value: 'sofa' }
];

export const otherOptions = [
  { label: '附有車位', value: 'cartplace' },
  { label: '附有電梯', value: 'lift' },
  { label: '附有陽台', value: 'balcony_1' },
  { label: '可以開伙', value: 'cook' },
  { label: '可養寵物', value: 'pet' },
  { label: '鄰近捷運', value: 'tragoods' },
  { label: '可短期租賃', value: 'lease' }
];

export const sectionListOptions = [
  {
    city: '台北市',
    section: [
      { label: '中正區', value: '1' },
      { label: '大同區', value: '2' },
      { label: '中山區', value: '3' },
      { label: '松山區', value: '4' },
      { label: '大安區', value: '5' },
      { label: '萬華區', value: '6' },
      { label: '信義區', value: '7' },
      { label: '士林區', value: '8' },
      { label: '北投區', value: '9' },
      { label: '內湖區', value: '10' },
      { label: '南港區', value: '11' },
      { label: '文山區', value: '12' }
    ]
  },
  {
    city: '基隆市',
    section: [
      { label: '仁愛區', value: '13' },
      { label: '信義區', value: '14' },
      { label: '中正區', value: '15' },
      { label: '中山區', value: '16' },
      { label: '安樂區', value: '17' },
      { label: '暖暖區', value: '18' },
      { label: '七堵區', value: '19' }
    ]
  },
  {
    city: '新北市',
    section: [
      { label: '萬里區', value: '20' },
      { label: '金山區', value: '21' },
      { label: '板橋區', value: '26' },
      { label: '汐止區', value: '27' },
      { label: '深坑區', value: '28' },
      { label: '石碇區', value: '29' },
      { label: '瑞芳區', value: '30' },
      { label: '平溪區', value: '31' },
      { label: '雙溪區', value: '32' },
      { label: '貢寮區', value: '33' },
      { label: '新店區', value: '34' },
      { label: '坪林區', value: '35' },
      { label: '烏來區', value: '36' },
      { label: '永和區', value: '37' },
      { label: '中和區', value: '38' },
      { label: '土城區', value: '39' },
      { label: '三峽區', value: '40' },
      { label: '樹林區', value: '41' },
      { label: '鶯歌區', value: '42' },
      { label: '三重區', value: '43' },
      { label: '新莊區', value: '44' },
      { label: '泰山區', value: '45' },
      { label: '林口區', value: '46' },
      { label: '蘆洲區', value: '47' },
      { label: '五股區', value: '48' },
      { label: '八里區', value: '49' },
      { label: '淡水區', value: '50' },
      { label: '三芝區', value: '51' },
      { label: '石門區', value: '52' }
    ]
  },
  {
    city: '新竹市',
    section: [
      { label: '香山區', value: '370' },
      { label: '東區', value: '371' },
      { label: '北區', value: '372' }
    ]
  },
  {
    city: '新竹縣',
    section: [
      { label: '竹北市', value: '54' },
      { label: '湖口鄉', value: '55' },
      { label: '新豐鄉', value: '56' },
      { label: '新埔鎮', value: '57' },
      { label: '關西鎮', value: '58' },
      { label: '芎林鄉', value: '59' },
      { label: '寶山鄉', value: '60' },
      { label: '竹東鎮', value: '61' },
      { label: '五峰鄉', value: '62' },
      { label: '橫山鄉', value: '63' },
      { label: '尖石鄉', value: '64' },
      { label: '北埔鄉', value: '65' },
      { label: '峨嵋鄉', value: '66' }
    ]
  },
  {
    city: '桃園市',
    section: [
      { label: '中壢區', value: '67' },
      { label: '平鎮區', value: '68' },
      { label: '龍潭區', value: '69' },
      { label: '楊梅區', value: '70' },
      { label: '新屋區', value: '71' },
      { label: '觀音區', value: '72' },
      { label: '桃園區', value: '73' },
      { label: '龜山區', value: '74' },
      { label: '八德區', value: '75' },
      { label: '大溪區', value: '76' },
      { label: '復興區', value: '77' },
      { label: '大園區', value: '78' },
      { label: '蘆竹區', value: '79' }
    ]
  },
  {
    city: '苗栗縣',
    section: [
      { label: '竹南鎮', value: '80' },
      { label: '頭份市', value: '81' },
      { label: '三灣鄉', value: '82' },
      { label: '南庄鄉', value: '83' },
      { label: '獅潭鄉', value: '84' },
      { label: '後龍鎮', value: '85' },
      { label: '通霄鎮', value: '86' },
      { label: '苑裡鎮', value: '87' },
      { label: '苗栗市', value: '88' },
      { label: '造橋鄉', value: '89' },
      { label: '頭屋鄉', value: '90' },
      { label: '公館鄉', value: '91' },
      { label: '大湖鄉', value: '92' },
      { label: '泰安鄉', value: '93' },
      { label: '銅鑼鄉', value: '94' },
      { label: '三義鄉', value: '95' },
      { label: '西湖鄉', value: '96' },
      { label: '卓蘭鎮', value: '97' }
    ]
  },
  {
    city: '台中市',
    section: [
      { label: '中區', value: '98' },
      { label: '東區', value: '99' },
      { label: '南區', value: '100' },
      { label: '西區', value: '101' },
      { label: '北區', value: '102' },
      { label: '北屯區', value: '103' },
      { label: '西屯區', value: '104' },
      { label: '南屯區', value: '105' },
      { label: '太平區', value: '106' },
      { label: '大里區', value: '107' },
      { label: '霧峰區', value: '108' },
      { label: '烏日區', value: '109' },
      { label: '豐原區', value: '110' },
      { label: '后里區', value: '111' },
      { label: '石岡區', value: '112' },
      { label: '東勢區', value: '113' },
      { label: '和平區', value: '114' },
      { label: '新社區', value: '115' },
      { label: '潭子區', value: '116' },
      { label: '大雅區', value: '117' },
      { label: '神岡區', value: '118' },
      { label: '大肚區', value: '119' },
      { label: '沙鹿區', value: '120' },
      { label: '龍井區', value: '121' },
      { label: '梧棲區', value: '122' },
      { label: '清水區', value: '123' },
      { label: '大甲區', value: '124' },
      { label: '外埔區', value: '125' },
      { label: '大安區', value: '126' }
    ]
  },
  {
    city: 'Not Exist',
    section: []
  },
  {
    city: '彰化縣',
    section: [
      { label: '彰化市', value: '127' },
      { label: '芬園鄉', value: '128' },
      { label: '花壇鄉', value: '129' },
      { label: '秀水鄉', value: '130' },
      { label: '鹿港鎮', value: '131' },
      { label: '福興鄉', value: '132' },
      { label: '線西鄉', value: '133' },
      { label: '和美鎮', value: '134' },
      { label: '伸港鄉', value: '135' },
      { label: '員林市', value: '136' },
      { label: '社頭鄉', value: '137' },
      { label: '永靖鄉', value: '138' },
      { label: '埔心鄉', value: '139' },
      { label: '溪湖鎮', value: '140' },
      { label: '大村鄉', value: '141' },
      { label: '埔鹽鄉', value: '142' },
      { label: '田中鎮', value: '143' },
      { label: '北斗鎮', value: '144' },
      { label: '田尾鄉', value: '145' },
      { label: '埤頭鄉', value: '146' },
      { label: '溪州鄉', value: '147' },
      { label: '竹塘鄉', value: '148' },
      { label: '二林鎮', value: '149' },
      { label: '大城鄉', value: '150' },
      { label: '芳苑鄉', value: '151' },
      { label: '二水鄉', value: '152' },
      { label: '二水鄉', value: '152' }
    ]
  },
  {
    city: '南投縣',
    section: [
      { label: '南投市', value: '153' },
      { label: '中寮鄉', value: '154' },
      { label: '草屯鎮', value: '155' },
      { label: '國姓鄉', value: '156' },
      { label: '埔里鎮', value: '157' },
      { label: '仁愛鄉', value: '158' },
      { label: '名間鄉', value: '159' },
      { label: '集集鎮', value: '160' },
      { label: '水里鄉', value: '161' },
      { label: '魚池鄉', value: '162' },
      { label: '信義鄉', value: '163' },
      { label: '竹山鎮', value: '164' },
      { label: '鹿谷鄉', value: '165' }
    ]
  },
  {
    city: '嘉義市',
    section: [
      { label: '西區', value: '373' },
      { label: '東區', value: '374' }
    ]
  },
  {
    city: '嘉義縣',
    section: [
      { label: '番路鄉', value: '167' },
      { label: '梅山鄉', value: '168' },
      { label: '竹崎鄉', value: '169' },
      { label: '阿里山鄉', value: '170' },
      { label: '中埔鄉', value: '171' },
      { label: '大埔鄉', value: '172' },
      { label: '水上鄉', value: '173' },
      { label: '鹿草鄉', value: '174' },
      { label: '太保市', value: '175' },
      { label: '朴子市', value: '176' },
      { label: '東石鄉', value: '177' },
      { label: '六腳鄉', value: '178' },
      { label: '新港鄉', value: '179' },
      { label: '民雄鄉', value: '180' },
      { label: '大林鎮', value: '181' },
      { label: '溪口鄉', value: '182' },
      { label: '義竹鄉', value: '183' }
    ]
  },
  {
    city: '雲林縣',
    section: [
      { label: '斗南鎮', value: '185' },
      { label: '大埤鄉', value: '186' },
      { label: '虎尾鎮', value: '187' },
      { label: '土庫鎮', value: '188' },
      { label: '褒忠鄉', value: '189' },
      { label: '東勢鄉', value: '190' },
      { label: '臺西鄉', value: '191' },
      { label: '崙背鄉', value: '192' },
      { label: '麥寮鄉', value: '193' },
      { label: '斗六市', value: '194' },
      { label: '林內鄉', value: '195' },
      { label: '古坑鄉', value: '196' },
      { label: '莿桐鄉', value: '197' },
      { label: '西螺鎮', value: '198' },
      { label: '二崙鄉', value: '199' },
      { label: '北港鎮', value: '200' },
      { label: '水林鄉', value: '201' },
      { label: '口湖鄉', value: '202' },
      { label: '四湖鄉', value: '203' },
      { label: '元長鄉', value: '204' }
    ]
  },
  {
    city: '台南市',
    section: [
      { label: '東區', value: '206' },
      { label: '南區', value: '207' },
      { label: '中西區', value: '208' },
      { label: '北區', value: '209' },
      { label: '安平區', value: '210' },
      { label: '安南區', value: '211' },
      { label: '永康區', value: '212' },
      { label: '歸仁區', value: '213' },
      { label: '新化區', value: '214' },
      { label: '左鎮區', value: '215' },
      { label: '玉井區', value: '216' },
      { label: '楠西區', value: '217' },
      { label: '南化區', value: '218' },
      { label: '仁德區', value: '219' },
      { label: '關廟區', value: '220' },
      { label: '龍崎區', value: '221' },
      { label: '官田區', value: '222' },
      { label: '麻豆區', value: '223' },
      { label: '佳里區', value: '224' },
      { label: '西港區', value: '225' },
      { label: '七股區', value: '226' },
      { label: '將軍區', value: '227' },
      { label: '學甲區', value: '228' },
      { label: '北門區', value: '229' },
      { label: '新營區', value: '230' },
      { label: '後壁區', value: '231' },
      { label: '白河區', value: '232' },
      { label: '東山區', value: '233' },
      { label: '六甲區', value: '234' },
      { label: '下營區', value: '235' },
      { label: '柳營區', value: '236' },
      { label: '鹽水區', value: '237' },
      { label: '善化區', value: '238' },
      { label: '大內區', value: '239' },
      { label: '山上區', value: '240' },
      { label: '新市區', value: '241' },
      { label: '安定區', value: '242' }
    ]
  },
  {
    city: 'Not Exist',
    section: []
  },
  {
    city: '高雄市',
    section: [
      { label: '新興區', value: '243' },
      { label: '前金區', value: '244' },
      { label: '苓雅區', value: '245' },
      { label: '鹽埕區', value: '246' },
      { label: '鼓山區', value: '247' },
      { label: '旗津區', value: '248' },
      { label: '前鎮區', value: '249' },
      { label: '三民區', value: '250' },
      { label: '楠梓區', value: '251' },
      { label: '小港區', value: '252' },
      { label: '左營區', value: '253' },
      { label: '仁武區', value: '254' },
      { label: '大社區', value: '255' },
      { label: '', value: '256' },
      { label: '', value: '257' },
      { label: '岡山區', value: '258' },
      { label: '路竹區', value: '259' },
      { label: '阿蓮區', value: '260' },
      { label: '田寮區', value: '261' },
      { label: '燕巢區', value: '262' },
      { label: '橋頭區', value: '263' },
      { label: '梓官區', value: '264' },
      { label: '彌陀區', value: '265' },
      { label: '永安區', value: '266' },
      { label: '湖內區', value: '267' },
      { label: '鳳山區', value: '268' },
      { label: '大寮區', value: '269' },
      { label: '林園區', value: '270' },
      { label: '鳥松區', value: '271' },
      { label: '大樹區', value: '272' },
      { label: '旗山區', value: '273' },
      { label: '美濃區', value: '274' },
      { label: '六龜區', value: '275' },
      { label: '內門區', value: '276' },
      { label: '杉林區', value: '277' },
      { label: '甲仙區', value: '278' },
      { label: '桃源區', value: '279' },
      { label: '那瑪夏區', value: '280' },
      { label: '茂林區', value: '281' },
      { label: '茄萣區', value: '282' }
    ]
  },
  {
    city: 'Not Exist',
    section: []
  },
  {
    city: '屏東縣',
    section: [
      { label: '屏東市', value: '295' },
      { label: '三地門鄉', value: '296' },
      { label: '霧臺鄉', value: '297' },
      { label: '瑪家鄉', value: '298' },
      { label: '九如鄉', value: '299' },
      { label: '里港鄉', value: '300' },
      { label: '高樹鄉', value: '301' },
      { label: '鹽埔鄉', value: '302' },
      { label: '長治鄉', value: '303' },
      { label: '麟洛鄉', value: '304' },
      { label: '竹田鄉', value: '305' },
      { label: '內埔鄉', value: '306' },
      { label: '萬丹鄉', value: '307' },
      { label: '潮州鎮', value: '308' },
      { label: '泰武鄉', value: '309' },
      { label: '來義鄉', value: '310' },
      { label: '萬巒鄉', value: '311' },
      { label: '崁頂鄉', value: '312' },
      { label: '新埤鄉', value: '313' },
      { label: '南州鄉', value: '314' },
      { label: '林邊鄉', value: '315' },
      { label: '東港鎮', value: '316' },
      { label: '琉球鄉', value: '317' },
      { label: '佳冬鄉', value: '318' },
      { label: '新園鄉', value: '319' },
      { label: '枋寮鄉', value: '320' },
      { label: '枋山鄉', value: '321' },
      { label: '春日鄉', value: '322' },
      { label: '獅子鄉', value: '323' },
      { label: '車城鄉', value: '324' },
      { label: '牡丹鄉', value: '325' },
      { label: '恆春鎮', value: '326' },
      { label: '滿州鄉', value: '327' }
    ]
  },
  {
    city: 'Not Exist',
    section: []
  },
  {
    city: '宜蘭縣',
    section: [
      { label: '宜蘭市', value: '328' },
      { label: '頭城鎮', value: '329' },
      { label: '礁溪鄉', value: '330' },
      { label: '壯圍鄉', value: '331' },
      { label: '員山鄉', value: '332' },
      { label: '羅東鎮', value: '333' },
      { label: '三星鄉', value: '334' },
      { label: '大同鄉', value: '335' },
      { label: '五結鄉', value: '336' },
      { label: '冬山鄉', value: '337' },
      { label: '蘇澳鎮', value: '338' },
      { label: '南澳鄉', value: '339' }
    ]
  },
  {
    city: '台東縣',
    section: [
      { label: '台東市', value: '341' },
      { label: '綠島鄉', value: '342' },
      { label: '蘭嶼鄉', value: '343' },
      { label: '延平鄉', value: '344' },
      { label: '卑南鄉', value: '345' },
      { label: '鹿野鄉', value: '346' },
      { label: '關山鎮', value: '347' },
      { label: '海端鄉', value: '348' },
      { label: '池上鄉', value: '349' },
      { label: '東河鄉', value: '350' },
      { label: '成功鎮', value: '351' },
      { label: '長濱鄉', value: '352' },
      { label: '太麻里鄉', value: '353' },
      { label: '金峰鄉', value: '354' },
      { label: '大武鄉', value: '355' },
      { label: '達仁鄉', value: '356' }
    ]
  },
  {
    city: '花蓮縣',
    section: [
      { label: '花蓮市', value: '357' },
      { label: '新城鄉', value: '358' },
      { label: '秀林鄉', value: '359' },
      { label: '吉安鄉', value: '360' },
      { label: '壽豐鄉', value: '361' },
      { label: '鳳林鎮', value: '362' },
      { label: '光復鄉', value: '363' },
      { label: '豐濱鄉', value: '364' },
      { label: '瑞穗鄉', value: '365' },
      { label: '萬榮鄉', value: '366' },
      { label: '玉里鎮', value: '367' },
      { label: '卓溪鄉', value: '368' },
      { label: '富里鄉', value: '369' }
    ]
  },
  {
    city: '澎湖縣',
    section: [
      { label: '馬公市', value: '283' },
      { label: '西嶼鄉', value: '284' },
      { label: '望安鄉', value: '285' },
      { label: '七美鄉', value: '286' },
      { label: '白沙鄉', value: '287' },
      { label: '湖西鄉', value: '288' }
    ]
  },
  {
    city: '金門縣',
    section: [
      { label: '金沙鎮', value: '289' },
      { label: '金湖鎮', value: '290' },
      { label: '金寧鄉', value: '291' },
      { label: '金城鎮', value: '292' },
      { label: '烈嶼鄉', value: '293' },
      { label: '烏坵鄉', value: '294' }
    ]
  },
  {
    city: '連江縣',
    section: [
      { label: '南竿鄉', value: '22' },
      { label: '北竿鄉', value: '23' },
      { label: '莒光鄉', value: '24' },
      { label: '東引鄉', value: '25' },
      { label: '東沙', value: '256' },
      { label: '南沙', value: '257' }
    ]
  }
];
