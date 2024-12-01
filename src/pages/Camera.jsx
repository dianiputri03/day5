import React, { useState, useEffect, useRef } from 'react';

export default function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);
    const [streaming, setStreaming] = useState(null);
    const width = 320;
    const [height, setHeight] = useState(0);

    const handleCanPlay = () => {
        if (!streaming) {
            const video = videoRef.current;

            if (video) {
                const computedHeight = video.videoHeight / (video.videoWidth / width);
                setHeight(isNaN(computedHeight) ? width / (4 / 3) : computedHeight);

                video.setAttribute("width", width);
                video.setAttribute("height", computedHeight);
                canvasRef.current.setAttribute("width", width);
                canvasRef.current.setAttribute("height", computedHeight);
                setStreaming(true);
            }
        }
    };

    const clearPhoto = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
        const data = canvas.toDataURL("image/png");
        setPhoto(data);
    };

    const takePicture = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext("2d");
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            const data = canvas.toDataURL("image/png");
            setPhoto(data);
        } else {
            clearPhoto();
        }
    };

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false,
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };
        startCamera();
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Camera Component</h1>
            <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <div className="w-full flex justify-center mb-4">
                    <video
                        ref={videoRef}
                        onCanPlay={handleCanPlay}
                        className={`rounded-lg ${streaming ? "block" : "hidden"}`}
                    />
                    <canvas ref={canvasRef} style={{ display: "none" }} />
                </div>
                <button
                    onClick={takePicture}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Take Picture
                </button>
                {photo && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Captured Photo</h2>
                        <img
                            src={photo}
                            alt="Taken photo"
                            className="rounded-lg shadow-md border border-gray-300"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
