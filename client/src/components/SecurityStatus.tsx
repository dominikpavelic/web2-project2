import { useSecurity } from "hooks";
import { Toggle } from "./Toggle.tsx";

const SecurityStatus = () => {
    const {config, toggleXSSProtection} = useSecurity();

    return (
        <div className="bg-white max-w-7xl mx-auto px-8 py-4 rounded-xl shadow-lg mt-4 flex gap-8 flex-wrap">
            <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">XSS ranjivost:</span>
                <span
                    className={`px-4 py-1 rounded-md font-bold text-sm ${
                        config.xssProtection
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                    }`}
                >
                  {config.xssProtection ? 'ZAŠTIĆENO' : 'RANJIVO'}
                </span>
                <Toggle checked={config.xssProtection} onChange={toggleXSSProtection} label={""}/>
            </div>
        </div>
    )
}

export { SecurityStatus };