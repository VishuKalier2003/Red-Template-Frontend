import React from "react";

const AlertBox = ({ visible, onClose, title, imgSrc, children }) => {
    if (!visible) return null; // Don't render anything if not visible

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="back-eerie-black w-[300px] sm:w-[400px] p-4 rounded-md shadow-lg">
                <div className="flex justify-between items-center pb-2">
                    <h2 className="text-lg poppins-regular fore-cadmium-red">{title || "Alert"}</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-700 font-bold text-lg"
                    >
                        &times;
                    </button>
                </div>
                <div className="relative w-full h-[12rem] test-border back-red">
                    <img src={`/${imgSrc}`} alt="" className="w-full h-full"  />
                </div>
                <div className="mt-4 text-sm fore-white poppins-regular">
                    {children || "This is an alert message."}
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 back-red2 fore-black rounded-md hover:back-red"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertBox;
