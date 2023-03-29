import {createRoot} from 'react-dom/client'

import { AppRouter } from './router/AppRouter'



function JournalApp() {
//  const [count, setCount] = useState(0)

  return (
    <div>  
    <AppRouter/>
    </div>
  )
}

export default JournalApp
