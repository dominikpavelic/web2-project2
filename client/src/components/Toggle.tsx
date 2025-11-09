interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

const Toggle = ({checked, onChange, label}: ToggleProps) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <button
                type="button"
                role="switch"
                // aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`
                    relative inline-flex h-7 w-14 items-center rounded-full focus:ring-4 focus:ring-primary/50
                    ${checked ? 'bg-green-500' : 'bg-gray-300'}
                `}
            >
                <span
                    className={`
                        inline-block h-6 w-6 rounded-full bg-white transition-transform
                        ${checked ? 'translate-x-7' : 'translate-x-0.5'}
                    `}
                />
            </button>
            <span className="font-semibold text-gray-700">{label}</span>
        </div>

    );
}

export { Toggle };