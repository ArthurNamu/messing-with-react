import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SecurityList from './Security.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <SecurityList />
  </> 

)
