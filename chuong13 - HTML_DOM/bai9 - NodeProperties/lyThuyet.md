# Node Properties trong DOM

## 🧩 1. Thông tin cơ bản của Node
| Thuộc tính   | Mô tả                                                 |
|--------------|-------------------------------------------------------|
| `nodeType`   | Loại node (1 = element, 3 = text, 8 = comment,...)    |
| `nodeName`   | Tên của node (ví dụ: "DIV", "H1", "#text")            |
| `nodeValue`  | Giá trị của node (dùng cho Text, Comment node)        |
| `tagName`    | Tên thẻ (chỉ áp dụng cho Element, giống nodeName)     |

## 🧱 2. Quan hệ giữa các node
| Thuộc tính                                      | Mô tả                                                     |
|-------------------------------------------------|-----------------------------------------------------------|
| `parentNode`                                    | Node cha                                                  |
| `parentElement`                                 | Element cha                                               |
| `childNodes`                                    | Danh sách tất cả node con (bao gồm text, comment)         |
| `children`                                      | Danh sách các phần tử con (chỉ element)                   |
| `firstChild` / `lastChild`                      | Node con đầu tiên / cuối cùng                             |
| `firstElementChild` / `lastElementChild`        | Phần tử con đầu tiên / cuối cùng                          |
| `previousSibling` / `nextSibling`               | Node trước / sau                                          |
| `previousElementSibling` / `nextElementSibling` | Element trước / sau                                       |
| `isConnected`                                   | Kiểm tra xem node có nằm trong DOM hông                   |

## 🎯 3. Nội dung và HTML
| Thuộc tính      | Mô tả |
|-----------------|----------------------------------------------------|
| `innerText`     | Văn bản hiển thị trong element                     |
| `textContent`   | Toàn bộ nội dung text bên trong node               |
| `innerHTML`     | HTML bên trong element                             |
| `outerHTML`     | Toàn bộ HTML của element (bao gồm chính nó)        |
| `outerText`     | Giống innerText nhưng áp dụng cả cho chính element |

## 🧷 4. Thuộc tính liên quan đến class, id, style
| Thuộc tính   | Mô tả                                                        |
|--------------|--------------------------------------------------------------|
| `id`         | ID của element                                               |
| `className`  | Giá trị chuỗi của thuộc tính class                           |
| `classList`  | Đối tượng DOMTokenList quản lý các class                     |
| `style`      | Truy cập style inline CSS                                    |
| `attributes` | Danh sách tất cả thuộc tính của element                      |
| `dataset`    | Dữ liệu từ `data-*` attributes (truy cập qua JS object)      |

## 📐 5. Kích thước và vị trí
| Thuộc tính                     | Mô tả                                           |
|--------------------------------|-------------------------------------------------|
| `offsetWidth` / `offsetHeight` | Chiều rộng / cao bao gồm border                 |
| `clientWidth` / `clientHeight` | Chiều rộng / cao không bao gồm border           |
| `scrollWidth` / `scrollHeight` | Kích thước cuộn                                 |
| `offsetTop` / `offsetLeft`     | Vị trí tương đối với phần tử cha                |


## 🚦 6. Các thuộc tính đặc biệt khác
| Thuộc tính        | Mô tả                                                            |
|-------------------|------------------------------------------------------------------|
| `contentEditable` | Cho biết phần tử có thể chỉnh sửa nội dung hay không             |
| `tabIndex`        | Thiết lập tab thứ tự điều hướng                                  |
| `hidden`          | Ẩn phần tử khỏi hiển thị                                         |
| `title`           | Tooltip khi hover chuột                                          |
| `lang`            | Ngôn ngữ của element                                             |
| `draggable`       | Cho phép kéo thả                                                 |

## 🦽 7. ARIA và Accessibility (phụ trợ tiếp cận)
| Thuộc tính                           | Mô tả                                                          |
|--------------------------------------|----------------------------------------------------------------|
| `ariaLabel`, `ariaHidden`, ...       | Các thuộc tính hỗ trợ tiếp cận (Accessibility), rất nhiều loại |

## 🧪 8. Một số ít gặp nhưng có ích
| Thuộc tính      | Mô tả                                                        |
|------------------|-------------------------------------------------------------|
| `assignedSlot`   | Dành cho Shadow DOM                                         |
| `shadowRoot`     | Gốc shadow DOM nếu có                                       |
| `ownerDocument`  | Trả về document chứa node này                               |
| `baseURI`        | URI gốc của node                                            |
| `part`           | Thuộc tính để phân vùng styling trong Shadow DOM            |

