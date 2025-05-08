**HTML_DOM**

# ✅ HTML DOM là gì?

## 🔹 Khái niệm

**HTML DOM (Document Object Model)** là **mô hình đối tượng tài liệu** được trình duyệt tạo ra từ mã HTML. Nó giúp **mô phỏng lại cấu trúc của một trang HTML dưới dạng cây đối tượng** (DOM Tree).

* Mỗi phần tử HTML (như thẻ `<p>`, `<a>`, v.v.), thuộc tính (như `id`, `class`), và nội dung văn bản sẽ trở thành một **node** (nút) trong cây DOM.
* DOM cho phép các ngôn ngữ lập trình như **JavaScript** tương tác với trang HTML một cách linh hoạt.

## 🔹 Cây DOM là gì?

* Là **cấu trúc dạng cây phân cấp** với `document` là gốc (root).
* Mỗi thẻ HTML là một **element node**.
* Văn bản bên trong thẻ là **text node**.
* Các thuộc tính là **attribute node**.

📌 Ví dụ HTML:

```html
<p id="greeting">Xin chào!</p>
```

📌 Thao tác bằng JavaScript:

```javascript
document.getElementById("greeting").textContent = "Chào bạn!";
```

Ở đây:

* `getElementById()` là phương thức DOM API giúp truy xuất phần tử.
* `textContent` là thuộc tính để thay đổi nội dung văn bản của node đó.

---

# ✅ Các thành phần trong HTML DOM

## 1. **Element (Phần tử)**

### 🔸 Là gì?

* Là đơn vị cơ bản trong HTML, được định nghĩa bởi **thẻ mở**, **nội dung**, và **thẻ đóng**.
* Có thể chứa: thuộc tính, văn bản hoặc các phần tử con.

### 🔸 Cấu trúc:

```html
<tagname attribute="giá_trị">Nội dung</tagname>
```

📌 Ví dụ:

```html
<a href="https://example.com" target="_blank">Click vào đây</a>
```

## 2. **Attribute (Thuộc tính)**

### 🔸 Là gì?

* Là các cặp `tên="giá trị"` nằm trong **thẻ mở** của element.
* Dùng để cấu hình hành vi, gán style, định danh hoặc liên kết.

📌 Ví dụ:

```html
<input type="text" placeholder="Nhập tên của bạn" />
```

### 🔸 Một số thuộc tính phổ biến:

| Attribute  | Mô tả                        | Áp dụng với           |
| ---------- | ---------------------------- | --------------------- |
| `id`       | Định danh duy nhất           | Mọi element           |
| `class`    | Gán lớp để áp dụng CSS       | Mọi element           |
| `href`     | Đường dẫn liên kết           | `<a>`                 |
| `src`      | Nguồn hình ảnh hoặc script   | `<img>`, `<script>`   |
| `alt`      | Văn bản thay thế khi ảnh lỗi | `<img>`               |
| `type`     | Kiểu input                   | `<input>`             |
| `value`    | Giá trị mặc định             | `<input>`             |
| `style`    | CSS nội dòng                 | Mọi element           |
| `disabled` | Vô hiệu hóa phần tử          | `<button>`, `<input>` |

## 3. **Text (Nội dung văn bản)**

### 🔸 Là gì?

* Là nội dung hiển thị giữa các thẻ HTML.
* Trong DOM, phần văn bản này là **text node**, khác biệt với element node.

📌 Ví dụ:

```html
<h1>Chào mừng đến với trang web!</h1>
```

→ `"Chào mừng đến với trang web!"` là một **text node** bên trong phần tử `<h1>`.

📌 Thao tác:

```javascript
document.querySelector("h1").textContent = "Tiêu đề mới!";
```

---

# ✅ Cấu trúc DOM Tree (Cây DOM)

Khi trình duyệt tải một trang HTML, nó phân tích cú pháp và tạo ra một cây DOM:

📌 Ví dụ HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang ví dụ</title>
  </head>
  <body>
    <h1 id="main-title">Chào bạn</h1>
    <p class="desc">Đây là đoạn văn bản.</p>
  </body>
</html>
```

📌 Biểu diễn dưới dạng cây:

```
document
└── html
    ├── head
    │   └── title ("Trang ví dụ")
    └── body
        ├── h1#main-title ("Chào bạn")
        └── p.desc ("Đây là đoạn văn bản.")
```

---

# ✅ Tổng kết

* **HTML DOM** là cấu trúc dữ liệu dạng cây mô phỏng trang HTML. Các thành phần trong HTML DOM gồm:

| Thành phần    | Mô tả                           | JavaScript truy cập                        |
| ------------- | ------------------------------- | ------------------------------------------ |
| **Element**   | Phần tử HTML                    | `document.querySelector("tag")`            |
| **Attribute** | Thông tin bổ sung trong element | `.getAttribute()`, `.setAttribute()`       |
| **Text**      | Nội dung văn bản trong element  | `.textContent`, `.innerText`, `.innerHTML` |

---
