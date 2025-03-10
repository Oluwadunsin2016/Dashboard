import { useState } from "react";
import { Modal, Image, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import propTypes from "prop-types";

const ImageUploader = ({ onFilesChange }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
    onFilesChange([...images, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onFilesChange(updatedImages);
  };

  const handlePreviewImage = (image) => {
console.log('Preview Image:',image);
    setSelectedImage(image);
    onOpen();
  };

  return (
    <div>
      <label
        htmlFor="image-upload"
        className="w-full flex justify-center flex-col items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500"
      >
        <svg
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
        </svg>
        <div className="flex text-sm text-gray-600">
          <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            Upload images
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </label>

      <div className="flex flex-wrap gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={image.url}
              alt={`Preview ${index}`}
              width={100}
              height={100}
              className="cursor-pointer w-full h-full object-cover"
              onClick={() => handlePreviewImage(image)}
            />
            <button
              className="absolute top-0 right-0 z-[50] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => handleRemoveImage(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
    <ModalHeader>
          <h2>Image Preview</h2>
        </ModalHeader>
        <ModalBody>
          {selectedImage && (
            <Image src={selectedImage.url} alt="Full-size Preview" />
          )}
        </ModalBody>
    </ModalContent>
      </Modal>

    </div>
  );
};

export default ImageUploader;

ImageUploader.propTypes = {
  onFilesChange: propTypes.func,
};
