import type React from "react";
import Card from "./Card";
import Faqs from "../faqs/Faqs";
import ImageUploader from "./ImageUploader";

const Hero: React.FC = () => (
  <section className='pt-[140px]'>
    <div className='container'>
      <h1>
        <strong>Image Compressor</strong> from MB to KB
      </h1>
      <p className='text-center mb-8 max-sm:mt-1'>
        Reduce your image size from MB to kB. Compatible with JPG, PNG, and WebP
        formats.
      </p>
      <ImageUploader />
      <Card>
        <h2>
          <strong>Image Compression</strong> Tool
        </h2>
        <p>
          Our Image Compressor is an intuitive online utility designed to reduce
          the size of your images to meet specific requirements. You can easily
          compress your images to any desired file size such as 100 kB, 200 kB,
          350 kB, and more.
        </p>
        <p className='mt-6'>
          Many official websites often require images to be uploaded with strict
          size limits. This tool is ideal for resizing your images to fit those
          specifications.
        </p>
      </Card>
      <Card>
        <h2>How to reduce image size using imgcompress.xyz?</h2>
        <p>
          Reducing image size using imgcompress.xyz is quite straightforward.
          Follow these simple steps to resize any image to your desired file
          size.
        </p>
        <ul className='mt-5 list-disc pl-[22px] space-y-4'>
          {[
            "Upload the image",
            "Select compression level",
            "Download compressed image",
          ].map((step, index) => (
            <li key={index}>
              <h3>{step}</h3>
              <p>
                {index === 0 &&
                  "Drag and drop or select an image from your mobile device or computer that you want to reduce."}
                {index === 1 &&
                  "Choose your desired compression level or target file size."}
                {index === 2 &&
                  "After compression, click the Download button to save the reduced image to your device."}
              </p>
            </li>
          ))}
        </ul>
        <p className='mt-6'>
          Click on &quot;Compress Image&quot; to begin the process. After the
          image has been successfully reduced, a Download button will appear for
          you to save the image to your device.
        </p>
      </Card>
      <Faqs />
    </div>
  </section>
);

export default Hero;
