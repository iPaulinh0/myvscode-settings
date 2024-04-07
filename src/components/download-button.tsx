import { Clipboard } from "lucide-react"

export function DownloadButton() {
    return(
        <a href="https://drive.google.com/uc?export=download&id=13Kjl1flQHicILn8ThotUebxGg7vCHEfS" className="flex items-center gap-2 bg-slate-50/30 p-2 rounded-lg mt-4 cursor-pointer hover:bg-zinc-50/50">
            <Clipboard />
            <button className="font-medium text-lg">Download settings.json</button>
        </a>
    )
}