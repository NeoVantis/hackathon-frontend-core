interface FeatureBenefitsProps {
  className?: string;
}

const benefits = [
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M15.1607 11.0453C15.1607 11.015 15.1665 10.9869 15.1665 10.9566C15.1665 7.10196 13.3208 3.69996 10.4999 1.62329C7.67884 3.69996 5.83317 7.10196 5.83317 10.9566C5.83317 10.9869 5.83784 11.015 5.839 11.0453C4.419 11.8624 3.23942 13.0393 2.41913 14.4575C1.59882 15.8757 1.16678 17.485 1.1665 19.1233H3.51384C4.44835 17.8851 5.69423 16.9165 7.12467 16.3163C7.92858 17.8832 9.08368 19.2431 10.4999 20.2899C11.916 19.2431 13.0711 17.8832 13.875 16.3163C15.3054 16.9165 16.5514 17.8851 17.4859 19.1233H19.8332C19.8329 17.485 19.4009 15.8757 18.5806 14.4575C17.7602 13.0393 16.5807 11.8624 15.1607 11.0453ZM10.4999 5.63196C10.9841 5.63196 11.4485 5.82432 11.7909 6.16673C12.1333 6.50914 12.3257 6.97355 12.3257 7.45779C12.3257 7.94204 12.1333 8.40644 11.7909 8.74885C11.4485 9.09127 10.9841 9.28366 10.4999 9.28366C10.0156 9.28366 9.55123 9.09127 9.20875 8.74885C8.86637 8.40644 8.674 7.94204 8.674 7.45779C8.674 6.97355 8.86637 6.50914 9.20875 6.16673C9.55123 5.82432 10.0156 5.63196 10.4999 5.63196Z" 
          fill="white"
        />
      </svg>
    ),
    title: "Go live faster",
    description: "Build, launch, and update sites as quickly as your business moves, without hiring more devs."
  },
  {
    icon: (
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M17.5618 0.741943H0.784668V5.53542H17.5618V0.741943ZM0.784668 7.93216H5.57814V17.5191H0.784668V7.93216ZM7.97488 7.93216H17.5618V17.5191H7.97488V7.93216Z" 
          fill="white"
        />
      </svg>
    ),
    title: "Think beyond templates",
    description: "Design custom sites that give you full control over the user experience — and are always on brand."
  },
  {
    icon: (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M10.0435 0C4.5055 0 0 4.5055 0 10.0435C0 15.5815 4.5055 20.087 10.0435 20.087C15.5815 20.087 20.087 15.5815 20.087 10.0435C20.087 4.5055 15.5815 0 10.0435 0ZM10.0435 15.0652L5.02174 10.0435H9.03913V5.02174H11.0478V10.0435H15.0652L10.0435 15.0652Z" 
          fill="white"
        />
      </svg>
    ),
    title: "Reduce costs",
    description: "Get the power of code without the cost of developers, managing infrastructure, or additional plug-ins."
  },
  {
    icon: (
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M5.56999 5.98404C4.86823 6.6858 4.31602 7.50549 3.93062 8.42008C3.53276 9.36535 3.33048 10.372 3.33048 11.4131H1.41309C1.41309 10.1151 1.66618 8.85725 2.1647 7.67517C2.64693 6.53145 3.33623 5.50565 4.21439 4.62844C5.09639 3.7474 6.1222 3.05714 7.26305 2.57779C9.57542 1.6028 12.2521 1.58842 14.5827 2.52123C15.0151 2.09077 15.6124 1.82617 16.2729 1.82617C17.6016 1.82617 18.6696 2.89416 18.6696 4.22291C18.6696 5.55166 17.6016 6.61965 16.2729 6.61965C14.9729 6.61965 13.9289 5.5948 13.8838 4.30536C12.0153 3.55182 9.86203 3.56237 8.00699 4.34467C7.09528 4.72718 6.27559 5.27939 5.56999 5.98404ZM16.4291 16.8422C17.1319 16.1395 17.6841 15.3189 18.0685 14.4062C18.4674 13.4599 18.6696 12.4533 18.6696 11.4131H20.587C20.587 12.7112 20.3339 13.968 19.8364 15.1501C19.3541 16.2929 18.6639 17.3187 17.7848 18.1979C16.9056 19.0769 15.8788 19.7672 14.736 20.2495C13.5549 20.747 12.2981 21.0001 11 21.0001C9.75858 21.0001 8.55537 20.7623 7.4174 20.3051C6.98502 20.7355 6.38776 21.0001 5.72722 21.0001C4.39846 21.0001 3.33048 19.9321 3.33048 18.6033C3.33048 17.2746 4.39846 16.2066 5.72722 16.2066C7.02721 16.2066 8.07123 17.2314 8.11533 18.5209C9.98291 19.2744 12.1361 19.2638 13.9922 18.4815C14.9058 18.0972 15.7264 17.5449 16.4291 16.8422ZM7.23374 11.4131C7.23374 9.33659 8.92351 7.64682 11 7.64682C13.0766 7.64682 14.7663 9.33659 14.7663 11.4131C14.7663 13.4897 13.0766 15.1794 11 15.1794C8.92351 15.1794 7.23374 13.4897 7.23374 11.4131Z" 
          fill="white"
        />
      </svg>
    ),
    title: "Improve your KPIs",
    description: "Ship more high-impact campaigns, more often — all while optimizing for conversions."
  }
];

export default function FeatureBenefits({ className = "" }: FeatureBenefitsProps) {
  return (
    <section className={`px-4 py-16 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col pt-8 pb-2 border-t border-gray-200">
              {/* Icon and Title */}
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-5 h-5 mr-3 mt-0.5">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-xl font-medium leading-tight tracking-tight">
                  {benefit.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white text-base leading-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
