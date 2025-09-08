import { Button} from '@neovantis/mantisui'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false)

  const clickLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }

  return (

    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Button variant="primary" icon="+" loading={loading} onClick={clickLoading}>
        Add Content
     </Button>
    </div>
  )
}

export default App