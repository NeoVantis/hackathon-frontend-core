import React, { useState } from 'react';
import { OnboardingInput } from '../../components/input';
import OptionsGrid from '../../components/OptionsGrid';

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [school, setSchool] = useState('');
  const [howDidYouHear, setHowDidYouHear] = useState<string[]>([]);
  const [interestedHackathons, setInterestedHackathons] = useState<string[]>([]);
  const [priorExperience, setPriorExperience] = useState<string[]>([]);
  const [teamPreference, setTeamPreference] = useState<string[]>([]);
  const [participationFee, setParticipationFee] = useState<string[]>([]);

  const hearAboutUsOptions = [
  "Friend or colleague",
  "College/University announcement",
  "LinkedIn",
  "Instagram",
  "Twitter",
  "Dev.to",
  "Snapchat",
  "Telegram",
  "Reddit",
  "Discord",
  "GitHub",
  "Stack Overflow",
  "YouTube",
  "Devfolio"
];

  const hackathonOptions = [
    "Web Development",
    "Mobile App Development",
    "Blockchain & Web3",
    "Data Science / Analytics",
    "Artificial Intelligence / Machine Learning",
    "Cybersecurity",
    "Open Innovation (any theme)",
    "Other (please specify)"
  ];

  const experienceOptions = [
    "Beginner (first-time participant)",
    "Intermediate (participated in 1–3 hackathons)",
    "Experienced (participated in 4+ hackathons)",
    "Professional (won or organized hackathons before)"
  ];

  const teamOptions = [
    "Prefer working in a team",
    "Prefer working solo",
    "Flexible (open to both)"
  ];

  const feeOptions = [
    "Free (prefer no entry fee)",
    "Nominal fee (up to ₹500)",
    "Moderate fee (₹500 – ₹2000)",
    "Premium fee (₹2000+)",
    "Depends on the value offered (mentorship, exposure, networking, prizes)"
  ];


  const totalSteps = 8;
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const handleNext = () => {
    setCurrentStep(Math.min(currentStep + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  return (
    <div
      className="min-h-screen bg-[#02060A] bg-center relative"
      style={{ backgroundImage: 'url(/swigglyLines.svg)', backgroundSize: '300% 300%' }}
    >
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#0237F5] to-blue-300 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70vw] space-y-8 p-8">
          {currentStep === 1 && (
            <>
              <OnboardingInput
                label="Enter your name"
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                name="name"
                required
              />
              <OnboardingInput
                label="Phone"
                type="tel"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                name="phone"
                required
              />
            </>
          )}
          {currentStep === 2 && (
            <>
              <OnboardingInput
                label="Address"
                type="text"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                name="address"
                required
              />
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <OnboardingInput
                    label="Zip Code"
                    type="text"
                    value={zipCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
                    name="zipCode"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <OnboardingInput
                    label="State"
                    type="text"
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                    name="state"
                    required
                  />
                </div>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <OnboardingInput
              label="What school/university are you in"
              type="text"
              value={school}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSchool(e.target.value)}
              name="school"
              required
            />
          )}
          {currentStep === 4 && (
            <OptionsGrid
              title="How did you hear about us?"
              options={hearAboutUsOptions}
              onSelect={setHowDidYouHear}
            />
          )}
          {currentStep === 5 && (
            <OptionsGrid
              title="What type of hackathons are you most interested in?"
              options={hackathonOptions}
              onSelect={setInterestedHackathons}
            />
          )}
          {currentStep === 6 && (
            <OptionsGrid
              title="What is your prior experience with hackathons or similar competitions?"
              options={experienceOptions}
              onSelect={setPriorExperience}
            />
          )}
          {currentStep === 7 && (
            <OptionsGrid
              title="Do you prefer working in a team or individually?"
              options={teamOptions}
              onSelect={setTeamPreference}
            />
          )}
          {currentStep === 8 && (
            <OptionsGrid
              title="What level of participation fee are you comfortable with?"
              options={feeOptions}
              onSelect={setParticipationFee}
            />
          )}
        </div>
      </div>
      <button
        onClick={handleBack}
        className={`absolute bottom-10 left-10 text-white text-xl hover:underline ${currentStep === 1 ? 'hidden' : ''}`}
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="absolute bottom-10 right-10 text-white text-xl hover:underline"
      >
        Next
      </button>
    </div>
  );
};

export default Onboarding;
