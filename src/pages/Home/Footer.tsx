interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {

  return (
    <footer className={`bg-black flex justify-center items-center ${className}`}>
      <div className="w-full max-w-7xl">
        <div className="px-4 sm:px-8 md:px-14 pt-12 sm:pt-16 md:pt-20 pb-4 mx-2 sm:mx-4 md:m-5">
          <div className="text-[#EEE] font-orbitron sm:text-5xl md:text-7xl lg:text-[90px] text-center md:text-left">The Hackathon Project</div>
        </div>
        <div className="h-[2px] bg-[#575757]"></div>
        <div className="flex items-start p-4 sm:p-5 mx-4 sm:mx-6 md:m-8 pl-4 sm:pl-8 md:pl-12">
          <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-14 w-full justify-center md:justify-start">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-[140px]">
              <div className="text-[#FAFAFA] font-epilogue text-lg sm:text-xl font-extrabold">Transparent</div>
              <div className="text-[#B1B1B1] font-epilogue text-sm font-normal">
                <div className="mb-1">LinkedIn</div>
                <div className="mb-1">Twitter</div>
                <div className="mb-1">Youtube</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-[140px]">
              <div className="text-[#FAFAFA] font-epilogue text-lg sm:text-xl font-extrabold">Product</div>
              <div className="text-[#B1B1B1] font-epilogue text-sm font-normal">
                <div className="mb-1">Migrate my CRM</div>
                <div className="mb-1">Integrations</div>
                <div className="mb-1">Bulk email campaigns</div>
                <div className="mb-1">pipelines</div>
                <div className="mb-1">Enrichments</div>
                <div className="mb-1">Chrome extensions</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-[140px]">
              <div className="text-[#FAFAFA] font-epilogue text-lg sm:text-xl font-extrabold">Usecases</div>
              <div className="text-[#B1B1B1] font-epilogue text-sm font-normal">
                <div className="mb-1">Sales</div>
                <div className="mb-1">Agencies</div>
                <div className="mb-1">Startups</div>
                <div className="mb-1">Fundraising</div>
                <div className="mb-1">Venture Capital</div>
                <div className="mb-1">Recruiting</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-w-[140px]">
              <div className="text-[#FAFAFA] font-epilogue text-lg sm:text-xl font-extrabold">Resources</div>
              <div className="text-[#B1B1B1] font-epilogue text-sm font-normal">
                <div className="mb-1">Affiliate Program</div>
                <div className="mb-1">Tutorials</div>
                <div className="mb-1">Blog</div>
                <div className="mb-1">Support</div>
                <div className="mb-1">Download</div>
                <div className="mb-1">Famous Lists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}