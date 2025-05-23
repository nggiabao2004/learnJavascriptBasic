
# DOM Events - Sự kiện trong JavaScript

## 1. Giới thiệu về DOM Events

DOM Events là các hành động có thể được phát hiện bởi JavaScript, thường được kích hoạt bởi tương tác của người dùng (như nhấp chuột, nhập bàn phím, tải trang) hoặc bởi trình duyệt.

Mỗi sự kiện DOM đều có thể được "nghe" (listen) và xử lý (handle) thông qua các kỹ thuật như:
- HTML Event Attributes
- DOM Property Events
- `addEventListener()`

---

## 2. Các cách gán sự kiện

### Cách 1: HTML Event Attributes (Trực tiếp trong HTML)

```html
<button onclick="alert('Clicked!')">Click me</button>
```

### Cách 2: DOM Property Events (Gán qua JavaScript)

```javascript
const btn = document.getElementById("myBtn");
btn.onclick = function() {
  alert("Button clicked!");
};
```

### Cách 3: `addEventListener()` (Khuyên dùng)

```javascript
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 3. Danh sách đầy đủ các DOM Events

### 3.1. Mouse Events

| Tên sự kiện       | Mô tả                                       |
|-------------------|---------------------------------------------|
| `click`           | Nhấp chuột vào phần tử                      |
| `dblclick`        | Nhấp đôi chuột vào phần tử                  |
| `mousedown`       | Nhấn nút chuột xuống                        |
| `mouseup`         | Nhả nút chuột ra                            |
| `mousemove`       | Di chuyển chuột                             |
| `mouseover`       | Di chuột vào phần tử                        |
| `mouseout`        | Di chuột ra khỏi phần tử                    |
| `mouseenter`      | Di chuột vào phần tử (không lan truyền)     |
| `mouseleave`      | Di chuột rời phần tử (không lan truyền)     |
| `contextmenu`     | Mở menu chuột phải                          |

### 3.2. Keyboard Events

| Tên sự kiện   | Mô tả                              |
|---------------|------------------------------------|
| `keydown`     | Nhấn một phím xuống                |
| `keyup`       | Nhả một phím ra                    |
| `keypress`    | (Đã lỗi thời) Nhấn phím in ra ký tự|

### 3.3. Form Events

| Tên sự kiện   | Mô tả                                   |
|---------------|-----------------------------------------|
| `submit`      | Khi form được gửi                       |
| `change`      | Khi giá trị input, select thay đổi      |
| `input`       | Khi giá trị thay đổi (từng ký tự)       |
| `focus`       | Khi phần tử được focus vào              |
| `blur`        | Khi phần tử mất focus                   |
| `reset`       | Khi form được reset                     |
| `invalid`     | Khi field form không hợp lệ             |

### 3.4. Window Events

| Tên sự kiện       | Mô tả                                          |
|-------------------|------------------------------------------------|
| `load`            | Khi tài nguyên (trang, hình ảnh) tải xong      |
| `unload`          | Khi người dùng rời khỏi trang                  |
| `resize`          | Khi cửa sổ trình duyệt được thay đổi kích thước|
| `scroll`          | Khi trang được cuộn                            |
| `beforeunload`    | Cảnh báo người dùng khi chuẩn bị rời trang     |

### 3.5. Clipboard Events

| Tên sự kiện | Mô tả                        |
|-------------|------------------------------|
| `copy`      | Khi người dùng sao chép      |
| `cut`       | Khi người dùng cắt           |
| `paste`     | Khi người dùng dán nội dung  |

### 3.6. Drag & Drop Events

| Tên sự kiện    | Mô tả                           |
|----------------|---------------------------------|
| `drag`         | Khi phần tử đang bị kéo         |
| `dragstart`    | Bắt đầu kéo phần tử             |
| `dragend`      | Kết thúc kéo                    |
| `dragenter`    | Phần tử kéo vào vùng khác       |
| `dragover`     | Phần tử đang nằm trên vùng drop |
| `dragleave`    | Rời khỏi vùng drop              |
| `drop`         | Thả phần tử vào vùng drop       |

---

## 4. Ví dụ sử dụng

### Ví dụ 1: Hiển thị thông báo khi nhấn nút

```html
<button id="btn">Click me</button>

<script>
  document.getElementById("btn").addEventListener("click", function() {
    alert("Bạn đã click nút!");
  });
</script>
```

### Ví dụ 2: Đếm số ký tự nhập vào input

```html
<input type="text" id="nameInput" />
<p id="charCount">0 ký tự</p>

<script>
  document.getElementById("nameInput").addEventListener("input", function(e) {
    document.getElementById("charCount").textContent = e.target.value.length + " ký tự";
  });
</script>
```

---

## 5. Gỡ bỏ sự kiện

Để gỡ bỏ sự kiện đã gán bằng `addEventListener`, bạn cần cung cấp đúng hàm đã đăng ký:

```javascript
function sayHello() {
  alert("Hello");
}

element.addEventListener("click", sayHello);

// Gỡ bỏ
element.removeEventListener("click", sayHello);
```

Lưu ý: Hàm phải được khai báo riêng, không phải là hàm ẩn danh.

---

## 6. Tổng kết

- DOM Events là cách để JavaScript tương tác với hành vi người dùng.
- `addEventListener()` là cách tốt nhất và linh hoạt nhất để xử lý sự kiện.
- Có nhiều nhóm sự kiện khác nhau: chuột, bàn phím, form, cửa sổ, clipboard, kéo thả, v.v.
- Việc hiểu rõ và sử dụng đúng sự kiện sẽ giúp bạn xây dựng ứng dụng web tương tác tốt hơn.

---
