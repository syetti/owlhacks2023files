import { useState } from 'react'
import Event from '../src/components/Event'
import '../src/App.css'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Event name="Drexel Event" description="Its fun" date="9/25/23"/>
      <Event name="Temple Event" description="Its less fun" date="9/26/23"/>
      </div>
    </>
  )
}

export default Home
