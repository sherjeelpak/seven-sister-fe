import { GiGearHammer } from "react-icons/gi";

export default function EmployeeCard({ product }) {
    const { equipment_id, data, qr_code_url } = product;

    return (
        <div className="max-w-sm mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-t-4 border-[#ffb703] transform transition duration-300">
            <div className="flex flex-col items-center">
                <GiGearHammer size={50} color="#ffb703" className="mb-4" />

                <h2 className="text-2xl font-bold text-gray-800">Equipment ID: {equipment_id}</h2>
                <p className="text-gray-600 text-center mt-2 italic">{data['Description of Technical Object']}</p>

                <div className="mt-4 w-full text-gray-700 space-y-2">
                    <div><span className="font-bold">Manufacturer:</span> {data['Manufacturer of asset']}</div>
                    <div><span className="font-bold">Serial Number:</span> {data['ManufactSerialNumber']}</div>
                    <div><span className="font-bold">Maintenance Plant:</span> {data['Maintenance Plant Name']}</div>
                    <div><span className="font-bold">Functional Location:</span> {data['Description of functional location']}</div>
                </div>

                <button className="mt-6 bg-[#ffb703] hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out">
                    View More Details
                </button>
            </div>
        </div>
    );
}
