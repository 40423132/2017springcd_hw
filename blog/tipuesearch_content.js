var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌","tags":"misc"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-ce-yan.html","title":"協同產品設計實習   期中測驗","text":"期中測驗 2.連桿路徑追蹤 郭力維 虎尾科大機械設計工程系40423132 - 期中-1 from 郭力維 on Vimeo . window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40423132\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/midterm6.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 6 倍 ratio = 6 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 3.行走機構繪製 虎尾科大機械設計工程系40423132 - 期中-2 from 郭力維 on Vimeo . 虎尾科大機械設計工程系40423132 - 期中-3 from 郭力維 on Vimeo . 4.零件展示 === window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/walk.stl', // data path path: './../viewer/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w6zuo-ye.html","title":"協同產品設計實習   W6作業","text":"四連桿和八連桿的組裝並導入V-REP 繪製並組裝八連桿 2017-04-06_04-20-59 from 郭力維 on Vimeo . 將四連桿和八連桿導入V-REP V-REP 四連趕 from 郭力維 on Vimeo . 郭力維 虎尾科大機械設計工程系40423132 - V-REP 八連桿 from 郭力維 on Vimeo .","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w5zuo-ye.html","title":"協同產品設計實習   W5作業","text":"單連桿的零件繪製和組裝並導入V-REP 單連桿的繪製和組裝 ONELINK-短桿 from 郭力維 on Vimeo . ONELINK-長桿 from 郭力維 on Vimeo . ONELINK-連接桿 from 郭力維 on Vimeo . ONELINK組裝 from 郭力維 on Vimeo . 導入V-REP 虎尾科大機械設計工程系40423132 - 單連桿V-REP from 郭力維 on Vimeo .","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w4zuo-ye.html","title":"協同產品設計實習   W4作業","text":"建立並開始經營組別的fossil倉儲 使用fossil sql -R cd.更改建立倉儲 使用ipconfig指令查詢IP並打入proxy設定內 更改fossil倉儲內自己的權限 建立wiki筆記補上每周進度 分組的倉儲","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w3zuo-ye.html","title":"協同產品設計實習   W3作業","text":"更新start程式並建立fossil倉儲 使用fossil init test.fossil建立倉儲 更改START內的程式後重新開啟 使用ipconfig指令查詢IP並打入proxy設定內 在瀏覽器打入https://IP即完成 修改start程式並建立fossil倉儲 from 郭力維 on Vimeo .","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w1zuo-ye.html","title":"協同產品設計實習   W1作業","text":"繪製四連桿零件 繪製四連桿零件和架構 連桿零件繪製 from 郭力維 on Vimeo . 四連桿架構 from 郭力維 on Vimeo .","tags":"HW"},{"url":"./xie-tong-chan-pin-she-ji-shi-xi-w2zuo-ye.html","title":"協同產品設計實習   W2作業","text":"組裝四連桿和修改stunnel的IP設定 1.組裝四連桿 2.修改stunnel的IP設定 將上週的零件組合 組合 from 郭力維 on Vimeo . 修改stunnel的IP設定 修改stunnel的IP設定 from 郭力維 on Vimeo .","tags":"HW"}]};