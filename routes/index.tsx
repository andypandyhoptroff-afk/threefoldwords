import { createFileRoute } from '@tanstack/react-router'
import Threefold from '../components/Threefold'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <Threefold />
  )
}
