import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import propTypes from "prop-types";
// import { BiVideoPlus } from 'react-icons/bi';
import { PiVideoCameraThin } from 'react-icons/pi';

const VideoUploader = ({ onVideoFilesChange }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newVideos = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setVideos((prev) => [...prev, ...newVideos]);
    onVideoFilesChange([...videos, ...newVideos]);
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    onVideoFilesChange(updatedVideos);
  };

  const handlePreviewVideo = (video) => {
    setSelectedVideo(video);
    onOpen();
  };

  return (
    <div>
         <label htmlFor="video-upload"
        className="w-full flex justify-center flex-col items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500"
      >
                  {/* <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                  {/* <img alt="add video svg icon from www.flaticon.com" className='mx-auto h-10 w-10 text-gray-400' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27B6J2Noh4ySgAtmW6TWSnTaKg6AysNHqSiGnNwmcEDxPRM0g7SL4STE&amp;usqp=CAE&amp;s"/> */}
                  <PiVideoCameraThin size={50} className='mx-auto text-gray-400' />

                  <div className="flex text-sm text-gray-600">
                      <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">Upload a video</span>
                      <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        id="video-upload"
                      />
                  </div>
                  <p className="text-xs text-gray-500">MP4, MOV up to 50MB</p>
                </label>
  

      <div className="flex flex-wrap gap-4 mt-4">
        {videos.map((video, index) => (
          <div key={index} className="relative w-30 h-20 rounded-lg overflow-hidden">
            <video
              src={video.url}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => handlePreviewVideo(video)}
            />
            <button
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => handleRemoveVideo(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={onOpenChange}>
      <ModalContent>
      <ModalHeader>
          <h2>Video Preview</h2>
        </ModalHeader>
        <ModalBody>
          {selectedVideo && (
            <video src={selectedVideo.url} controls className="w-full" />
          )}
        </ModalBody>
      </ModalContent>
      </Modal>
    </div>
  );
};

export default VideoUploader;

VideoUploader.propTypes = {
    onVideoFilesChange: propTypes.func,
}