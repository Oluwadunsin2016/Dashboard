import { useState } from 'react';
import ImageUploader from './ImageUploader';
import VideoUploader from './VideoUploader';
import { useCreateInvestment } from '../lib/api';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '@nextui-org/react';
import { notifier } from '../lib/utils';
const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    amountPerUnit: '',
    rate: '',
    period: '',
    pictures: null,
    videos: null,
  });

  const {mutateAsync:createInvestment,isPending}=useCreateInvestment()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImagesChange = (images) => {
    setFormData({ ...formData, pictures: images });
  };

  const handleVideosChange = (videos) => {
    setFormData({ ...formData, videos: videos });
  };

 

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    const data = new FormData();
      data.append('productName', formData.productName);
      data.append('amountPerUnit', formData.amountPerUnit);
      data.append('rate', formData.rate);
      data.append('period', formData.period);
    //   data.append('pictures', formData.pictures);
    //   data.append('videos', formData.videos);
    //   data.append('pictures', JSON.stringify(formData.pictures));
    //   data.append('videos', JSON.stringify(formData.videos));
    //   console.log(data);

// Append pictures as an array
formData?.pictures?.forEach((picture) => {
    data.append("pictures", picture.file); // Same key for multiple files
  });
  
  // Append videos as an array
  formData?.videos?.forEach((video) => {
    data.append("videos", video.file);
  });
  for (let pair of data.entries()) {
    console.log(pair[0], pair[1]); // Logs FormData to check file presence
  }
       await createInvestment(data,{ onSuccess: (data) => {
        console.log('Investment created:', data);
        notifier({
          message: "Toast displayed successfully",
          type: 'success',
        })
        setFormData({
          productName: '',
          amountPerUnit: '',
          rate: '',
          period: '',
          pictures: null,
          videos: null,
        })
      },
      onError: (error) => {
        notifier({
          message: error?.response.message?? error?.message?? "Error creating investment. Please try again.",
          type: 'error',
        })
        // alert('Error creating investment. Please try again.');
      },
    })
    
  };

  return (
    <div className="bg-white border px-4 py-4 md:px-10 rounded-md mb-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Investment Upload Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Amount per Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount per Unit:</label>
          <input
            type="number"
            name="amountPerUnit"
            value={formData.amountPerUnit}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rate</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700">Period</label>
  <select
    name="period"
    value={formData.period}
    onChange={handleChange}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  >
    <option value="">Select Period</option>
    <option value="in 6 months">6 Months</option>
    <option value="per annum">1 Year</option>
  </select>
</div>

     <div className='flex flex-col gap-4 md:flex-row md:gap-8 justify-center items-center py-8'>
           {/* Image Uploader */}
           <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700">Product Pictures:</label>
          <ImageUploader onFilesChange={handleImagesChange} />
        </div>

        {/* Video Uploader */}
        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700">Product Videos:</label>
          <VideoUploader onVideoFilesChange={handleVideosChange} />
        </div>

     </div>
        {/* Submit Button */}
        <Button
          type="submit"
          isDisabled={isPending}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"        >
          {isPending ? <span className='flex items-center gap-2'><ImSpinner8 className='animate-spin' size={18} />
            Submitting</span> : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default InvestmentForm;