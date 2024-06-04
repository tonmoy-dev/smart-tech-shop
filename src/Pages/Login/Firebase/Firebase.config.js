// Web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyBoB9CuEEifD2oUKOumNixSOTCHFB8QcKI",
  //   authDomain: "smart-tech-authentication.firebaseapp.com",
  //   projectId: "smart-tech-authentication",
  //   storageBucket: "smart-tech-authentication.appspot.com",
  //   messagingSenderId: "1055653591600",
  //   appId: "1:1055653591600:web:0527dafe5f1b88083e8bf5",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export default firebaseConfig;
