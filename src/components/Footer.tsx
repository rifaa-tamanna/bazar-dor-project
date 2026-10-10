const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-5 sm:py-6">
      <div className="flex flex-col items-center gap-3 px-4 text-center md:flex-row md:justify-between md:items-center md:text-left max-w-6xl mx-auto">
        
        <div className="text-[#515953] text-sm sm:text-base lg:text-lg">
          <h1>
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </h1>
        </div>

        <div className="text-[#515953] text-sm sm:text-base lg:text-lg">
          <h1>
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;