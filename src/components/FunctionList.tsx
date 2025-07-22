import { NavLink } from "react-router-dom";

const functionItems = [
    { id: 1, label: "Find Duplicated Items", path: "/find-duplicated-items" },
    { id: 2, label: "Delay to display", path: "/array-items-with-delay" },
    { id: 3, label: "Check Brackets", path: "/code-blocks" },
    { id: 4, label: "07 - Carrots Limit", path: "/carrots-limit" },
];

const FunctionList = () => {
    return (
        <nav>
            <ul className="space-y-2">
                {functionItems.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `block p-2 rounded-md transition-colors ${isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default FunctionList;