# Giới thiệu về JSON (JavaScript Object Notation)

## 1. JSON là gì?

**JSON** (JavaScript Object Notation) là một **định dạng dữ liệu nhẹ**, dựa trên **văn bản (text)**, được sử dụng phổ biến để **lưu trữ và truyền tải dữ liệu** giữa **client** và **server** trong các ứng dụng web.
**JSON** có cú pháp gần giống với đối tượng trong JavaScript, giúp dễ đọc, dễ ghi và dễ thao tác.

---

## 2. Đặc điểm của JSON

- **Dễ đọc, dễ ghi**: Cú pháp đơn giản, thân thiện với lập trình viên.
- **Hỗ trợ các kiểu dữ liệu cơ bản**:
      - `string` (chuỗi)
      - `number` (số)
      - `boolean` (đúng/sai)
      - `null`
      - `array` (mảng)
      - `object` (đối tượng)
- **Cấu trúc dữ liệu rõ ràng**: Theo dạng **cặp key-value**, với **key** luôn nằm trong dấu ngoặc kép `" "`.

---

## 3. Cấu trúc dữ liệu JSON

JSON lưu trữ dữ liệu dưới dạng cặp **key-value**. Tất cả các key đều phải đặt trong dấu ngoặc kép `" "`.

**Ví dụ:**

```json
{
   "name": "Nguyen Van A",
   "age": 20,
   "isStudent": true
}
```

Mỗi cặp **key-value** được ngăn cách bởi dấu phẩy `,`.

---

## 4. Chuyển đổi JSON trong JavaScript

- **Encode (Mã hóa)**: Chuyển object JavaScript thành chuỗi JSON  
   Sử dụng: `JSON.stringify(object)`

- **Decode (Giải mã)**: Chuyển chuỗi JSON thành object JavaScript  
   Sử dụng: `JSON.parse(jsonString)`

> ⚠️ **Ghi nhớ:** `JSON.stringify` để mã hóa (encode), `JSON.parse` để giải mã (decode) JSON.

---

## 5. Ví dụ minh họa

```js
// Đối tượng JavaScript
const student = {
   name: "Nguyen Van A",
   age: 20,
   isStudent: true
};

// Encode - Mã hóa object thành JSON string
const jsonString = JSON.stringify(student);
console.log("JSON string:", jsonString);

// Decode - Giải mã JSON string thành object
const decodedObject = JSON.parse(jsonString);
console.log("Decoded object:", decodedObject);
```

---

## 6. Ứng dụng thực tế của JSON

- Truyền và nhận dữ liệu qua **API** (REST, GraphQL, AJAX,...)
- Giao tiếp giữa **frontend** và **backend**
- Lưu trữ cấu hình trong các file `.json`
- Đọc/ghi dữ liệu trong các cơ sở dữ liệu **NoSQL** như MongoDB
- Lưu trữ dữ liệu tạm thời trên client (localStorage, sessionStorage)

---

## 7. Lưu ý quan trọng

- JSON **không hỗ trợ**: `undefined`, `function`, `Date`, `RegExp`, `Map`, `Set`,...
- Tất cả **key** trong JSON **bắt buộc** phải nằm trong dấu ngoặc kép `" "`.
- JSON là **dạng chuỗi**, không phải object — cần `parse` để sử dụng như object.

---

## 8. Tóm tắt

| Thành phần          | Mô tả                                               |
|---------------------|-----------------------------------------------------|
| Định dạng           | Văn bản (text), chuỗi                               |
| Kiểu dữ liệu hỗ trợ | String, Number, Boolean, Null, Array, Object        |
| Encode              | `JSON.stringify(object)`                            |
| Decode              | `JSON.parse(jsonString)`                            |
| Ứng dụng            | Truyền dữ liệu API, lưu file .json, NoSQL, cấu hình |

