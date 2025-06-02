# Hướng dẫn sử dụng Node Package Manager (npm) với json-server

## Bước 1: Tạo package mới
Tạo một thư mục mới với tên `json-server`.

## Bước 2: Mở terminal
Mở terminal tại thư mục vừa tạo (hoặc sử dụng Command Prompt trong thư mục đó).

## Bước 3: Khởi tạo `package.json`
Chạy lệnh sau để khởi tạo file `package.json`: npm init

## Bước 4: Cài đặt json-server
Cài đặt `json-server` bằng lệnh: npm install json-server

## Bước 5: Tạo file dữ liệu
Tạo file `db.json` và nhập dữ liệu dưới dạng JSON.

## Bước 6: Thêm script vào `package.json`
Mở file `package.json` và thêm vào phần `"scripts"` dòng sau:
  "scripts": {
    "start": "json-server --watch ./db.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

## Bước 7: Khởi động server
Chạy lệnh sau trong terminal để khởi động server: npm start
Sau khi chạy, server sẽ hoạt động. Bạn có thể truy cập thử trên trình duyệt, ví dụ:
- [http://localhost:3000/courses]
- [http://localhost:3000/courses/1]

## Bước 8: Dừng server
Để dừng server, nhấn tổ hợp phím `Ctrl + C` trong terminal.
