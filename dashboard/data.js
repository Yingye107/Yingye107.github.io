// 營運儀表板的資料檔（示範用）
//
// 這一份是**虛構的示範資料**，用來展示「你的營運數字長成圖表會是什麼樣子」。
// 實際交付時，這個檔案由客戶的資料來源產生——POS 匯出、Excel、進銷存工具的備份 JSON
// 都可以，格式對上即可，儀表板本身不用改。
//
// 結構說明（客製時照這個欄位對應就好）：
//   period      期間文字
//   kpi[]       上方四塊大數字：label 標題／value 顯示值／delta 與上月的百分比變化
//   months[]    每月營收與毛利率：label 月份／revenue 營收／margin 毛利率(%)
//   channels[]  通路占比：name 通路名／value 本月營收
//   topItems[]  熱銷排行：name 品名／amount 銷售金額／margin 毛利率(%)
//   lowStock[]  補貨清單：name 品名／qty 現有量／safe 安全庫存
//   orders[]    最近訂單：date/customer/item/channel/amount/profit

const BIZ_DATA = {
  period: "2026 年 7 月",

  notice: "本頁為圖表呈現能力展示，所有數字均為虛構的示範資料，與任何真實商家無關。",

  kpi: [
    { label: "本月營收",   value: "$486,300", delta:  12.4 },
    { label: "訂單數",     value: "312 筆",   delta:   8.1 },
    { label: "客單價",     value: "$1,559",   delta:   4.0 },
    { label: "毛利率",     value: "34.8%",    delta:  -2.3 }
  ],

  months: [
    { label: "8月",  revenue: 312000, margin: 33.1 },
    { label: "9月",  revenue: 358000, margin: 34.6 },
    { label: "10月", revenue: 401000, margin: 35.2 },
    { label: "11月", revenue: 447000, margin: 36.8 },
    { label: "12月", revenue: 528000, margin: 38.4 },
    { label: "1月",  revenue: 396000, margin: 35.9 },
    { label: "2月",  revenue: 341000, margin: 34.2 },
    { label: "3月",  revenue: 389000, margin: 35.5 },
    { label: "4月",  revenue: 412000, margin: 36.1 },
    { label: "5月",  revenue: 438000, margin: 37.0 },
    { label: "6月",  revenue: 432700, margin: 37.1 },
    { label: "7月",  revenue: 486300, margin: 34.8 }
  ],

  channels: [
    { name: "門市",     value: 218800 },
    { name: "蝦皮",     value: 141000 },
    { name: "官網",     value:  82100 },
    { name: "電話訂購", value:  44400 }
  ],

  // 毛利率低於這個數就在圖上標成警示色
  lowMarginThreshold: 25,

  topItems: [
    { name: "不鏽鋼保溫瓶 500ml", amount: 78400, margin: 41.2 },
    { name: "無線藍牙耳機",       amount: 66200, margin: 18.5 },
    { name: "折疊收納箱 60L",     amount: 54900, margin: 38.7 },
    { name: "USB-C 快充線 2m",    amount: 43100, margin: 22.4 },
    { name: "陶瓷不沾鍋 28cm",    amount: 39600, margin: 44.0 },
    { name: "除濕袋（6入）",      amount: 31200, margin: 51.3 },
    { name: "行動電源 10000mAh",  amount: 28700, margin: 16.8 },
    { name: "矽膠密封保鮮盒組",   amount: 24500, margin: 46.5 }
  ],

  lowStock: [
    { name: "不鏽鋼保溫瓶 500ml", qty:  8, safe: 40 },
    { name: "除濕袋（6入）",      qty: 14, safe: 60 },
    { name: "陶瓷不沾鍋 28cm",    qty:  6, safe: 20 },
    { name: "折疊收納箱 60L",     qty: 19, safe: 35 },
    { name: "矽膠密封保鮮盒組",   qty: 22, safe: 30 }
  ],

  orders: [
    { date: "07-31", customer: "王小姐", item: "陶瓷不沾鍋 28cm × 2", channel: "門市",     amount: 3160, profit: 1390 },
    { date: "07-31", customer: "陳先生", item: "無線藍牙耳機",        channel: "蝦皮",     amount: 1290, profit:  239 },
    { date: "07-30", customer: "林太太", item: "除濕袋（6入）× 3",    channel: "官網",     amount: 1470, profit:  754 },
    { date: "07-30", customer: "張小姐", item: "不鏽鋼保溫瓶 × 2",    channel: "門市",     amount: 1780, profit:  733 },
    { date: "07-29", customer: "黃先生", item: "折疊收納箱 60L",      channel: "蝦皮",     amount:  890, profit:  344 },
    { date: "07-29", customer: "吳小姐", item: "USB-C 快充線 × 4",    channel: "官網",     amount:  960, profit:  215 },
    { date: "07-28", customer: "李先生", item: "行動電源 10000mAh",   channel: "電話訂購", amount:  790, profit:  133 },
    { date: "07-28", customer: "劉太太", item: "矽膠保鮮盒組 × 2",    channel: "門市",     amount: 1580, profit:  735 }
  ],

  footer:
    "這是「把您的營運數字變成一眼看懂的圖表」的示範，畫面上的數字為虛構的示範資料。" +
    "<br><strong>可以換成您自己的數字</strong>——銷售、庫存、來客、工時、任何您已經在記的東西。" +
    "資料可從 POS、Excel 或進銷存工具匯出後套進來，圖表本身不用改。" +
    "<br>想把自家數字做成這樣的頁面？歡迎洽談客製。"
};
