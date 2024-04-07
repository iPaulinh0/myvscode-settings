import { Body } from "./components/body"
import { DownloadButton } from "./components/download-button"

export function App() {
  return (
    <div className="flex flex-col items-center">
      <Body/>
      <DownloadButton />
    </div>
  )
}

