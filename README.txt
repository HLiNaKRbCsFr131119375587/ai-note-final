
【AI 筆記幫手（安全部署版）使用說明】

這個專案包含前端與後端：
- index.html：前端頁面
- api/chat.js：安全地從伺服器端呼叫 OpenAI API
- vercel.json：告訴 Vercel 如何部署前端與後端

✅ 步驟：
1. 將整個資料夾上傳到 GitHub（建立一個新的 repository）
2. 前往 https://vercel.com 用 GitHub 登入，點「New Project」
3. 選剛剛的 repo → 點 Deploy
4. 點進你的專案 → Settings → Environment Variables：
   新增一組：
   名稱：`OPENAI_API_KEY`
   值：貼上你的 OpenAI 金鑰
5. 回首頁重新部署一次 → 網站完成

📢 這樣你的 API 金鑰就安全了，藏在後端不會被看到！
