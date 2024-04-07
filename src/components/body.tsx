import { useEffect, useState } from "react"
import { Braces, FilePlus, FolderPlus, RotateCw, CopyMinus, Ellipsis, ChevronRight } from "lucide-react"
import { HeaderBar } from "./header-bar"
import JsonView from "@uiw/react-json-view"
import { vscodeTheme } from "@uiw/react-json-view/vscode"

export function Body() {

    const [settings, setSettings] = useState([])

    useEffect(() => {
        fetch('/settings.json')
            .then(response => response.json())
            .then(data => setSettings(data))
    }, [])

    return(
        <div className="bg-zinc-900 h-[800px] rounded-xl w-9/12 overflow-hidden flex mt-16">
            <HeaderBar/>
            <aside className="bg-v-900 h-full w-48 py-4 pl-6 pr-3 mt-6">
                <div className="flex justify-end mb-4">
                    <FilePlus size={24} className="p-1 rounded-md hover:bg-zinc-700 cursor-pointer"/>
                    <FolderPlus size={24} className="p-1 rounded-md hover:bg-zinc-700 cursor-pointer"/>
                    <RotateCw size={24} className="p-1 rounded-md hover:bg-zinc-700 cursor-pointer"/>
                    <CopyMinus size={24} className="p-1 rounded-md hover:bg-zinc-700 cursor-pointer"/>
                    <Ellipsis size={24} className="p-1 rounded-md hover:bg-zinc-700 cursor-pointer"/>
                </div>
                <div className="flex flex-1 items-center gap-1 pl-1 py-1 hover:bg-zinc-800">
                    <ChevronRight size={16}/>
                    <Braces className="text-orange-500" size={16}/>
                    <span className="text-zinc-600 text-sm font-medium cursor-pointer">settings.json</span>
                </div>
            </aside>
            <div className="mt-10 flex flex-1 overflow-y-scroll">
                <JsonView value={settings} displayObjectSize={false} enableClipboard={false} displayDataTypes={false} style={vscodeTheme}/>
            </div>
      </div>
    )
}