"use client"
import { GiGearHammer } from "react-icons/gi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

export default function EmployeeCard({ product }) {
    const { equipment_id, data, qr_code_url } = product;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
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

                    <button 
                        onClick={openModal}
                        className="mt-6 bg-[#ffb703] hover:bg-black text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out"
                    >
                        View More Details
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        />
                        
                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl border-t-4 border-[#ffb703] w-full max-w-md">
                                {/* Modal Header */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <GiGearHammer size={30} color="#ffb703" />
                                        <h3 className="text-lg font-bold text-gray-800">Equipment Details</h3>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        X
                                    </button>
                                </div>

                                {/* Modal Content - Scrollable */}
                                <div className="max-h-[250px] overflow-y-auto p-4 text-sm">
                                    <div className="space-y-3">
                                        {/* Equipment ID */}
                                        <div className="border-b border-gray-100 pb-2">
                                            <span className="font-semibold text-[#ffb703] block">Equipment ID:</span>
                                            <span className="text-gray-800 font-medium">{equipment_id}</span>
                                        </div>

                                        {/* QR Code URL */}
                                        {qr_code_url && (
                                            <div className="border-b border-gray-100 pb-2">
                                                <span className="font-semibold text-[#ffb703] block">QR Code:</span>
                                                <span className="text-gray-600 text-xs break-all">{qr_code_url}</span>
                                            </div>
                                        )}

                                        {/* Filter and display non-empty fields */}
                                        {Object.entries(data)
                                            .filter(([key, value]) => value && value.toString().trim() !== "")
                                            .map(([key, value]) => (
                                                <div key={key} className="border-b border-gray-100 pb-2">
                                                    <span className="font-semibold text-gray-700 block">
                                                        {key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}:
                                                    </span>
                                                    <span className="text-gray-600">{value}</span>
                                                </div>
                                            ))}

                                        {/* Show count of empty fields */}
                                        {Object.entries(data).filter(([key, value]) => !value || value.toString().trim() === "").length > 0 && (
                                            <div className="mt-4 p-2 bg-gray-50 rounded text-xs text-gray-500 italic">
                                                {Object.entries(data).filter(([key, value]) => !value || value.toString().trim() === "").length} additional fields are empty
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-4 border-t border-gray-200">
                                    <button
                                        onClick={closeModal}
                                        className="w-full bg-[#ffb703] hover:bg-black text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}