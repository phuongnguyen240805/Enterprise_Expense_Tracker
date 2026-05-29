# 🚀 Enterprise Expense Tracker

Hệ thống quản lý chi tiêu doanh nghiệp (Enterprise Expense Management System) được xây dựng theo mô hình **Full-stack** hiện đại.

---

## 📋 Giới thiệu

**Enterprise Expense Tracker** là ứng dụng giúp doanh nghiệp và cá nhân quản lý chi tiêu một cách chuyên nghiệp, bao gồm theo dõi giao dịch, quản lý ngân sách, phân loại chi phí và tạo báo cáo chi tiết.

Dự án được phát triển với kiến trúc **Microservice-ready**, tập trung vào tính bảo mật, hiệu suất và khả năng mở rộng.

---

## ✨ Tính năng chính

### **🔐 Authentication & Authorization**
- Đăng ký / Đăng nhập
- JWT Authentication + Refresh Token
- Phân quyền (Role-based)
- Bảo mật mạnh mẽ

### **💰 Quản lý Giao dịch**
- Thêm/Sửa/Xóa giao dịch thu - chi
- Lọc theo ngày, tháng, danh mục, loại giao dịch
- Hỗ trợ ghi chú và file đính kèm (tương lai)

### **📊 Quản lý Ngân sách**
- Tạo ngân sách theo kỳ (tháng/quý/năm)
- Theo dõi tiến độ thời gian thực
- Cảnh báo tự động khi sắp vượt hoặc đã vượt ngân sách

### **📈 Báo cáo & Thống kê**
- Báo cáo chi tiết theo danh mục, thời gian
- Xuất báo cáo dạng **PDF** chuyên nghiệp
- Biểu đồ trực quan (Frontend)

### **🏷️ Danh mục Chi tiêu**
- Quản lý danh mục động
- Phân cấp danh mục (cấp 1, cấp 2)

---

## 🛠 Công nghệ sử dụng

### **Backend**
- **Java 21** + **Spring Boot 3**
- Spring Security + JWT
- Spring Data JPA
- PostgreSQL (Production) + H2 (Development)
- Redis (Cache & Refresh Token)
- Spring Scheduler (Alert ngân sách)
- iText7 (Export PDF)
- Springdoc OpenAPI (Swagger)

### **Frontend**
- **React + Vite**
- Axios
- React Router
- (Có thể thêm Redux Toolkit / TanStack Query)

### **DevOps**
- Docker + Docker Compose
- Maven
- Git

---

## 📁 Cấu trúc dự án

```
Enterprise_Expense_Tracker/
├── backend/                  # Spring Boot Backend
├── frontend/                 # React Frontend
├── docker-compose.yml
├── structure.md
└── README.md
```

---

## 🚀 Cách chạy dự án

### **1. Sử dụng Docker Compose (Khuyến nghị)**

```bash
# Clone repository
git clone https://github.com/phuongnguyen240805/Enterprise_Expense_Tracker.git
cd Enterprise_Expense_Tracker

# Chạy toàn bộ hệ thống
docker-compose up -d --build
```

### **2. Chạy thủ công**

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## 📝 API Documentation

Sau khi chạy backend, truy cập Swagger UI tại:
**http://localhost:8080/swagger-ui/index.html**

---

## 🔧 Cấu hình môi trường

Các file cấu hình quan trọng:
- `backend/src/main/resources/application.yml`
- `backend/src/main/resources/application-dev.yml`
- `.env` (nếu có)

---

## 👨‍💻 Tác giả

- **Tên**: Nguyễn Xuân Phương
- **Lớp / Nhóm**: ...
- **Môn học**: ...

---

## 📄 License

Dự án này được phát triển phục vụ mục đích học tập và demo.

---

**Made with ❤️ using Spring Boot & React**
```

---

Bạn chỉ cần copy toàn bộ nội dung trên và dán vào file `README.md` trong repository. 

Nếu bạn muốn thêm thông tin cá nhân (lớp, giảng viên, ngày nộp, screenshot, demo video...), cứ cho mình biết để mình chỉnh sửa bổ sung nhé!