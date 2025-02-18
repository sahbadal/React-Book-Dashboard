import { Button } from "./components/ui/button"

const App = () => {

  const handleClick = () =>{
    alert('button clicked')
  }

  return (
    <div className="text-center mt-60">
      <Button onClick={handleClick} variant="destructive">click me</Button>
    </div>
  )
}

export default App