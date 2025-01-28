// Import Firebase App và Firestore từ Firebase module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDag4Tczho4C...",
  authDomain: "chatapp-54676.firebaseapp.com",
  projectId: "chatapp-54676",
  storageBucket: "chatapp-54676.appspot.com",
  messagingSenderId: "954956298567",
  appId: "1:954956298567:web:c96abe67d2028b6df43462",
  measurementId: "G-3L5JZ2VZBJ"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Xử lý form gửi dữ liệu
const giftForm = document.getElementById('giftForm');
giftForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Ngăn không reload trang

  // Lấy dữ liệu từ form
  const name = document.getElementById('name').value;
  const bankAccount = document.getElementById('bankAccount').value;
  const bankName = document.getElementById('bankName').value;

  try {
    // Lưu thông tin vào Firestore
    const docRef = await addDoc(collection(db, "gifts"), {
      name,
      bankAccount,
      bankName,
      timestamp: serverTimestamp()
    });

    // Hiển thị thông báo thành công
    const status = document.getElementById('status');
    status.textContent = "Gửi thông tin thành công, anh cảm ơn em yêu nhé!💖";
    status.style.color = "green";

    // Reset form
    giftForm.reset();
  } catch (error) {
    console.error("Lỗi khi gửi thông tin:", error);
    const status = document.getElementById('status');
    status.textContent = "Gửi thông tin thất bại. Vui lòng thử lại.";
    status.style.color = "red";
  }
});
