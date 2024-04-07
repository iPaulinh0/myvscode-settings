import { Copy, X, Minus } from "lucide-react"
import VSCodeLogo from "../assets/vscode.svg"

export function HeaderBar() {
    return(
        <div className="bg-zinc-900 h-8 w-9/12 flex p-3 rounded-xl items-center justify-between fixed">
          <img src={VSCodeLogo} alt="" className="size-4" />
          <span className="text-zinc-500 text-sm font-medium">settings.json</span>
          <div className="flex gap-2">
            <Minus className="text-zinc-700" size={16}/>
            <Copy className="text-zinc-700" size={16}/>
            <X className="text-zinc-700" size={16}/>
          </div>
        </div>
    )
}