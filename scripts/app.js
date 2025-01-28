// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDag4Tczho4cK1RzZzo_dRoOQdQNJ18EA",
    authDomain: "chatapp-54676.firebaseapp.com",
    projectId: "chatapp-54676",
    storageBucket: "chatapp-54676.firebasestorage.app",
    messagingSenderId: "954956298567",
    appId: "1:954956298567:web:c96abe67d2028b6df43462",
    measurementId: "G-3L5JZ2VZBJ"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  
  // Form submission handling
  document.getElementById('giftForm').addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const bankAccount = document.getElementById('bankAccount').value;
      const bankName = document.getElementById('bankName').value;
  
      // Save data to Firestore
      try {
          await db.collection('gifts').add({
              name: name,
              bankAccount: bankAccount,
              bankName: bankName,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          document.getElementById('status').innerText = "Cảm ơn bạn đã nhận lì xì!";
      } catch (error) {
          document.getElementById('status').innerText = "Có lỗi xảy ra, vui lòng thử lại!";
      }
  });
  