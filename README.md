# 🏠 مدير عروض العقارات

تطبيق ويب لإدارة عروض العقارات مع واجهة منفصلة للعملاء.

## خطوات الرفع على GitHub Pages

### 1. أنشئ Repository جديد على GitHub
اسمه مثلاً: `re-offers`

### 2. غيّر اسم الـ base في vite.config.js
افتح الملف وغيّر `re-offers` لاسم الـ repository تبعك:
```js
base: '/اسم-الريبو-هنا/',
```

### 3. ارفع الملفات
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/اسم_المستخدم/اسم_الريبو.git
git push -u origin main
```

### 4. فعّل GitHub Pages
- اذهب لـ Settings → Pages
- من Source اختر: **GitHub Actions**
- انتظر دقيقة وسيصير عندك رابط تلقائي

### 5. الرابط النهائي
```
https://اسم_المستخدم.github.io/اسم_الريبو/
```

ورابط العميل:
```
https://اسم_المستخدم.github.io/اسم_الريبو/?tab=3
```

## التشغيل محلياً
```bash
npm install
npm run dev
```

## ملاحظة مهمة
البيانات تُحفظ في `localStorage` — يعني كل جهاز يشوف بياناته فقط.
إذا تبي مشاركة البيانات بين أجهزة، تحتاج Backend (مثل Firebase أو Supabase).
